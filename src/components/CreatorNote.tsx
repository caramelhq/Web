import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import joshiny from '../assets/joshiny.svg';

export default function CreatorNote() {
  return (
    <section className="pb-24">
      <Container>
        <div className="h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent mb-20" />

        <div className="max-w-2xl mx-auto">

          {/* Tag */}
          <div className="flex justify-center mb-10">
            <span
              data-i18n="creator.tag"
              className="text-xs font-semibold font-body tracking-widest uppercase text-muted"
            >
              Del creador
            </span>
          </div>

          <div className="flex items-start gap-6">

            {/* Avatar */}
            <Link href="/suggest" className="shrink-0 flex flex-col items-center gap-2 group">
              <Image
                src={joshiny}
                alt="joshiny"
                width={96}
                height={96}
                unoptimized
                className="rounded-full w-24 h-24 shadow-[0_0_8px_4px_rgba(255,255,255,0.45)] transition-all duration-300 group-hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.75)] group-hover:scale-105"
              />
              <div className="text-center">
                <p className="text-text font-semibold font-body leading-tight">joshiny</p>
                <p data-i18n="creator.role" className="text-muted text-sm font-body">Creador</p>
              </div>
            </Link>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <p data-i18n="creator.quote.1" className="text-text text-base leading-relaxed font-body">
                Hice Caramel porque siempre terminaba encontrándome con algo que no funcionaba como debería. Y cuando por fin encontraba algo bueno, tarde o temprano llegaba ese momento donde quería más control.. y simplemente no podía tenerlo.
              </p>
              <p data-i18n="creator.quote.2" className="text-text text-base leading-relaxed font-body">
                Así nació la idea: crear el bot que haga cada cosa exactamente como debería sentirse. Sin barreras, sin límites raros, sin tener que conformarse con menos.
              </p>
              <span data-i18n="creator.contact" className="text-muted text-sm font-body italic">
                Si tienes alguna idea, no dudes en contactarme
              </span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
