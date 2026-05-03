import Image from 'next/image';
import DiscordIcon from './icons/DiscordIcon';
import Container from './Container';
import caramelIcon from '../assets/Caramel-Icon.png';
import caramelFooter from '../assets/CaramelFooter.png';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-5">
              <Image src={caramelIcon} alt="Caramel" width={40} height={40} className="w-10 h-10 rounded-full" />
              <span className="font-display font-700 text-lg text-text">Caramel</span>
            </a>
            <p data-i18n="footer.tagline" className="text-muted text-sm font-body leading-relaxed mb-6">
              El bot de Discord que tu servidor merece. Potente, fiable y sin complicaciones.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-muted hover:text-brand text-sm font-body transition-colors duration-200">
              <DiscordIcon width="16" height="16" />
              <span data-i18n="footer.discord">Servidor de soporte</span>
            </a>
          </div>

          {/* Bot links */}
          <div>
            <h4 data-i18n="footer.col.bot" className="font-display font-600 text-sm text-text/60 uppercase tracking-widest mb-5">Bot</h4>
            <ul className="space-y-3">
              <li><span data-i18n="footer.add" className="text-muted/40 text-sm font-body cursor-not-allowed select-none">Añadir a Discord</span></li>
              <li><a href="/commands" data-i18n="footer.commands" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Comandos</a></li>
              <li><a href="/modules" data-i18n="footer.modules" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Módulos</a></li>
              <li><a href="/news" data-i18n="footer.changelog" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Novedades</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 data-i18n="footer.col.resources" className="font-display font-600 text-sm text-text/60 uppercase tracking-widest mb-5">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="/docs" data-i18n="footer.docs" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Documentación</a></li>
              <li><a href="/dashboard" data-i18n="footer.dashboard" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Panel de control</a></li>
              <li><a href="/status" data-i18n="footer.status" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Estado del bot</a></li>
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h4 data-i18n="footer.col.community" className="font-display font-600 text-sm text-text/60 uppercase tracking-widest mb-5">Comunidad</h4>
            <ul className="space-y-3">
              <li><a href="/support" data-i18n="footer.server" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Servidor de Discord</a></li>
              <li><a href="/report" data-i18n="footer.report" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Reportar un bug</a></li>
              <li><a href="/suggest" data-i18n="footer.suggest" className="text-muted hover:text-text text-sm font-body transition-colors duration-200">Sugerencias</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col items-center gap-4">
          <Image
            src={caramelFooter}
            alt="Caramel"
            width={85}
            className="opacity-50 hover:opacity-75 transition-opacity duration-300"
          />
          <p className="text-muted/60 text-xs font-body text-center">
            © {new Date().getFullYear()} Caramel Bot. <span data-i18n="footer.rights">Todos los derechos reservados.</span>
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" data-i18n="footer.privacy" className="text-muted/60 hover:text-muted text-xs font-body transition-colors duration-200">Privacidad</a>
            <a href="/terms" data-i18n="footer.terms" className="text-muted/60 hover:text-muted text-xs font-body transition-colors duration-200">Términos de uso</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
