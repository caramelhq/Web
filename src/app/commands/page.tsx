import type { Metadata } from 'next';
import CommandsSection from './CommandsSection';

export const metadata: Metadata = { title: 'Comandos' };

export default function CommandsPage() {
  return (
    <main>
      <CommandsSection />
    </main>
  );
}
