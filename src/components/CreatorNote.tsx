import Image from 'next/image';
import Container from './Container';
import joshiny from '../assets/joshiny.png';

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
              From the creator
            </span>
          </div>

          <div className="flex items-start gap-6">

            {/* Avatar + identity */}
            <div className="shrink-0 flex flex-col items-center gap-2 mt-1">
              <Image
                src={joshiny}
                alt="joshiny"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 shadow-[0_0_8px_4px_rgba(255,255,255,0.45)]"
              />
              <div className="text-center">
                <p className="text-text text-sm font-semibold font-body leading-tight">joshiny</p>
                <p data-i18n="creator.role" className="text-muted text-xs font-body">Creator</p>
              </div>
            </div>

            {/* Quote */}
            <p
              data-i18n="creator.quote"
              className="text-text text-base leading-relaxed font-body mt-1"
            >
              Caramel was born from my obsession with simplicity and performance. My goal is to create the most robust and modular Discord bot in the ecosystem, allowing any community to grow with professional-grade tools without the usual technical complexity.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}
