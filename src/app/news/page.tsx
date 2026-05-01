import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Novedades' };

type ChangeType = 'new' | 'fix' | 'improve';

const entries = [
  {
    version: 'v2.4.0',
    date: '22 abr 2025',
    tag: 'Nueva versión',
    tagColor: 'text-brand bg-brand/10 border-brand/20',
    changes: [
      { type: 'new' as ChangeType, text: 'Módulo de tickets completamente rediseñado con transcripciones en HTML.' },
      { type: 'new' as ChangeType, text: 'Comando /qr para generar códigos QR desde Discord.' },
      { type: 'new' as ChangeType, text: 'Soporte para Spotify en el módulo de música.' },
      { type: 'fix' as ChangeType, text: 'Corregido bug donde /purge eliminaba mensajes del bot incorrectamente.' },
      { type: 'fix' as ChangeType, text: 'Mejorada la estabilidad de la conexión de voz en servidores grandes.' },
      { type: 'improve' as ChangeType, text: 'Reducido el tiempo de respuesta promedio de comandos en un 30%.' },
    ],
  },
  {
    version: 'v2.3.2',
    date: '8 abr 2025',
    tag: 'Parche',
    tagColor: 'text-muted bg-surface-2 border-border',
    changes: [
      { type: 'fix' as ChangeType, text: 'Corregido error en el sistema de economía que duplicaba monedas en ciertos casos.' },
      { type: 'fix' as ChangeType, text: 'Arreglado el comando /remind que no enviaba el recordatorio en horario de verano.' },
      { type: 'improve' as ChangeType, text: 'Optimizadas las consultas a la base de datos para reducir latencia.' },
    ],
  },
  {
    version: 'v2.3.0',
    date: '1 abr 2025',
    tag: 'Nueva versión',
    tagColor: 'text-brand bg-brand/10 border-brand/20',
    changes: [
      { type: 'new' as ChangeType, text: 'Sistema de notificaciones: avisos automáticos de Twitch y YouTube.' },
      { type: 'new' as ChangeType, text: 'Comando /translate con soporte para más de 50 idiomas.' },
      { type: 'new' as ChangeType, text: 'Estadísticas del servidor disponibles para planes Premium.' },
      { type: 'fix' as ChangeType, text: 'Mejorada la detección de anti-raid con menor tasa de falsos positivos.' },
    ],
  },
];

const typeLabel: Record<ChangeType, { label: string; color: string }> = {
  new:     { label: 'Nuevo',  color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  fix:     { label: 'Fix',    color: 'text-red-400 bg-red-500/10 border-red-500/20' },
  improve: { label: 'Mejora', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
};

export default function NewsPage() {
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
            Novedades
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            Lo último de<br /><span className="text-gradient">Caramel.</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-md mx-auto leading-relaxed">
            Actualizaciones, correcciones y mejoras. Siempre construyendo algo mejor.
          </p>
        </Container>
      </section>

      {/* Changelog */}
      <section className="pb-32">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {entries.map(entry => (
              <div key={entry.version} className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-brand" />

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-800 text-text text-lg">{entry.version}</span>
                  <span className={`text-xs font-bold font-body px-2 py-0.5 rounded-full border ${entry.tagColor}`}>{entry.tag}</span>
                  <span className="text-xs font-body text-muted ml-auto">{entry.date}</span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`text-[10px] font-bold font-body px-1.5 py-0.5 rounded border mt-0.5 shrink-0 ${typeLabel[c.type].color}`}>
                        {typeLabel[c.type].label}
                      </span>
                      <span className="text-sm font-body text-muted leading-relaxed">{c.text}</span>
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
