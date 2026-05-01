import type { Metadata } from 'next';
import Container from '../../components/Container';
import DiscordIcon from '../../components/icons/DiscordIcon';
import FaqAccordion from '../../components/FaqAccordion';

export const metadata: Metadata = { title: 'Soporte' };

const faqs = [
  {
    q: '¿Cómo añado Caramel a mi servidor?',
    a: 'Haz clic en "Añadir a Discord" en cualquier página del sitio. Selecciona tu servidor, acepta los permisos y Caramel estará listo en segundos.',
  },
  {
    q: '¿Caramel es gratuito?',
    a: 'Sí, Caramel tiene un plan completamente gratuito con acceso a la mayoría de funciones. Existe un plan Premium para desbloquear funciones avanzadas y límites más altos.',
  },
  {
    q: '¿Cómo configuro los módulos?',
    a: 'Usa el comando /config en tu servidor o accede al panel de control en el Dashboard para habilitar, deshabilitar y configurar cada módulo individualmente.',
  },
  {
    q: '¿Qué hago si el bot no responde?',
    a: 'Verifica que Caramel tenga los permisos necesarios en el canal. Si el problema persiste, revisa el estado del bot o abre un ticket en nuestro servidor de soporte.',
  },
  {
    q: '¿Puedo reportar un bug o sugerir una función?',
    a: 'Sí, en nuestro servidor de Discord hay canales dedicados para reportes y sugerencias. También puedes usar los formularios en el menú de navegación.',
  },
  {
    q: '¿Con qué frecuencia se actualiza Caramel?',
    a: 'Publicamos actualizaciones regularmente. Puedes ver el historial en el canal #novedades de nuestro servidor de Discord o en la sección Novedades del sitio.',
  },
];

export default function SupportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
            Soporte
          </div>
          <h1 className="font-display font-800 text-5xl md:text-6xl text-text leading-tight tracking-tight mb-5">
            ¿Cómo podemos<br /><span className="text-gradient">ayudarte?</span>
          </h1>
          <p className="text-muted text-lg font-body max-w-lg mx-auto leading-relaxed">
            Encuentra respuestas rápidas en las preguntas frecuentes o únete a nuestro servidor de Discord para hablar con el equipo.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <Container>
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      {/* Discord CTA */}
      <section className="pb-32">
        <Container>
          <div className="max-w-2xl mx-auto bg-surface-2 border border-border rounded-2xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/10 border border-brand/20 text-brand mb-6">
              <DiscordIcon className="w-7 h-7" />
            </div>
            <h2 className="font-display font-800 text-2xl text-text mb-3">¿No encontraste tu respuesta?</h2>
            <p className="text-muted font-body text-sm leading-relaxed mb-7">
              Únete al servidor de Discord de Caramel. El equipo y la comunidad están listos para ayudarte.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand hover:bg-brand-light text-bg text-sm font-bold font-body rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25">
              <DiscordIcon className="w-4 h-4" />
              Unirse al servidor
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
