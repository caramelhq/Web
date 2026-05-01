import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Módulos' };

const modules = [
  { icon: '🛡️', name: 'Moderación', badge: 'Esencial', desc: 'Control total de tu servidor. Ban, kick, mute, warn, slowmode, lockdown y más. Sistema de casos con historial por usuario.', features: ['Infracciones con historial', 'Auto-moderación por palabras', 'Anti-spam y anti-raid', 'Logs de acciones'] },
  { icon: '🎵', name: 'Música', badge: 'Popular', desc: 'Reproduce música desde YouTube, Spotify y SoundCloud con calidad de audio alta. Cola, filtros y controles completos.', features: ['YouTube, Spotify, SoundCloud', 'Cola ilimitada (Premium)', 'Filtros de audio', 'Controles por botones'] },
  { icon: '💰', name: 'Economía', badge: null, desc: 'Sistema de economía propio por servidor. Moneda virtual, tienda, inventario, trabajos y apuestas.', features: ['Moneda personalizable', 'Tienda del servidor', 'Trabajos y crimen', 'Tablas de clasificación'] },
  { icon: '👋', name: 'Bienvenidas', badge: null, desc: 'Mensajes de bienvenida y despedida personalizados. Asignación automática de roles al entrar.', features: ['Mensajes personalizados', 'Imágenes de bienvenida', 'Roles automáticos', 'DM al nuevo miembro'] },
  { icon: '⭐', name: 'Niveles', badge: null, desc: 'Sistema de XP y niveles por actividad en el servidor. Recompensas de roles al subir de nivel.', features: ['XP por mensajes y voz', 'Roles de recompensa', 'Ranking del servidor', 'Multiplicadores de XP'] },
  { icon: '🔧', name: 'Utilidades', badge: null, desc: 'Herramientas del día a día: encuestas, recordatorios, clima, calculadora, traducción y mucho más.', features: ['Encuestas y votaciones', 'Recordatorios', 'Búsqueda en Wikipedia', 'Traducción automática'] },
  { icon: '🎫', name: 'Tickets', badge: null, desc: 'Sistema de tickets para soporte interno del servidor. Canales privados, transcripciones y estadísticas.', features: ['Canales privados por ticket', 'Transcripciones en HTML', 'Categorías de tickets', 'Estadísticas de soporte'] },
  { icon: '📊', name: 'Estadísticas', badge: 'Premium', desc: 'Analítica avanzada de tu servidor: miembros activos, canales más usados, horas pico y más.', features: ['Actividad por canal', 'Horas pico del servidor', 'Retención de miembros', 'Exportación de datos'] },
  { icon: '🔔', name: 'Notificaciones', badge: null, desc: 'Avisos automáticos de Twitch, YouTube y Reddit directamente en tus canales cuando haya nuevo contenido.', features: ['Twitch en vivo', 'Nuevos videos de YouTube', 'Posts de Reddit', 'Mensajes personalizados'] },
];

export default function ModulesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
            Módulos
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            Todo lo que<br /><span className="text-gradient">necesitas.</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-lg mx-auto leading-relaxed">
            Cada módulo de Caramel está diseñado para integrarse perfectamente. Activa solo lo que uses, sin ruido innecesario.
          </p>
        </Container>
      </section>

      {/* Modules grid */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map(mod => (
              <div key={mod.name} className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-brand/30 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{mod.icon}</span>
                    <h3 className="font-display font-800 text-text text-lg">{mod.name}</h3>
                  </div>
                  {mod.badge && (
                    <span className={`text-[10px] font-bold font-body tracking-widest uppercase px-2 py-0.5 rounded-full ${mod.badge === 'Premium' ? 'bg-brand/15 text-brand border border-brand/20' : mod.badge === 'Popular' ? 'bg-brand/10 text-brand border border-brand/15' : 'bg-surface-2 text-muted border border-border'}`}>
                      {mod.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm font-body leading-relaxed">{mod.desc}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {mod.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs font-body text-muted">
                      <svg className="w-3.5 h-3.5 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
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
