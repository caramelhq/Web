'use client';

import { useState } from 'react';
import type { BotHistory, UptimeBucket } from '@/lib/bot-stats';

type Period = 'day' | 'week' | 'month';

const PERIOD_LABELS: Record<Period, string> = {
  day:   'Día',
  week:  'Semana',
  month: 'Mes',
};

const PERIOD_SUBLABELS: Record<Period, string> = {
  day:   'últ. 24 horas',
  week:  'últ. 7 días',
  month: 'últ. 30 días',
};

function barColor(uptime: number, checks: number): string {
  if (checks === 0) return '#1e1a17';
  if (uptime >= 99)  return '#22c55e';
  if (uptime >= 90)  return '#facc15';
  if (uptime > 0)    return '#f97316';
  return '#ef4444';
}

function avgUptime(data: UptimeBucket[]): number | null {
  const filled = data.filter(b => b.checks > 0);
  if (filled.length === 0) return null;
  return filled.reduce((s, b) => s + b.uptime, 0) / filled.length;
}

function uptimeColor(uptime: number | null): string {
  if (uptime == null) return 'text-muted';
  if (uptime >= 99)   return 'text-green-400';
  if (uptime >= 90)   return 'text-yellow-400';
  return 'text-red-400';
}

export default function UptimeChart({ history }: { history: BotHistory | null }) {
  const [period, setPeriod]   = useState<Period>('week');
  const [hovered, setHovered] = useState<number | null>(null);

  if (!history) {
    return (
      <div className="bg-surface border border-border rounded-2xl px-6 py-8 text-center">
        <p className="text-muted font-body text-sm">Sin datos históricos — el bot necesita exponer <code className="text-text bg-bg px-1.5 py-0.5 rounded text-xs">/stats/history</code></p>
      </div>
    );
  }

  const data   = history[period];
  const uptime = avgUptime(data);

  return (
    <div className="bg-surface border border-border rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs font-bold font-body text-muted tracking-widest uppercase mb-1.5">
            Historial de uptime
          </p>
          <div className="flex items-baseline gap-2">
            <span className={`font-display font-700 text-2xl ${uptimeColor(uptime)}`}>
              {uptime != null ? `${uptime.toFixed(2)}%` : '—'}
            </span>
            <span className="text-muted text-xs font-body">{PERIOD_SUBLABELS[period]}</span>
          </div>
        </div>

        {/* Period selector */}
        <div className="flex items-center gap-1 bg-bg rounded-lg p-1 border border-border">
          {(Object.keys(PERIOD_LABELS) as Period[]).map(p => (
            <button
              key={p}
              onClick={() => { setPeriod(p); setHovered(null); }}
              className={`px-3 py-1.5 rounded-md text-xs font-bold font-body transition-all duration-150 ${
                period === p
                  ? 'bg-surface text-text border border-border shadow-sm'
                  : 'text-muted hover:text-text'
              }`}
            >
              {PERIOD_LABELS[p]}
            </button>
          ))}
        </div>
      </div>

      {/* Bars */}
      <div className="flex items-stretch gap-[3px] h-9">
        {data.map((bucket, i) => (
          <div
            key={i}
            className="relative flex-1 cursor-default"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip */}
            {hovered === i && (
              <div
                className="absolute bottom-full mb-2.5 z-20 pointer-events-none"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              >
                <div className="whitespace-nowrap bg-bg border border-border rounded-xl px-3 py-2.5 shadow-2xl">
                  <p className="font-bold font-body text-xs text-text mb-1">{bucket.label}</p>
                  {bucket.checks > 0 ? (
                    <>
                      <p className="font-body text-xs text-muted">{bucket.uptime.toFixed(1)}% uptime</p>
                      <p className="font-body text-xs text-muted">{bucket.checks} checks</p>
                    </>
                  ) : (
                    <p className="font-body text-xs text-muted">Sin datos</p>
                  )}
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-border" />
              </div>
            )}

            <div
              className="w-full h-full rounded-[3px] transition-opacity duration-100 hover:opacity-70"
              style={{ backgroundColor: barColor(bucket.uptime, bucket.checks) }}
            />
          </div>
        ))}
      </div>

      {/* X-axis */}
      <div className="flex justify-between mt-2 mb-5">
        <span className="text-muted text-[10px] font-body">{data.at(0)?.label ?? ''}</span>
        <span className="text-muted text-[10px] font-body">{data.at(-1)?.label ?? ''}</span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 pt-4 border-t border-border/50">
        {[
          { color: '#22c55e', label: 'Operativo'  },
          { color: '#facc15', label: 'Degradado'  },
          { color: '#f97316', label: 'Parcial'    },
          { color: '#ef4444', label: 'Caído'      },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] shrink-0" style={{ backgroundColor: color }} />
            <span className="text-muted text-[10px] font-body">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
