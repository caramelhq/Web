'use client';

import { useEffect, useRef, useState } from 'react';
import DiscordIcon from './icons/DiscordIcon';
import { IconBellFilled, IconX, IconCheck, IconBell } from '@tabler/icons-react';
import { translations, type Lang } from '../lib/translations';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NotifyButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [lang, setLang] = useState<Lang>('es');
  const [hovered, setHovered] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function onEnter() {
    clearTimeout(hideTimer.current);
    setHovered(true);
  }

  function onLeave() {
    hideTimer.current = setTimeout(() => setHovered(false), 150);
  }

  useEffect(() => {
    const el = document.documentElement;
    setLang((el.dataset.lang as Lang) || 'es');
    const observer = new MutationObserver(() => {
      setLang((el.dataset.lang as Lang) || 'es');
    });
    observer.observe(el, { attributes: true, attributeFilter: ['data-lang'] });
    return () => observer.disconnect();
  }, []);

  const T = translations[lang] ?? translations.es;
  const tx = (key: string) => T[key] ?? key;

  function handleOpen() {
    setOpen(true);
    setStatus('idle');
    setEmail('');
  }

  function handleClose() {
    if (status === 'loading') return;
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-16 animate-fade-up opacity-0 delay-3">
        {/* Disabled Discord button + hover notify button */}
        <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <button
            disabled
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-surface border border-border text-muted/50 font-semibold font-body rounded-lg cursor-not-allowed select-none"
          >
            <DiscordIcon width="18" height="18" />
            <span>{tx('hero.cta.add')}</span>
          </button>

          <div className={`absolute top-full left-0 w-full pt-2 flex justify-center transition-all duration-300 ease-out ${hovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
            <button
              onClick={handleOpen}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-brand/40 hover:border-brand bg-brand/10 hover:bg-brand text-brand hover:text-[#fdf7f3] font-semibold font-body text-sm rounded-lg transition-all duration-200"
            >
              <IconBellFilled size={14} />
              <span>{tx('hero.cta.notify')}</span>
            </button>
          </div>
        </div>

        <a
          href="#features"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border hover:border-brand/50 text-muted hover:text-text font-medium font-body rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <span>{tx('hero.cta.features')}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-x">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Card */}
          <div className="relative w-full max-w-md bg-surface border border-border rounded-2xl p-8 shadow-2xl shadow-black/50 animate-fade-up">
            {status !== 'loading' && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 text-muted hover:text-text transition-colors rounded-md"
              >
                <IconX size={18} />
              </button>
            )}

            {status === 'success' ? (
              <div className="text-center py-3">
                <div className="w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-5">
                  <IconCheck size={26} className="text-brand" />
                </div>
                <h3 className="font-display font-700 text-xl text-text mb-2">
                  {tx('hero.notify.success.title')}
                </h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {tx('hero.notify.success.desc')}
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center shrink-0">
                    <IconBell size={20} className="text-brand" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-lg text-text leading-tight">
                      {tx('hero.notify.title')}
                    </h3>
                    <p className="text-muted font-body text-xs mt-0.5 leading-relaxed">
                      {tx('hero.notify.subtitle')}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={tx('hero.notify.placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-brand/60 focus:outline-none text-text font-body text-sm placeholder:text-muted/40 transition-colors"
                  />

                  {status === 'error' && (
                    <p className="text-red-400 font-body text-xs">
                      {tx('hero.notify.error')}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-brand hover:bg-brand-light disabled:opacity-60 disabled:cursor-not-allowed text-bg font-semibold font-body rounded-lg transition-all duration-200"
                  >
                    {status === 'loading' ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {tx('hero.notify.loading')}
                      </span>
                    ) : (
                      <span>{tx('hero.notify.submit')}</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
