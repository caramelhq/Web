'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i));
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-3">
      {faqs.map((item, i) => (
        <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold font-body text-text hover:text-brand transition-colors duration-150"
          >
            <span>{item.q}</span>
            <svg
              className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200${openIndex === i ? ' rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6l6-6" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-muted text-sm font-body leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
