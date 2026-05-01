import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: { default: 'Caramel', template: '%s — Caramel' },
  description: 'Caramel es un bot de Discord todo en uno con moderación, música, economía, niveles y mucho más.',
  icons: { icon: '/images/CaramelIcon.svg' },
  openGraph: {
    title: 'Caramel',
    description: 'Caramel es un bot de Discord todo en uno con moderación, música, economía, niveles y mucho más.',
    url: 'https://caramel.gg',
    siteName: 'Caramel',
    images: [{ url: 'https://caramel.gg/images/og.png', width: 1986, height: 792 }],
  },
};

const ANTI_FLASH = `(function(){var t=localStorage.getItem('caramel-theme')||'dark';var l=localStorage.getItem('caramel-lang')||'es';document.documentElement.dataset.theme=t;document.documentElement.dataset.lang=l;if(sessionStorage.getItem('ns:'+location.pathname)==='1')document.documentElement.dataset.navScrolled='1';window.addEventListener('pageshow',function(e){if(e.persisted)window.location.reload();});})();`;

const I18N_THEME_SCRIPT = `
window.__T = {
  es: {
    'nav.commands': 'Comandos',
    'nav.modules': 'Módulos',
    'nav.support': 'Soporte',
    'nav.premium': 'Premium',
    'nav.login': 'Ingresar',
    'hero.badge': 'Discord Bot · Disponible ahora',
    'hero.line1': 'Make it simple.',
    'hero.line2': 'Make it perfect.',
    'hero.desc': 'El bot de Discord que se adapta a tu servidor, no al revés.',
    'hero.cta.add': 'Añadir a Discord',
    'hero.cta.features': 'Ver funciones',
    'stats.servers': 'Servidores',
    'stats.users': 'Usuarios',
    'stats.commands': 'Comandos',
    'features.tag': 'Módulos',
    'features.title1': 'Todo lo que',
    'features.title2': 'necesitas.',
    'features.desc': 'Cada módulo de Caramel está diseñado para integrarse perfectamente. Activa solo lo que uses, sin ruido innecesario.',
    'features.more': 'Ver más',
    'footer.tagline': 'El bot de Discord que tu servidor merece. Potente, fiable y sin complicaciones.',
    'footer.discord': 'Servidor de soporte',
    'footer.col.bot': 'Bot',
    'footer.add': 'Añadir a Discord',
    'footer.commands': 'Comandos',
    'footer.modules': 'Módulos',
    'footer.changelog': 'Novedades',
    'footer.col.resources': 'Recursos',
    'footer.docs': 'Documentación',
    'footer.dashboard': 'Panel de control',
    'footer.status': 'Estado del bot',
    'footer.col.community': 'Comunidad',
    'footer.server': 'Servidor de Discord',
    'footer.report': 'Reportar un bug',
    'footer.suggest': 'Sugerencias',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos de uso',
    'footer.rights': 'Todos los derechos reservados.',
    'page.premium':   'Premium',
    'page.support':   'Soporte',
    'page.modules':   'Módulos',
    'page.commands':  'Comandos',
    'page.terms':     'Términos',
    'page.policy':    'Privacidad',
    'page.dashboard': 'Dashboard',
    'page.invite':    'Invitar',
    'page.status':    'Estado',
    'page.news':      'Novedades',
    'page.docs':      'Docs',
    'page.suggest':   'Sugerencias',
    'page.report':    'Reportar',
    'more.label':     'y muchos más...',
    'creator.tag':    'Del creador',
    'creator.quote':  'Caramel nació de mi obsesión con la simplicidad y el rendimiento. Mi objetivo es crear el bot de Discord más robusto y modular del ecosistema, permitiendo que cualquier comunidad crezca con herramientas de nivel profesional sin la complejidad técnica habitual.',
    'creator.role':   'Creador',
  },
  en: {
    'nav.commands': 'Commands',
    'nav.modules': 'Modules',
    'nav.support': 'Support',
    'nav.premium': 'Premium',
    'nav.login': 'Login',
    'hero.badge': 'Discord Bot · Available now',
    'hero.line1': 'Make it simple.',
    'hero.line2': 'Make it perfect.',
    'hero.desc': 'The Discord bot that adapts to your server, not the other way around.',
    'hero.cta.add': 'Add to Discord',
    'hero.cta.features': 'Preview features',
    'stats.servers': 'Servers',
    'stats.users': 'Users',
    'stats.commands': 'Commands',
    'features.tag': 'Modules',
    'features.title1': 'Everything you',
    'features.title2': 'need.',
    'features.desc': 'Every Caramel module is designed to integrate seamlessly. Enable only what you use, without unnecessary noise.',
    'features.more': 'Learn more',
    'footer.tagline': 'The Discord bot your server deserves. Powerful, reliable and hassle-free.',
    'footer.discord': 'Support server',
    'footer.col.bot': 'Bot',
    'footer.add': 'Add to Discord',
    'footer.commands': 'Commands',
    'footer.modules': 'Modules',
    'footer.changelog': 'Changelog',
    'footer.col.resources': 'Resources',
    'footer.docs': 'Documentation',
    'footer.dashboard': 'Dashboard',
    'footer.status': 'Bot status',
    'footer.col.community': 'Community',
    'footer.server': 'Discord Server',
    'footer.report': 'Report a bug',
    'footer.suggest': 'Suggestions',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of use',
    'footer.rights': 'All rights reserved.',
    'page.premium':   'Premium',
    'page.support':   'Support',
    'page.modules':   'Modules',
    'page.commands':  'Commands',
    'page.terms':     'Terms',
    'page.policy':    'Privacy',
    'page.dashboard': 'Dashboard',
    'page.invite':    'Invite',
    'page.status':    'Status',
    'page.news':      'News',
    'page.docs':      'Docs',
    'page.suggest':   'Suggestions',
    'page.report':    'Report',
    'more.label':     'and many more...',
    'creator.tag':    'From the creator',
    'creator.quote':  'Caramel was born from my obsession with simplicity and performance. My goal is to create the most robust and modular Discord bot in the ecosystem, allowing any community to grow with professional-grade tools without the usual technical complexity.',
    'creator.role':   'Creator',
  },
};

function applyTranslations(lang) {
  var t = window.__T[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

window.caramelSetTheme = function(theme) {
  document.body.classList.add('theme-transitioning');
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('caramel-theme', theme);
  setTimeout(function() { document.body.classList.remove('theme-transitioning'); }, 250);
};

window.caramelSetLang = function(lang) {
  document.documentElement.dataset.lang = lang;
  localStorage.setItem('caramel-lang', lang);
  applyTranslations(lang);
};

// afterInteractive runs after DOMContentLoaded, so call directly
applyTranslations(localStorage.getItem('caramel-lang') || 'es');
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark" data-lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script id="anti-flash" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: ANTI_FLASH }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&family=Lexend+Deca:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Script id="i18n-theme" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: I18N_THEME_SCRIPT }} />
      </body>
    </html>
  );
}
