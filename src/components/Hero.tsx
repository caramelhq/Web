import Image from 'next/image';
import DiscordIcon from './icons/DiscordIcon';
import Container from './Container';
import caramelIcon from '../assets/Caramel-Icon.png';
import { INVITE_URL } from '../config';
import type { BotStats } from '../app/page';

function fmt(n: number | null | undefined): string {
  if (n == null) return '—';
  if (n >= 1_000_000) return `${+(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000)     return `${+(n / 1_000).toFixed(1)}k+`;
  return `${n}+`;
}

export default function Hero({ stats }: { stats: BotStats | null }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(215,118,85,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(215,118,85,0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-semibold font-body tracking-widest uppercase animate-fade-up opacity-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span data-i18n="hero.badge">Discord Bot · Disponible ahora</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-800 leading-[0.95] tracking-tight mb-6 animate-fade-up opacity-0 delay-1">
              <span data-i18n="hero.line1" className="block text-5xl md:text-6xl lg:text-7xl text-text">Make it simple.</span>
              <span data-i18n="hero.line2" className="block text-5xl md:text-6xl lg:text-7xl text-gradient">Make it perfect.</span>
            </h1>

            {/* Tagline */}
            <p data-i18n="hero.desc" className="text-muted text-lg md:text-xl font-body font-300 leading-relaxed max-w-md mb-10 animate-fade-up opacity-0 delay-2">
              El bot de Discord que se adapta a tu servidor, no al revés.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 animate-fade-up opacity-0 delay-3">
              <a
                href={INVITE_URL}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand hover:bg-brand-light text-bg font-semibold font-body rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5"
              >
                <DiscordIcon width="18" height="18" />
                <span data-i18n="hero.cta.add">Añadir a Discord</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border hover:border-brand/50 text-muted hover:text-text font-medium font-body rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span data-i18n="hero.cta.features">Ver funciones</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 animate-fade-up opacity-0 delay-4">
              <div className="text-center">
                <p className="font-display font-700 text-3xl text-text">{fmt(stats?.servers)}</p>
                <p data-i18n="stats.servers" className="text-muted text-xs font-body uppercase tracking-widest mt-0.5">Servidores</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-display font-700 text-3xl text-text">{fmt(stats?.users)}</p>
                <p data-i18n="stats.users" className="text-muted text-xs font-body uppercase tracking-widest mt-0.5">Usuarios</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-display font-700 text-3xl text-text">{fmt(stats?.commands)}</p>
                <p data-i18n="stats.commands" className="text-muted text-xs font-body uppercase tracking-widest mt-0.5">Comandos</p>
              </div>
            </div>
          </div>

          {/* Mascot */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0 delay-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl glow-brand scale-90 translate-y-4 blur-2xl opacity-60" />
              <Image
                src={caramelIcon}
                alt="Caramel"
                width={384}
                height={384}
                priority
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover ring-1 ring-brand/20"
              />
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 75% 15%, rgba(255,255,255,0.18) 0%, transparent 55%)' }}
              />
            </div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
