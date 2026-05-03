'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { translations, type Lang } from '../lib/translations';
import { DASHBOARD_AUTH_URL } from '../config';
import caramelIcon from '../assets/Caramel-Icon.png';
import caramelPremiumIcon from '../assets/Caramel-Premium.png';
import Container from './Container';
import FlagMX from './icons/FlagMX';
import FlagUS from './icons/FlagUS';

const links: { label: string; href: string; i18n: string; premium?: boolean }[] = [
  { label: 'Comandos', href: '/commands', i18n: 'nav.commands' },
  { label: 'Módulos',  href: '/modules',  i18n: 'nav.modules'  },
  { label: 'Soporte',  href: '/support',  i18n: 'nav.support'  },
  { label: 'Premium',  href: '/premium',  i18n: 'nav.premium', premium: true },
];

const pageKeys: Record<string, string> = {
  '/premium':   'page.premium',
  '/support':   'page.support',
  '/modules':   'page.modules',
  '/commands':  'page.commands',
  '/terms':     'page.terms',
  '/privacy':   'page.policy',
  '/dashboard': 'page.dashboard',
  '/invite':    'page.invite',
  '/status':    'page.status',
  '/news':      'page.news',
  '/docs':      'page.docs',
  '/suggest':   'page.suggest',
  '/report':    'page.report',
};

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const currentKey = pageKeys[normalizedPath] ?? null;

  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<Lang>('es');
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const T = translations[lang] ?? translations.es;
  const tx = (key: string) => T[key] ?? key;

  const currentPage = currentKey ? tx(currentKey) : null;
  const isPremium = normalizedPath === '/premium';

  // Initial mount: sync with localStorage / DOM set by anti-flash script
  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as 'dark' | 'light') || 'dark');
    setLang((document.documentElement.dataset.lang as Lang) || 'es');

    const key = `ns:${window.location.pathname}`;

    const updateScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      if (isScrolled) {
        sessionStorage.setItem(key, '1');
        document.documentElement.dataset.navScrolled = '1';
      } else {
        sessionStorage.removeItem(key);
        delete document.documentElement.dataset.navScrolled;
      }
    };

    // Initialize: use persisted state so back-navigation shows background immediately
    const persisted = sessionStorage.getItem(key) === '1';
    setScrolled(persisted || window.scrollY > 20);

    window.addEventListener('scroll', updateScroll, { passive: true });

    const handleOutsideClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) {
        setMobileLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // On route change: close menus, sync scroll, re-apply translations for data-i18n elements
  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
    setMobileLangOpen(false);
    const persisted = sessionStorage.getItem(`ns:${window.location.pathname}`) === '1';
    setScrolled(persisted || window.scrollY > 20);

    if (typeof window !== 'undefined' && window.__T) {
      const currentLang = document.documentElement.dataset.lang || 'es';
      const Tmap = window.__T[currentLang];
      if (Tmap) {
        document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (key && Tmap[key] !== undefined) el.textContent = Tmap[key];
        });
      }
    }
  }, [pathname]);

  function handleSetTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    window.caramelSetTheme(newTheme);
    setTheme(newTheme);
  }

  function handleSetLang(newLang: string) {
    window.caramelSetLang(newLang);
    setLang(newLang as Lang);
  }

  const SunIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  const MoonIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <header id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Container className="flex items-center justify-between py-6">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={`relative w-9 h-9 rounded-full ring-2 transition-all duration-500 ${
                isPremium
                  ? 'ring-amber-400/60 shadow-[0_0_14px_3px_rgba(251,191,36,0.3)]'
                  : 'ring-transparent group-hover:ring-brand'
              }`}>
                <Image
                  src={caramelIcon}
                  alt="Caramel"
                  width={36}
                  height={36}
                  priority
                  className={`absolute inset-0 w-9 h-9 rounded-full transition-opacity duration-500 ${isPremium ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                  src={caramelPremiumIcon}
                  alt="Caramel Premium"
                  width={36}
                  height={36}
                  priority={isPremium}
                  className={`absolute inset-0 w-9 h-9 rounded-full transition-opacity duration-500 ${isPremium ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <span className="relative inline-block">
                <span className={`font-logo font-700 text-lg tracking-wide text-text group-hover:text-brand transition-opacity duration-500 ${isPremium ? 'opacity-0' : 'opacity-100'}`}>
                  Caramel
                </span>
                <span className={`absolute inset-0 shiny-premium font-logo font-700 text-lg tracking-wide transition-opacity duration-500 ${isPremium ? 'opacity-100' : 'opacity-0'}`}>
                  Caramel
                </span>
              </span>
            </Link>
            {currentPage && (
              <div className="flex items-center gap-2 text-muted">
                <svg className="w-3.5 h-3.5 text-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="text-sm font-semibold font-body">{currentPage}</span>
              </div>
            )}
          </div>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(link => link.premium ? (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-semibold font-body tracking-wide px-3 py-1.5 rounded-lg border border-transparent hover:bg-amber-500/8 hover:border-amber-500/15 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="crown-icon shrink-0">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 19h-14c-.5 0 -.9 -.3 -1 -.8l-2 -10c0 -.4 .1 -.8 .5 -1.1c.4 -.2 .8 -.2 1.1 0l4.1 3.3l3.4 -5.1c.4 -.6 1.3 -.6 1.7 0l3.4 5.1l4.1 -3.3c.3 -.3 .8 -.3 1.1 0c.4 .2 .5 .6 .5 1.1l-2 10c0 .5 -.5 .8 -1 .8z" />
                </svg>
                <span className="relative inline-block">
                  <span className={`shiny-premium transition-opacity duration-500 ${isPremium ? 'opacity-0' : 'opacity-100'}`}>{tx(link.i18n)}</span>
                  <span className={`absolute inset-0 text-amber-400 transition-opacity duration-500 ${isPremium ? 'opacity-100' : 'opacity-0'}`}>{tx(link.i18n)}</span>
                </span>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-text text-sm font-semibold font-body tracking-wide px-3 py-1.5 rounded-lg border border-transparent hover:bg-brand/8 hover:border-brand/15 transition-all duration-200"
              >
                {tx(link.i18n)}
              </Link>
            ))}
          </nav>

          {/* Right controls (desktop) */}
          <div className="hidden md:flex items-center gap-2">

            {/* Lang dropdown */}
            <div ref={langRef} className="relative">
              <button
                aria-label="Select language"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen(o => !o)}
                className="h-9 px-3 flex items-center gap-1.5 rounded-lg border border-border hover:border-brand/40 text-muted hover:text-brand text-xs font-bold font-body tracking-wider transition-all duration-200"
              >
                <FlagMX className="flag-mx w-5 h-auto rounded-[2px]" />
                <FlagUS className="flag-us w-5 h-auto rounded-[2px]" />
                <span>{lang.toUpperCase()}</span>
                <svg className={`w-3 h-3 transition-transform duration-200${langOpen ? ' rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6l6-6" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-32 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50">
                  <button
                    onClick={() => { handleSetLang('es'); setLangOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold font-body text-muted hover:text-brand hover:bg-surface-2 transition-colors duration-150"
                  >
                    <FlagMX className="w-5 h-auto rounded-[2px]" />
                    Español
                  </button>
                  <button
                    onClick={() => { handleSetLang('en'); setLangOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold font-body text-muted hover:text-brand hover:bg-surface-2 transition-colors duration-150"
                  >
                    <FlagUS className="w-5 h-auto rounded-[2px]" />
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={handleSetTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-brand/40 text-muted hover:text-brand transition-all duration-200"
            >
              {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>

            {/* Login */}
            <a
              href={DASHBOARD_AUTH_URL}
              className="inline-flex items-center gap-2 px-5 py-2 bg-brand hover:bg-brand-light text-bg text-sm font-bold font-body rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              {tx('nav.login')}
            </a>
          </div>

          {/* Mobile: right side */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleSetTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted"
            >
              {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setMobileOpen(o => !o)}
              className="text-muted hover:text-text transition-colors p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50">
          <Container className="pb-4">
            <nav className="flex flex-col gap-4 pt-4">
              {links.map(link => (
                <Link key={link.href} href={link.href} className="text-muted hover:text-text text-sm font-medium transition-colors">
                  {tx(link.i18n)}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">

                {/* Lang dropdown (mobile) */}
                <div ref={mobileLangRef} className="relative">
                  <button
                    aria-label="Select language"
                    aria-haspopup="listbox"
                    aria-expanded={mobileLangOpen}
                    onClick={() => setMobileLangOpen(o => !o)}
                    className="h-9 px-3 flex items-center gap-1.5 rounded-lg border border-border text-muted text-xs font-semibold font-body tracking-wider transition-all duration-200"
                  >
                    <FlagMX className="flag-mx w-5 h-auto rounded-[2px]" />
                    <FlagUS className="flag-us w-5 h-auto rounded-[2px]" />
                    <span>{lang.toUpperCase()}</span>
                    <svg className={`w-3 h-3 transition-transform duration-200${mobileLangOpen ? ' rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6l6-6" />
                    </svg>
                  </button>

                  {mobileLangOpen && (
                    <div className="absolute bottom-full left-0 mb-1.5 w-32 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50">
                      <button
                        onClick={() => { handleSetLang('es'); setMobileLangOpen(false); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold font-body text-muted hover:text-brand hover:bg-surface-2 transition-colors duration-150"
                      >
                        <FlagMX className="w-5 h-auto rounded-[2px]" />
                        Español
                      </button>
                      <button
                        onClick={() => { handleSetLang('en'); setMobileLangOpen(false); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold font-body text-muted hover:text-brand hover:bg-surface-2 transition-colors duration-150"
                      >
                        <FlagUS className="w-5 h-auto rounded-[2px]" />
                        English
                      </button>
                    </div>
                  )}
                </div>

                <a
                  href={DASHBOARD_AUTH_URL}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-bg text-sm font-semibold rounded-lg"
                >
                  {tx('nav.login')}
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
