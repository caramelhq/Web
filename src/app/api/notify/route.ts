import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONFIRM_HTML = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#0c0a09;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:480px;margin:40px auto;padding:40px 36px;background:#141110;border-radius:16px;border:1px solid #2e2219;">
    <img src="https://caramel.gg/images/CaramelIcon.svg" alt="Caramel" width="52" height="52"
      style="border-radius:12px;display:block;margin-bottom:28px;" />
    <h1 style="color:#f0ebe5;font-size:22px;font-weight:700;margin:0 0 10px 0;line-height:1.3;">
      ¡Estás en la lista!
    </h1>
    <p style="color:#7a6a60;font-size:15px;line-height:1.7;margin:0 0 28px 0;">
      Gracias por tu interés en Caramel. Estamos trabajando duro para lanzar el bot pronto.
      Te enviaremos un correo en cuanto esté disponible para que seas de los primeros en añadirlo a tu servidor.
    </p>
    <div style="padding:16px 18px;background:#0c0a09;border-radius:10px;border-left:3px solid #d77655;margin-bottom:32px;">
      <p style="color:#d77655;font-size:13px;font-weight:600;margin:0 0 5px 0;">Mientras tanto</p>
      <p style="color:#7a6a60;font-size:13px;margin:0;line-height:1.6;">
        Explora las funciones previstas en
        <a href="https://caramel.gg" style="color:#d77655;text-decoration:none;">caramel.gg</a>
      </p>
    </div>
    <hr style="border:none;border-top:1px solid #2e2219;margin:0 0 20px 0;" />
    <p style="color:#3d302a;font-size:12px;margin:0;line-height:1.6;">
      © ${new Date().getFullYear()} Caramel &nbsp;·&nbsp;
      <a href="https://caramel.gg/privacy" style="color:#3d302a;text-decoration:none;">Privacidad</a>
      &nbsp;·&nbsp;
      Recibiste este correo porque te suscribiste en caramel.gg
    </p>
  </div>
</body>
</html>`;

export async function POST(req: NextRequest) {
  let email: string;
  try {
    const body = await req.json();
    email = (body.email ?? '').toString().trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 });
  }

  if (!resend) {
    console.log('[notify] registered (no Resend key):', email);
    return NextResponse.json({ ok: true });
  }

  // Check for duplicate — contacts.get returns data:null if not found
  const { data: existing } = await resend.contacts.get({ email });
  if (existing) {
    return NextResponse.json({ ok: true });
  }

  // New subscriber — save contact
  const { error: createError } = await resend.contacts.create({
    email,
    unsubscribed: false,
  });

  if (createError) {
    console.error('[notify] contacts.create error:', createError);
    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }

  // Send confirmation email (best-effort)
  const { error: emailError } = await resend.emails.send({
    from: 'Caramel <no-reply@caramel.gg>',
    to: email,
    subject: '¡Caramel se lanza pronto! 🍮',
    html: CONFIRM_HTML,
  });

  if (emailError) {
    console.error('[notify] emails.send error:', emailError);
  }

  return NextResponse.json({ ok: true });
}
