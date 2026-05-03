import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = { title: 'Privacidad' };

const lastUpdated = '29 de abril de 2025';

export default function PrivacyPage() {
  return (
    <main>
      <section className="pt-40 pb-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 pb-8 border-b border-border">
              <span className="text-xs font-bold font-body text-brand tracking-widest uppercase">Legal</span>
              <h1 className="font-display font-800 text-4xl text-text mt-3 mb-2">Política de privacidad</h1>
              <p className="text-muted text-sm font-body">Última actualización: {lastUpdated}</p>
            </div>

            <div className="prose-caramel">
              <h2>1. Información que recopilamos</h2>
              <p>Caramel recopila únicamente los datos necesarios para su funcionamiento. Esto incluye:</p>
              <ul>
                <li>IDs de servidores, canales y usuarios de Discord (identificadores públicos).</li>
                <li>Configuración de módulos por servidor (canales, roles, preferencias).</li>
                <li>Datos de economía y niveles generados por la actividad del usuario en el servidor.</li>
                <li>Logs de moderación cuando el módulo está activo.</li>
              </ul>

              <h2>2. Información que NO recopilamos</h2>
              <p>Caramel no accede ni almacena:</p>
              <ul>
                <li>El contenido de los mensajes de usuarios (salvo comandos directos al bot).</li>
                <li>Contraseñas, tokens de acceso o información de autenticación de Discord.</li>
                <li>Información personal identificable como correos, números de teléfono o direcciones.</li>
              </ul>

              <h2>3. Cómo usamos los datos</h2>
              <p>Los datos recopilados se usan exclusivamente para:</p>
              <ul>
                <li>Proveer las funciones configuradas en tu servidor.</li>
                <li>Mejorar la estabilidad y el rendimiento del servicio.</li>
                <li>Detectar y prevenir abusos del sistema.</li>
              </ul>
              <p>Nunca vendemos, cedemos ni compartimos datos con terceros con fines comerciales.</p>

              <h2>4. Almacenamiento y seguridad</h2>
              <p>Los datos se almacenan en servidores seguros con acceso restringido. Implementamos medidas técnicas estándar de la industria para proteger la información. Sin embargo, ningún sistema es 100% seguro, por lo que no podemos garantizar la seguridad absoluta de los datos.</p>

              <h2>5. Retención de datos</h2>
              <p>Los datos del servidor se conservan mientras Caramel esté añadido. Al expulsar al bot, los datos asociados a ese servidor son eliminados automáticamente en un plazo de 30 días. Los datos individuales de usuario pueden solicitarse para eliminación en cualquier momento.</p>

              <h2>6. Tus derechos</h2>
              <p>Tienes derecho a:</p>
              <ul>
                <li>Solicitar acceso a los datos que almacenamos sobre ti o tu servidor.</li>
                <li>Solicitar la corrección o eliminación de dichos datos.</li>
                <li>Retirar el consentimiento eliminando el bot de tu servidor.</li>
              </ul>

              <h2>7. Servicios de terceros</h2>
              <p>Caramel utiliza servicios de terceros para su operación (como proveedores de infraestructura y pasarelas de pago para Premium). Estos servicios tienen sus propias políticas de privacidad independientes.</p>

              <h2>8. Cambios a esta política</h2>
              <p>Podemos actualizar esta política periódicamente. Los cambios se publicarán en esta página con la fecha de actualización. El uso continuado del servicio implica la aceptación de la política vigente.</p>

              <h2>9. Contacto</h2>
              <p>Para ejercer tus derechos o realizar cualquier consulta sobre privacidad, contáctanos a través del servidor de soporte de Discord.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
