import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = { title: 'Reportar bug' };

export default function ReportPage() {
  return (
    <main>
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative">
          <div className="max-w-xl mx-auto">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
                Reportar bug
              </div>
              <h1 className="font-display font-800 text-4xl md:text-5xl text-text leading-tight tracking-tight mb-4">
                ¿Encontraste algo roto?
              </h1>
              <p className="text-muted font-body text-lg leading-relaxed">
                Reporta el error con el mayor detalle posible para que podamos reproducirlo y corregirlo rápidamente.
              </p>
            </div>

            <form className="bg-surface border border-border rounded-2xl p-8 flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">Módulo afectado</label>
                <select className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text focus:outline-none focus:border-brand/50 transition-colors duration-200">
                  <option value="">Selecciona un módulo</option>
                  <option>Moderación</option>
                  <option>Música</option>
                  <option>Economía</option>
                  <option>Niveles</option>
                  <option>Tickets</option>
                  <option>Bienvenidas</option>
                  <option>Utilidades</option>
                  <option>Dashboard</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">Título del bug</label>
                <input
                  type="text"
                  placeholder="Ej: /ban no envía DM al usuario baneado"
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">¿Qué ocurrió?</label>
                <textarea
                  rows={4}
                  placeholder="Describe qué pasó exactamente. Incluye el comando usado, los argumentos y el resultado obtenido."
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">¿Qué esperabas que ocurriera?</label>
                <textarea
                  rows={3}
                  placeholder="Describe el comportamiento correcto esperado."
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">
                  Pasos para reproducirlo <span className="text-subtle normal-case">(opcional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder={'1. Ejecutar /ban @usuario\n2. Esperar respuesta del bot\n3. El usuario no recibe DM'}
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">
                  Tu usuario de Discord <span className="text-subtle normal-case">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="usuario#0000 o @usuario"
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-brand hover:bg-brand-light text-bg text-sm font-bold font-body rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25 mt-1"
              >
                Enviar reporte
              </button>

            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
