import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Documentación' };

const sections = [
  { icon: '🚀', title: 'Primeros pasos', desc: 'Añade Caramel a tu servidor y configura los módulos básicos en minutos.', links: ['Añadir el bot', 'Permisos necesarios', 'Primer comando', 'Configuración inicial'] },
  { icon: '🛡️', title: 'Moderación', desc: 'Configura el sistema de moderación, auto-mod, logs y sistema de infracciones.', links: ['Comandos de moderación', 'Auto-moderación', 'Sistema de casos', 'Configurar logs'] },
  { icon: '🎵', title: 'Música', desc: 'Reproduce música desde múltiples fuentes y configura los controles por canal.', links: ['Fuentes soportadas', 'Comandos de música', 'Filtros de audio', 'Permisos de DJ'] },
  { icon: '💰', title: 'Economía', desc: 'Configura la moneda del servidor, la tienda y el sistema de trabajos.', links: ['Configurar moneda', 'Gestionar tienda', 'Sistema de trabajos', 'Tablas de clasificación'] },
  { icon: '⭐', title: 'Niveles', desc: 'Sistema de XP, niveles y recompensas automáticas por actividad.', links: ['Configurar XP', 'Roles de recompensa', 'Multiplicadores', 'Canal de subida de nivel'] },
  { icon: '🎫', title: 'Tickets', desc: 'Sistema de soporte interno con canales privados y transcripciones.', links: ['Crear panel de tickets', 'Categorías', 'Gestión de tickets', 'Transcripciones'] },
];

export default function DocsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
            Documentación
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            Todo lo que<br /><span className="text-gradient">necesitas saber.</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-lg mx-auto leading-relaxed mb-8">
            Guías, referencias y tutoriales para sacarle el máximo partido a Caramel.
          </p>

          {/* Search (static UI) */}
          <div className="max-w-md mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar en la documentación..."
              className="w-full pl-11 pr-4 py-2.5 bg-surface border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
            />
          </div>
        </Container>
      </section>

      {/* Sections grid */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map(s => (
              <div key={s.title} className="bg-surface border border-border rounded-2xl p-6 hover:border-brand/30 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <h2 className="font-display font-800 text-text text-base">{s.title}</h2>
                </div>
                <p className="text-muted text-sm font-body leading-relaxed mb-4">{s.desc}</p>
                <ul className="flex flex-col gap-2">
                  {s.links.map(link => (
                    <li key={link}>
                      <a href="#" className="flex items-center gap-2 text-xs font-body text-muted hover:text-brand transition-colors duration-150">
                        <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
