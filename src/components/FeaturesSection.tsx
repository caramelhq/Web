import Container from './Container';

const features = [
  {
    tag: 'Moderación',
    title: 'Control total,\nsin esfuerzo.',
    desc: 'Bans, kicks, mutes, warns y logs en un solo sistema. Historial de casos por usuario, auto-moderación configurable y anti-raid incorporado.',
    perks: ['Sistema de casos con historial', 'Anti-spam y anti-raid', 'Logs detallados por acción'],
    link: '/modules',
    linkLabel: 'Ver módulo',
    reverse: false,
    mock: 'moderation',
  },
  {
    tag: 'Música',
    title: 'Música sin\ninterrupciones.',
    desc: 'Reproduce desde YouTube, Spotify y SoundCloud con alta calidad. Cola, filtros de audio y controles por botones sin salir de Discord.',
    perks: ['YouTube, Spotify, SoundCloud', 'Filtros de audio en tiempo real', 'Cola ilimitada con Premium'],
    link: '/modules',
    linkLabel: 'Ver módulo',
    reverse: true,
    mock: 'music',
  },
  {
    tag: 'Economía',
    title: 'Tu propia\neconomía.',
    desc: 'Moneda virtual por servidor, tienda personalizable, trabajos, apuestas y tablas de clasificación. Todo configurable desde el dashboard.',
    perks: ['Moneda y tienda propias', 'Trabajos, crimen y apuestas', 'Ranking del servidor'],
    link: '/modules',
    linkLabel: 'Ver módulo',
    reverse: false,
    mock: 'economy',
  },
  {
    tag: 'Niveles',
    title: 'Premia la\nactividad.',
    desc: 'XP por mensajes y tiempo en voz. Roles de recompensa automáticos al subir de nivel y ranking del servidor en tiempo real.',
    perks: ['XP por mensajes y voz', 'Roles de recompensa automáticos', 'Ranking en tiempo real'],
    link: '/modules',
    linkLabel: 'Ver módulo',
    reverse: true,
    mock: 'levels',
  },
];

const musicQueue = [
  { n: '1', title: 'Hotel California', artist: 'Eagles' },
  { n: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
  { n: '3', title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
];

const levelsTop = [
  { pos: '1', name: '@roberto', level: 31, color: 'text-yellow-400' },
  { pos: '2', name: '@jaysh',   level: 24, color: 'text-brand' },
  { pos: '3', name: '@maria',   level: 15, color: 'text-muted' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">

      {/* subtle bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.04) 0%, transparent 70%)' }}
      />

      <Container className="relative">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs font-bold font-body text-brand tracking-widest uppercase">Features</span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text mt-3 mb-4 leading-tight tracking-tight">
            Todo lo que necesitas,<br />en un solo bot.
          </h2>
          <p className="text-muted font-body text-lg max-w-lg mx-auto leading-relaxed">
            Cada módulo diseñado para integrarse perfectamente. Activa solo lo que usas.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-28">
          {features.map(f => (
            <div key={f.tag} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center${f.reverse ? ' lg:[&>*:first-child]:order-2' : ''}`}>

              {/* Text side */}
              <div>
                <span className="inline-block text-xs font-bold font-body text-brand tracking-widest uppercase mb-4 px-3 py-1 rounded-lg border border-brand/25 bg-brand/8">
                  {f.tag}
                </span>
                <h3 className="font-display font-800 text-3xl md:text-4xl text-text leading-tight tracking-tight mb-4 whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="text-muted font-body text-base leading-relaxed mb-6">{f.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {f.perks.map(p => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-body text-muted">
                      <svg className="w-4 h-4 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={f.link} className="inline-flex items-center gap-2 text-sm font-bold font-body text-brand hover:text-brand-light transition-colors duration-200">
                  {f.linkLabel}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </div>

              {/* Mock side */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-30 scale-90 translate-y-4"
                  style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.3) 0%, transparent 70%)' }}
                />

                {f.mock === 'moderation' && (
                  <div className="relative bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 text-xs font-body text-muted"># moderación-logs</span>
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-muted/20 shrink-0 flex items-center justify-center text-xs font-bold text-muted">A</div>
                        <div>
                          <p className="text-xs font-body text-muted mb-0.5">admin <span className="text-subtle">hoy a las 14:23</span></p>
                          <p className="text-sm font-body text-text"><span className="text-brand font-bold">/warn</span> @carlos123 comportamiento tóxico</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-brand/20 shrink-0 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity=".3" /><circle cx="12" cy="12" r="4" /></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-body text-brand mb-1.5 font-bold">Caramel <span className="text-subtle font-normal">BOT</span></p>
                          <div className="bg-surface-2 border border-border rounded-xl p-3.5 text-xs font-body">
                            <div className="flex items-center gap-2 mb-2.5">
                              <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19h-17L12 5.5zM11 10v4h2v-4zm0 6v2h2v-2z" /></svg>
                              <span className="font-bold text-text">Advertencia registrada</span>
                            </div>
                            <div className="flex flex-col gap-1.5 text-muted">
                              <p><span className="text-subtle">Usuario</span> &nbsp;@carlos123</p>
                              <p><span className="text-subtle">Razón &nbsp;&nbsp;</span> comportamiento tóxico</p>
                              <p><span className="text-subtle">Warns &nbsp;</span> <span className="text-yellow-400 font-bold">3 / 5</span></p>
                              <p><span className="text-subtle">Caso &nbsp;&nbsp;</span> #87</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 opacity-50">
                        <div className="w-7 h-7 rounded-full bg-brand/20 shrink-0" />
                        <div className="flex-1">
                          <div className="bg-surface-2 border border-border rounded-xl p-3 text-xs font-body text-muted">
                            <div className="flex items-center gap-2">
                              <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2zm0-4h-2V7h2z" /></svg>
                              <span>Ban aplicado — @spammer99 · Caso #86</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {f.mock === 'music' && (
                  <div className="relative bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 text-xs font-body text-muted"># música</span>
                    </div>
                    <div className="p-5">
                      <div className="bg-surface-2 border border-border rounded-xl p-4 mb-4">
                        <p className="text-[10px] font-bold font-body text-brand tracking-widest uppercase mb-3">Reproduciendo ahora</p>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-brand/20 border border-brand/20 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" /></svg>
                          </div>
                          <div>
                            <p className="text-sm font-bold font-body text-text">Bohemian Rhapsody</p>
                            <p className="text-xs font-body text-muted">Queen · 5:55</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-body text-muted mb-1">
                          <span>2:34</span>
                          <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                            <div className="h-full bg-brand rounded-full" style={{ width: '43%' }} />
                          </div>
                          <span>5:55</span>
                        </div>
                        <div className="flex items-center justify-center gap-5 mt-3 text-muted">
                          <svg className="w-4 h-4 hover:text-text cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18V6l-2 2V4h4v4l-2-2v12l2-2v4H4v-4l2 2z" /><path d="M18 6v12l-8-6 8-6z" /></svg>
                          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-bg cursor-pointer">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                          </div>
                          <svg className="w-4 h-4 hover:text-text cursor-pointer" viewBox="0 0 24 24" fill="currentColor"><path d="M18 18V6l2 2V4h-4v4l2-2v12l-2-2v4h4v-4l-2 2z" /><path d="M6 6v12l8-6L6 6z" /></svg>
                        </div>
                      </div>
                      <p className="text-[10px] font-bold font-body text-muted tracking-widest uppercase mb-2.5">Cola · 3 canciones</p>
                      <div className="flex flex-col gap-2">
                        {musicQueue.map(s => (
                          <div key={s.n} className="flex items-center gap-3 text-xs font-body">
                            <span className="text-subtle w-3 text-right shrink-0">{s.n}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-muted truncate">{s.title} <span className="text-subtle">· {s.artist}</span></p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {f.mock === 'economy' && (
                  <div className="relative bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 text-xs font-body text-muted"># economía</span>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      <div className="bg-surface-2 border border-border rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-muted/20 flex items-center justify-center text-xs font-bold text-muted">J</div>
                            <span className="text-sm font-bold font-body text-text">@jaysh</span>
                          </div>
                          <span className="text-[10px] font-bold font-body text-brand tracking-widest uppercase px-2 py-0.5 rounded-full bg-brand/10 border border-brand/20">Rank #3</span>
                        </div>
                        <p className="text-[10px] font-body text-muted uppercase tracking-wider mb-1">Balance</p>
                        <p className="font-display font-800 text-2xl text-text">◈ 12,450</p>
                        <p className="text-xs font-body text-muted mt-0.5">+ 2,300 esta semana</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-brand/20 shrink-0 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".2" /><path d="M12 7v5l3 3-1.4 1.4L10 13V7z" /></svg>
                        </div>
                        <div>
                          <p className="text-xs font-body text-brand font-bold mb-1">Caramel <span className="text-subtle font-normal">BOT</span></p>
                          <div className="bg-surface-2 border border-border rounded-xl p-3 text-xs font-body">
                            <div className="flex items-center gap-2 mb-1.5">
                              <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14.5v-5l-2 1.5V11l3-2 3 2v1.5l-2-1.5v5h-2z" /></svg>
                              <span className="font-bold text-text">¡Recompensa diaria!</span>
                            </div>
                            <p className="text-muted">Has recibido <span className="text-green-400 font-bold">◈ +500</span> monedas.</p>
                            <p className="text-subtle mt-1">Racha actual: 7 días 🔥</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-body text-muted border-t border-border/50 pt-3">
                        <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        <span>Tienda del servidor · <span className="text-brand cursor-pointer">12 ítems disponibles</span></span>
                      </div>
                    </div>
                  </div>
                )}

                {f.mock === 'levels' && (
                  <div className="relative bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 text-xs font-body text-muted"># niveles</span>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      <div className="bg-surface-2 border border-border rounded-xl p-4 relative overflow-hidden">
                        <div
                          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                          style={{ background: 'radial-gradient(circle, #d77655, transparent)', transform: 'translate(30%, -30%)' }}
                        />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brand/20 border-2 border-brand/30 flex items-center justify-center font-bold text-brand">J</div>
                          <div>
                            <p className="text-sm font-bold font-body text-text">@jaysh</p>
                            <p className="text-xs font-body text-muted">Rank <span className="text-brand font-bold">#2</span> del servidor</p>
                          </div>
                          <div className="ml-auto text-right">
                            <p className="text-[10px] font-body text-muted uppercase tracking-wider">Nivel</p>
                            <p className="font-display font-800 text-2xl text-text">24</p>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-[10px] font-body text-muted mb-1.5">
                            <span>8,432 XP</span>
                            <span>10,000 XP</span>
                          </div>
                          <div className="h-2 bg-border rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: '84%', background: 'linear-gradient(90deg, #d77655, #e8936f)' }} />
                          </div>
                        </div>
                        <p className="text-[10px] font-body text-muted">1,568 XP para el nivel 25</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-brand/20 shrink-0 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".2" /><path d="M12 7v5l3 3-1.4 1.4L10 13V7z" /></svg>
                        </div>
                        <div>
                          <p className="text-xs font-body text-brand font-bold mb-1">Caramel <span className="text-subtle font-normal">BOT</span></p>
                          <div className="bg-surface-2 border border-border rounded-xl p-3 text-xs font-body">
                            <p className="text-muted">🎉 <span className="text-text font-bold">@maria</span> acaba de subir al <span className="text-brand font-bold">nivel 15</span> y obtuvo el rol <span className="text-text font-bold">Veterano</span>.</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-border/50 pt-3">
                        <p className="text-[10px] font-bold font-body text-muted tracking-widest uppercase mb-2.5">Top del servidor</p>
                        <div className="flex flex-col gap-2">
                          {levelsTop.map(u => (
                            <div key={u.pos} className="flex items-center gap-2 text-xs font-body">
                              <span className={`w-4 font-bold ${u.color}`}>{u.pos}</span>
                              <span className="flex-1 text-muted">{u.name}</span>
                              <span className="text-subtle">nv. <span className="text-text font-bold">{u.level}</span></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
