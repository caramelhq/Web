import type { Metadata } from 'next';
import Container from '@/components/Container';
import UptimeChart from '@/components/UptimeChart';
import { getBotHealth, getBotHistory } from '@/lib/bot-stats';

export const metadata: Metadata = { title: 'Estado' };

function fmt(n: number | null | undefined): string {
  if (n == null) return '—';
  if (n >= 1_000_000) return `${+(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000)     return `${+(n / 1_000).toFixed(1)}k+`;
  return `${n}+`;
}

const incidents = [
  {
    date: '24 abr 2025',
    title: 'Interrupción parcial del módulo de música',
    body: 'El proveedor de streaming presentó problemas intermitentes entre las 14:00 y las 16:30 UTC. Resuelto sin pérdida de datos.',
    resolved: true,
  },
  {
    date: '10 abr 2025',
    title: 'Latencia elevada en la API de comandos',
    body: 'Incremento temporal de latencia por mantenimiento en la infraestructura. Resuelto en menos de 30 minutos.',
    resolved: true,
  },
];

export default async function StatusPage() {
  const [health, history] = await Promise.all([
    getBotHealth(60),
    getBotHistory(60),
  ]);

  const { online, latency, stats } = health;

  const badgeClass = online
    ? 'border-green-500/30 bg-green-500/10 text-green-400'
    : 'border-red-500/30 bg-red-500/10 text-red-400';
  const dotClass   = online ? 'bg-green-500' : 'bg-red-500';
  const badgeLabel = online ? 'Todos los sistemas operativos' : 'Bot sin conexión';

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-12 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.07) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border text-xs font-bold font-body ${badgeClass}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotClass}`} />
            {badgeLabel}
          </div>
          <h1 className="font-display font-800 text-4xl md:text-5xl text-text leading-tight tracking-tight mt-4 mb-3">
            Estado del sistema
          </h1>
          <p className="text-muted text-base font-body">Actualiza cada 60 segundos</p>
        </Container>
      </section>

      {/* Service */}
      <section className="pb-10">
        <Container>
          <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <p className="text-xs font-bold font-body text-muted tracking-widest uppercase">Servicios</p>
            </div>
            <ul className="divide-y divide-border/50">
              <li className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${online ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm font-bold font-body text-text">Bot de Caramel</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-body text-muted">
                    {latency != null ? `${latency}ms` : '—'}
                  </span>
                  <span className={`text-xs font-bold font-body ${online ? 'text-green-400' : 'text-red-400'}`}>
                    {online ? 'Operativo' : 'Caído'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Uptime chart */}
      <section className="pb-10">
        <Container>
          <div className="max-w-2xl mx-auto">
            <UptimeChart history={history} />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <Container>
          <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4">
            {[
              { label: 'Servidores', value: fmt(stats?.servers)  },
              { label: 'Usuarios',   value: fmt(stats?.users)    },
              { label: 'Comandos',   value: fmt(stats?.commands) },
            ].map(({ label, value }) => (
              <div key={label} className="bg-surface border border-border rounded-2xl p-6 text-center">
                <p className="font-display font-700 text-3xl text-text">{value}</p>
                <p className="text-muted text-xs font-body uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Incidents */}
      <section className="pb-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-800 text-lg text-text mb-4">Historial de incidencias</h2>
            <div className="flex flex-col gap-4">
              {incidents.map(inc => (
                <div key={inc.title} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-sm font-bold font-body text-text">{inc.title}</p>
                    <span className="text-xs font-body text-muted shrink-0">{inc.date}</span>
                  </div>
                  <p className="text-xs font-body text-muted leading-relaxed mb-3">{inc.body}</p>
                  {inc.resolved && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold font-body text-green-400">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Resuelto
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
