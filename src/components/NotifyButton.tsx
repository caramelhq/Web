'use client';

import { useState } from 'react';
import DiscordIcon from './icons/DiscordIcon';
import { IconBellFilled, IconX, IconCheck, IconBell } from '@tabler/icons-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NotifyButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

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
        {/* Disabled — bot not live yet */}
        <button
          disabled
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-surface border border-border text-muted/50 font-semibold font-body rounded-lg cursor-not-allowed select-none"
        >
          <DiscordIcon width="18" height="18" />
          <span data-i18n="hero.cta.add">Añadir a Discord</span>
        </button>

        {/* Notify bell */}
        <button
          onClick={handleOpen}
          data-i18n-title="hero.cta.notify.title"
          className="inline-flex items-center justify-center px-4 py-3.5 border border-brand/40 hover:border-brand bg-brand/10 hover:bg-brand text-brand hover:text-[#fdf7f3] rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <IconBellFilled size={18} />
        </button>

        <a
          href="#features"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border hover:border-brand/50 text-muted hover:text-text font-medium font-body rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <span data-i18n="hero.cta.features">Ver funciones</span>
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
                <h3 data-i18n="hero.notify.success.title" className="font-display font-700 text-xl text-text mb-2">
                  ¡Todo listo!
                </h3>
                <p data-i18n="hero.notify.success.desc" className="text-muted font-body text-sm leading-relaxed">
                  Te avisaremos en cuanto Caramel esté disponible.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center shrink-0">
                    <IconBell size={20} className="text-brand" stroke={1.5} />
                  </div>
                  <div>
                    <h3 data-i18n="hero.notify.title" className="font-display font-700 text-lg text-text leading-tight">
                      Sé el primero en saberlo
                    </h3>
                    <p data-i18n="hero.notify.subtitle" className="text-muted font-body text-xs mt-0.5 leading-relaxed">
                      Caramel está en desarrollo — te avisamos cuando esté listo
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-brand/60 focus:outline-none text-text font-body text-sm placeholder:text-muted/40 transition-colors"
                  />

                  {status === 'error' && (
                    <p data-i18n="hero.notify.error" className="text-red-400 font-body text-xs">
                      Algo salió mal. Inténtalo de nuevo.
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
                        Enviando...
                      </span>
                    ) : (
                      <span data-i18n="hero.notify.submit">Notificarme</span>
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
