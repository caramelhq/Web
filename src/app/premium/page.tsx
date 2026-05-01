import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Premium' };

const freePlan = ['Moderación básica', 'Música (5 canciones en cola)', 'Comandos de utilidades', 'Soporte vía Discord'];
const premiumPlan = ['Todo lo del plan Gratis', 'Cola ilimitada de música', 'Filtros de audio avanzados', 'Roles de nivel personalizados', 'Logs detallados', 'Soporte prioritario'];
const serverPlan = ['Todo lo del plan Premium', 'Aplica a todo el servidor', 'Branding personalizado', 'Estadísticas avanzadas', 'Acceso a la API', 'Canal de soporte privado'];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PremiumPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.10) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
            Premium
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            Lleva tu servidor<br /><span className="text-gradient">al siguiente nivel.</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-lg mx-auto leading-relaxed">
            Desbloquea funciones exclusivas, límites más altos y acceso prioritario con Caramel Premium.
          </p>
        </Container>
      </section>

      {/* Plans */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Free */}
            <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold font-body text-muted tracking-widest uppercase mb-4">Gratis</p>
              <div className="mb-6">
                <span className="text-4xl font-800 font-display text-text">$0</span>
                <span className="text-muted font-body text-sm ml-1">/ mes</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm font-body text-muted">
                {freePlan.map(f => (
                  <li key={f} className="flex items-center gap-2.5"><CheckIcon />{f}</li>
                ))}
              </ul>
              <a href="#" className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-border text-muted text-sm font-bold font-body hover:border-brand/40 hover:text-brand transition-all duration-200">
                Plan actual
              </a>
            </div>

            {/* Premium */}
            <div className="bg-surface border-2 border-brand/50 rounded-2xl p-8 flex flex-col relative shadow-xl shadow-brand/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand text-bg text-xs font-bold font-body rounded-full tracking-wide">
                Popular
              </div>
              <p className="text-xs font-bold font-body text-brand tracking-widest uppercase mb-4">Premium</p>
              <div className="mb-6">
                <span className="text-4xl font-800 font-display text-text">$4.99</span>
                <span className="text-muted font-body text-sm ml-1">/ mes</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm font-body text-muted">
                {premiumPlan.map(f => (
                  <li key={f} className="flex items-center gap-2.5"><CheckIcon />{f}</li>
                ))}
              </ul>
              <a href="#" className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand hover:bg-brand-light text-bg text-sm font-bold font-body transition-all duration-200 hover:shadow-lg hover:shadow-brand/25">
                Obtener Premium
              </a>
            </div>

            {/* Server */}
            <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold font-body text-muted tracking-widest uppercase mb-4">Servidor</p>
              <div className="mb-6">
                <span className="text-4xl font-800 font-display text-text">$9.99</span>
                <span className="text-muted font-body text-sm ml-1">/ mes</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm font-body text-muted">
                {serverPlan.map(f => (
                  <li key={f} className="flex items-center gap-2.5"><CheckIcon />{f}</li>
                ))}
              </ul>
              <a href="#" className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-border text-muted text-sm font-bold font-body hover:border-brand/40 hover:text-brand transition-all duration-200">
                Obtener Servidor
              </a>
            </div>
          </div>

          <p className="text-center text-muted text-sm font-body mt-12">
            ¿Tienes dudas sobre Premium?
            <a href="/support" className="text-brand hover:text-brand-light underline underline-offset-2 transition-colors ml-1">Visita el soporte</a>
          </p>
        </Container>
      </section>
    </main>
  );
}
