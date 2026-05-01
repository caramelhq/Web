import type { Metadata } from 'next';
import Container from '../../components/Container';

export const metadata: Metadata = { title: 'Sugerencias' };

export default function SuggestPage() {
  return (
    <main>
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(215,118,85,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative">
          <div className="max-w-xl mx-auto">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand text-xs font-bold font-body tracking-widest uppercase">
                Sugerencias
              </div>
              <h1 className="font-display font-800 text-4xl md:text-5xl text-text leading-tight tracking-tight mb-4">
                ¿Tienes una idea?
              </h1>
              <p className="text-muted font-body text-lg leading-relaxed">
                Ayúdanos a mejorar Caramel. Todas las sugerencias son revisadas por el equipo.
              </p>
            </div>

            <form className="bg-surface border border-border rounded-2xl p-8 flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">Categoría</label>
                <select className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text focus:outline-none focus:border-brand/50 transition-colors duration-200">
                  <option value="">Selecciona una categoría</option>
                  <option>Nuevo comando</option>
                  <option>Mejora de módulo existente</option>
                  <option>Integración con otro servicio</option>
                  <option>Mejora del Dashboard</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">Título</label>
                <input
                  type="text"
                  placeholder="Resumen breve de tu idea"
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">Descripción</label>
                <textarea
                  rows={5}
                  placeholder="Describe tu sugerencia con el mayor detalle posible. ¿Qué problema resuelve? ¿Cómo funcionaría?"
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-body text-muted tracking-wide uppercase">
                  Tu usuario de Discord <span className="text-subtle normal-case">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="usuario#0000 o @usuario"
                  className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-sm font-body text-text placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-brand hover:bg-brand-light text-bg text-sm font-bold font-body rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand/25 mt-1"
              >
                Enviar sugerencia
              </button>

            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
