import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Términos de uso' };

const lastUpdated = '29 de abril de 2025';

export default function TermsPage() {
  return (
    <main>
      <section className="pt-40 pb-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 pb-8 border-b border-border">
              <span className="text-xs font-bold font-body text-brand tracking-widest uppercase">Legal</span>
              <h1 className="font-display font-800 text-4xl text-text mt-3 mb-2">Términos de uso</h1>
              <p className="text-muted text-sm font-body">Última actualización: {lastUpdated}</p>
            </div>

            <div className="prose-caramel">
              <h2>1. Aceptación de los términos</h2>
              <p>Al añadir Caramel a tu servidor de Discord o al usar cualquiera de sus funciones, aceptas quedar vinculado por estos Términos de uso. Si no estás de acuerdo con alguna parte de estos términos, no debes usar el servicio.</p>

              <h2>2. Descripción del servicio</h2>
              <p>Caramel es un bot de Discord que ofrece funciones de moderación, música, economía, niveles y utilidades. El servicio se proporciona &quot;tal como está&quot; y puede ser modificado, interrumpido o descontinuado en cualquier momento sin previo aviso.</p>

              <h2>3. Uso aceptable</h2>
              <p>Al usar Caramel, te comprometes a:</p>
              <ul>
                <li>No utilizar el bot para actividades ilegales, fraudulentas o dañinas.</li>
                <li>No intentar comprometer la seguridad, integridad o disponibilidad del servicio.</li>
                <li>No abusar de las funciones del bot para hostigar, intimidar o perjudicar a otros usuarios.</li>
                <li>Cumplir con los <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer">Términos de Servicio de Discord</a>.</li>
              </ul>

              <h2>4. Cuentas y responsabilidad</h2>
              <p>Eres responsable de todas las acciones realizadas en tu servidor a través de Caramel. El administrador del servidor que añade el bot es el responsable de su uso correcto dentro de esa comunidad.</p>

              <h2>5. Contenido del usuario</h2>
              <p>No almacenamos el contenido de los mensajes de tu servidor más allá de lo estrictamente necesario para el funcionamiento de las funciones activas (como logs de moderación). Puedes solicitar la eliminación de tus datos en cualquier momento.</p>

              <h2>6. Servicio Premium</h2>
              <p>El acceso a funciones Premium requiere el pago de una suscripción. Los pagos son gestionados a través de terceros (Stripe). Las suscripciones se renuevan automáticamente y pueden cancelarse en cualquier momento. No se realizan reembolsos por períodos parciales salvo que la ley aplicable lo exija.</p>

              <h2>7. Limitación de responsabilidad</h2>
              <p>Caramel y sus desarrolladores no serán responsables por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio, incluyendo la pérdida de datos o interrupciones del servicio.</p>

              <h2>8. Modificaciones</h2>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al publicarse en este sitio. El uso continuado del servicio tras los cambios implica la aceptación de los nuevos términos.</p>

              <h2>9. Contacto</h2>
              <p>Para cualquier consulta sobre estos términos, contacta con el equipo a través del servidor de soporte de Discord.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
