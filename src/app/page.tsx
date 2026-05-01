import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import ModuleIslands from '../components/ModuleIslands';
import CreatorNote from '../components/CreatorNote';

export interface BotStats {
  servers:  number;
  users:    number;
  commands: number;
}

async function getBotStats(): Promise<BotStats | null> {
  try {
    const res = await fetch(
      `http://${process.env.BOT_API_HOST ?? 'localhost'}:${process.env.BOT_API_PORT ?? 4000}/stats`,
      {
        headers: { Authorization: `Bearer ${process.env.STATS_API_TOKEN ?? ''}` },
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const stats = await getBotStats();

  return (
    <main>
      <Hero stats={stats} />
      <FeaturesSection />
      <ModuleIslands />
      <CreatorNote />
    </main>
  );
}
