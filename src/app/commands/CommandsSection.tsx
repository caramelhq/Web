'use client';

import { useState } from 'react';
import Container from '../../components/Container';

interface Command {
  name: string;
  args: string;
  desc: string;
}

interface Category {
  id: string;
  label: string;
  commands: Command[];
}

const categories: Category[] = [
  {
    id: 'mod',
    label: 'Moderación',
    commands: [
      { name: '/ban', args: '@usuario [razón]', desc: 'Banea a un usuario del servidor.' },
      { name: '/kick', args: '@usuario [razón]', desc: 'Expulsa a un usuario del servidor.' },
      { name: '/mute', args: '@usuario [duración] [razón]', desc: 'Silencia a un usuario en todos los canales.' },
      { name: '/unmute', args: '@usuario', desc: 'Elimina el silencio de un usuario.' },
      { name: '/warn', args: '@usuario [razón]', desc: 'Emite una advertencia a un usuario.' },
      { name: '/warnings', args: '@usuario', desc: 'Muestra el historial de advertencias de un usuario.' },
      { name: '/clearwarns', args: '@usuario', desc: 'Elimina todas las advertencias de un usuario.' },
      { name: '/purge', args: '[cantidad]', desc: 'Elimina mensajes en masa del canal.' },
      { name: '/slowmode', args: '[segundos]', desc: 'Activa o ajusta el modo lento del canal.' },
      { name: '/lockdown', args: '[razón]', desc: 'Bloquea el canal para que solo los mods puedan escribir.' },
      { name: '/case', args: '[id]', desc: 'Muestra los detalles de un caso de moderación.' },
      { name: '/modlogs', args: '@usuario', desc: 'Muestra todos los casos de un usuario.' },
    ],
  },
  {
    id: 'music',
    label: 'Música',
    commands: [
      { name: '/play', args: '[canción o URL]', desc: 'Reproduce una canción o la añade a la cola.' },
      { name: '/pause', args: '', desc: 'Pausa la canción en reproducción.' },
      { name: '/resume', args: '', desc: 'Reanuda la canción pausada.' },
      { name: '/skip', args: '', desc: 'Salta a la siguiente canción de la cola.' },
      { name: '/stop', args: '', desc: 'Detiene la música y limpia la cola.' },
      { name: '/queue', args: '', desc: 'Muestra la cola de reproducción actual.' },
      { name: '/nowplaying', args: '', desc: 'Muestra la canción que se está reproduciendo.' },
      { name: '/volume', args: '[0-100]', desc: 'Ajusta el volumen del bot.' },
      { name: '/shuffle', args: '', desc: 'Mezcla el orden de la cola.' },
      { name: '/loop', args: '[song|queue|off]', desc: 'Activa o desactiva el modo de bucle.' },
      { name: '/seek', args: '[tiempo]', desc: 'Salta a un punto específico de la canción.' },
      { name: '/lyrics', args: '[canción]', desc: 'Muestra la letra de la canción actual o de una buscada.' },
    ],
  },
  {
    id: 'economy',
    label: 'Economía',
    commands: [
      { name: '/balance', args: '[@usuario]', desc: 'Muestra el saldo de tu cuenta o la de otro usuario.' },
      { name: '/daily', args: '', desc: 'Reclama tu recompensa diaria de monedas.' },
      { name: '/work', args: '', desc: 'Trabaja para ganar monedas.' },
      { name: '/crime', args: '', desc: 'Intenta cometer un crimen (arriesgado).' },
      { name: '/shop', args: '', desc: 'Abre la tienda del servidor.' },
      { name: '/buy', args: '[ítem]', desc: 'Compra un ítem de la tienda.' },
      { name: '/inventory', args: '[@usuario]', desc: 'Muestra el inventario de un usuario.' },
      { name: '/transfer', args: '@usuario [cantidad]', desc: 'Transfiere monedas a otro usuario.' },
      { name: '/leaderboard', args: '', desc: 'Muestra el ranking de riqueza del servidor.' },
      { name: '/bet', args: '[cantidad]', desc: 'Apuesta monedas en un juego de azar.' },
      { name: '/slots', args: '[cantidad]', desc: 'Juega a la tragamonedas.' },
      { name: '/rob', args: '@usuario', desc: 'Intenta robarle monedas a otro usuario.' },
    ],
  },
  {
    id: 'utils',
    label: 'Utilidades',
    commands: [
      { name: '/poll', args: '[pregunta] [opciones]', desc: 'Crea una encuesta con hasta 10 opciones.' },
      { name: '/remind', args: '[tiempo] [mensaje]', desc: 'Programa un recordatorio para más tarde.' },
      { name: '/translate', args: '[idioma] [texto]', desc: 'Traduce un texto al idioma especificado.' },
      { name: '/weather', args: '[ciudad]', desc: 'Muestra el clima actual de una ciudad.' },
      { name: '/avatar', args: '[@usuario]', desc: 'Muestra el avatar de un usuario en tamaño completo.' },
      { name: '/userinfo', args: '[@usuario]', desc: 'Muestra información detallada de un usuario.' },
      { name: '/serverinfo', args: '', desc: 'Muestra información del servidor.' },
      { name: '/roleinfo', args: '[rol]', desc: 'Muestra información de un rol.' },
      { name: '/math', args: '[expresión]', desc: 'Evalúa una expresión matemática.' },
      { name: '/color', args: '[hex]', desc: 'Muestra una previsualización de un color hexadecimal.' },
      { name: '/wiki', args: '[tema]', desc: 'Busca un tema en Wikipedia.' },
      { name: '/qr', args: '[texto o URL]', desc: 'Genera un código QR a partir de un texto o URL.' },
    ],
  },
];

export default function CommandsSection() {
  const [activeTab, setActiveTab] = useState('mod');
  const [query, setQuery] = useState('');

  const isSearching = query.trim().length > 0;

  const visibleCategories = isSearching ? categories : categories.filter(c => c.id === activeTab);

  const filteredCategories = visibleCategories.map(cat => ({
    ...cat,
    commands: isSearching
      ? cat.commands.filter(cmd =>
          cmd.name.toLowerCase().includes(query.toLowerCase()) ||
          cmd.desc.toLowerCase().includes(query.toLowerCase())
        )
      : cat.commands,
  })).filter(cat => cat.commands.length > 0);

  const noResults = isSearching && filteredCategories.length === 0;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
            Comandos
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            +300 comandos<br /><span className="text-gradient">a tu disposición.</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-lg mx-auto leading-relaxed">
            Todos los slash commands de Caramel, organizados por categoría. Usa la búsqueda para encontrar lo que necesitas.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar comando..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-surface border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
            />
          </div>
        </Container>
      </section>

      {/* Commands */}
      <section className="pb-32">
        <Container>

          {/* Tabs */}
          {!isSearching && (
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold font-body border transition-all duration-200 ${activeTab === cat.id ? 'bg-brand text-bg border-brand' : 'bg-transparent text-muted border-border hover:border-brand/40 hover:text-brand'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Command tables */}
          <div className="flex flex-col gap-8">
            {filteredCategories.map(cat => (
              <div key={cat.id}>
                {isSearching && (
                  <p className="text-xs font-bold font-body text-muted tracking-widest uppercase mb-3">{cat.label}</p>
                )}
                <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left px-5 py-3 text-xs font-bold font-body text-muted tracking-widest uppercase w-44">Comando</th>
                        <th className="text-left px-5 py-3 text-xs font-bold font-body text-muted tracking-widest uppercase w-56 hidden md:table-cell">Argumentos</th>
                        <th className="text-left px-5 py-3 text-xs font-bold font-body text-muted tracking-widest uppercase">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.commands.map((cmd, ci) => (
                        <tr key={cmd.name} className={`border-b border-border/50 last:border-0 hover:bg-surface-2 transition-colors duration-100${ci % 2 === 1 ? ' bg-surface-2/30' : ''}`}>
                          <td className="px-5 py-3.5">
                            <code className="text-brand font-bold text-xs bg-brand/8 px-2 py-0.5 rounded">{cmd.name}</code>
                          </td>
                          <td className="px-5 py-3.5 text-muted text-xs hidden md:table-cell">
                            {cmd.args || <span className="text-subtle">—</span>}
                          </td>
                          <td className="px-5 py-3.5 text-muted text-xs leading-relaxed">{cmd.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {noResults && (
            <div className="text-center py-16 text-muted font-body text-sm">
              No se encontraron comandos con esa búsqueda.
            </div>
          )}

        </Container>
      </section>
    </>
  );
}
