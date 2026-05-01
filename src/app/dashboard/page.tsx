import type { Metadata } from 'next';
import Container from '../../components/Container';
import DiscordIcon from '../../components/icons/DiscordIcon';
import { DASHBOARD_AUTH_URL } from '../../config';

export const metadata: Metadata = { title: 'Dashboard' };

const previewCards = [
  { label: 'Servidores', val: '—' },
  { label: 'Módulos activos', val: '—' },
  { label: 'Comandos hoy', val: '—' },
];

export default function DashboardPage() {
  return (
    <main>
      <section className="min-h-screen flex items-center pt-24 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(215,118,85,0.07) 0%, transparent 65%)' }}
        />

        <Container className="relative">
          <div className="max-w-lg mx-auto text-center">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 text-brand mb-8">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>

            <h1 className="font-display font-800 text-4xl md:text-5xl text-text leading-tight tracking-tight mb-4">
              Panel de control
            </h1>
            <p className="text-muted font-body text-lg leading-relaxed mb-10">
              Inicia sesión con tu cuenta de Discord para gestionar tus servidores, configurar módulos y acceder a estadísticas.
            </p>

            <a
              href={DASHBOARD_AUTH_URL}
              className="inline-flex items-center gap-3 px-8 py-3 bg-brand hover:bg-brand-light text-bg text-base font-bold font-body rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand/25"
            >
              <DiscordIcon className="w-5 h-5" />
              Ingresar con Discord
            </a>

            <p className="text-subtle text-xs font-body mt-6">
              Solo accedemos a tu información pública de Discord. No almacenamos contraseñas.
            </p>

            {/* Preview cards */}
            <div className="mt-16 grid grid-cols-3 gap-3 opacity-40 select-none pointer-events-none">
              {previewCards.map(card => (
                <div key={card.label} className="bg-surface border border-border rounded-xl p-4">
                  <p className="text-2xl font-800 font-display text-text mb-1">{card.val}</p>
                  <p className="text-xs font-body text-muted">{card.label}</p>
                </div>
              ))}
            </div>
            <p className="text-subtle text-xs font-body mt-3 opacity-60">Inicia sesión para ver tus estadísticas</p>

          </div>
        </Container>
      </section>
    </main>
  );
}
