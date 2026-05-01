import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '../../components/Container';
import DiscordIcon from '../../components/icons/DiscordIcon';
import caramelIcon from '../../assets/Caramel-Icon.png';
import { INVITE_URL } from '../../config';

export const metadata: Metadata = { title: 'Invitar' };

const perms = [
  { icon: '🛡️', name: 'Gestionar roles', desc: 'Necesario para asignar roles automáticamente.' },
  { icon: '🔨', name: 'Banear y expulsar', desc: 'Requerido por los comandos de moderación.' },
  { icon: '💬', name: 'Gestionar mensajes', desc: 'Para el comando /purge y auto-moderación.' },
  { icon: '📋', name: 'Gestionar canales', desc: 'Para lockdown y creación de canales de tickets.' },
  { icon: '🔔', name: 'Enviar mensajes', desc: 'Funcionalidad básica de respuesta a comandos.' },
  { icon: '🎵', name: 'Conectar a voz', desc: 'Necesario para el módulo de música.' },
];

export default function InvitePage() {
  return (
    <main>
      <section className="min-h-screen flex items-center pt-24 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(215,118,85,0.09) 0%, transparent 65%)' }}
        />

        <Container className="relative">
          <div className="max-w-xl mx-auto text-center">

            <Image src={caramelIcon} alt="Caramel" width={96} height={96} className="w-24 h-24 rounded-3xl mx-auto mb-8 ring-2 ring-brand/20" />

            <h1 className="font-display font-800 text-4xl md:text-5xl text-text leading-tight tracking-tight mb-4">
              Añade Caramel<br /><span className="text-gradient">a tu servidor.</span>
            </h1>
            <p className="text-muted font-body text-lg leading-relaxed mb-8">
              En menos de un minuto tendrás moderación, música, economía y mucho más listo para usar.
            </p>

            <a
              href={INVITE_URL}
              className="inline-flex items-center gap-3 px-8 py-3 bg-brand hover:bg-brand-light text-bg text-base font-bold font-body rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand/25 mb-4"
            >
              <DiscordIcon className="w-5 h-5" />
              Añadir a Discord
            </a>
            <p className="text-subtle text-xs font-body">Gratis · Sin tarjeta de crédito · Configuración en segundos</p>

            {/* Permisos */}
            <div className="mt-14 text-left bg-surface border border-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <p className="text-sm font-bold font-body text-text">Permisos que solicita Caramel</p>
                <p className="text-xs font-body text-muted mt-0.5">Solo los necesarios para funcionar correctamente.</p>
              </div>
              <ul className="divide-y divide-border/50">
                {perms.map(p => (
                  <li key={p.name} className="flex items-start gap-4 px-6 py-3.5">
                    <span className="text-lg mt-0.5">{p.icon}</span>
                    <div>
                      <p className="text-sm font-bold font-body text-text">{p.name}</p>
                      <p className="text-xs font-body text-muted">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
