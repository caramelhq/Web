import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import ModuleIslands from '@/components/ModuleIslands';
import CreatorNote from '@/components/CreatorNote';
import { getBotStats } from '@/lib/bot-stats';

export type { BotStats } from '@/lib/bot-stats';

export default async function HomePage() {
  const stats = await getBotStats(300);

  return (
    <main>
      <Hero stats={stats} />
      <FeaturesSection />
      <ModuleIslands />
      <CreatorNote />
    </main>
  );
}
