export interface BotStats {
  servers:  number;
  users:    number;
  commands: number;
}

export interface BotHealth {
  online:  boolean;
  latency: number | null;
  stats:   BotStats | null;
}

export interface UptimeBucket {
  label:  string;   // "00:00" | "Lun" | "7 abr"
  uptime: number;   // 0–100
  checks: number;   // total checks in bucket (0 = sin datos)
}

export interface BotHistory {
  day:   UptimeBucket[];  // 24 buckets de 1h
  week:  UptimeBucket[];  // 7 buckets diarios
  month: UptimeBucket[];  // 30 buckets diarios
}

function endpoint() {
  const host = process.env.BOT_API_HOST ?? 'localhost';
  const port = process.env.BOT_API_PORT ?? '4000';
  return `http://${host}:${port}/stats`;
}

export async function getBotStats(revalidate = 300): Promise<BotStats | null> {
  try {
    const res = await fetch(endpoint(), {
      headers: { Authorization: `Bearer ${process.env.STATS_API_TOKEN ?? ''}` },
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getBotHealth(revalidate = 60): Promise<BotHealth> {
  const t0 = Date.now();
  try {
    const res = await fetch(endpoint(), {
      headers: { Authorization: `Bearer ${process.env.STATS_API_TOKEN ?? ''}` },
      next: { revalidate },
    });
    const latency = Date.now() - t0;
    if (!res.ok) return { online: false, latency: null, stats: null };
    const stats: BotStats = await res.json();
    return { online: true, latency, stats };
  } catch {
    return { online: false, latency: null, stats: null };
  }
}

export async function getBotHistory(revalidate = 60): Promise<BotHistory | null> {
  try {
    const host = process.env.BOT_API_HOST ?? 'localhost';
    const port = process.env.BOT_API_PORT ?? '4000';
    const res = await fetch(`http://${host}:${port}/stats/history`, {
      headers: { Authorization: `Bearer ${process.env.STATS_API_TOKEN ?? ''}` },
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
