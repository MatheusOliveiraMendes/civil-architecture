import { useState, useEffect, useRef } from "react";

function About() {
  const [years, setYears] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Executa quando 50% do elemento está visível
    );

    const currentRef = numberRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentYear = 0;
      const interval = setInterval(() => {
        if (currentYear < 15) {
          currentYear += 1;
          setYears(currentYear);
        } else {
          clearInterval(interval);
        }
      }, 100); 

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="relative overflow-hidden bg-neutral-100 py-20 text-neutral-900 sm:py-24">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[60vw] -translate-x-1/2 bg-orange-200/20 blur-3xl md:block" />

      <div className="mx-auto grid w-full max-w-screen-xl gap-16 px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
            <span className="h-px w-10 bg-orange-400" />
            Sobre nós
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Nós transformamos ideias em experiências arquitetônicas memoráveis.
          </h3>
          <p className="text-lg leading-relaxed text-neutral-700">
            Aplicamos soluções de design inovadoras para elevar o bem-estar residencial e criar ambientes de trabalho
            que expandem o potencial das pessoas. Cada projeto nasce da união entre tecnologia, sensibilidade e visão
            estratégica.
          </p>
          <p className="text-lg leading-relaxed text-neutral-500">
            Com uma equipe multidisciplinar distribuída por três escritórios no Brasil, colaboramos de forma integrada
            com nossos clientes. Aliamos diretrizes, possibilidades técnicas e responsabilidade ambiental para entregar
            projetos completos, do conceito à execução.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-neutral-200 bg-white/60 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">Abordagem</p>
              <p className="mt-3 text-base text-neutral-600">
                Co-criamos soluções junto aos clientes, garantindo decisões conscientes em cada etapa.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white/60 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">Especialidade</p>
              <p className="mt-3 text-base text-neutral-600">
                Projetos residenciais e corporativos com integração entre arquitetura, interiores e tecnologia.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-lg">
          <div className="absolute -top-10 -right-10 hidden h-32 w-32 border border-orange-300/50 lg:block" />
          <div className="relative overflow-hidden border border-orange-200/40 bg-white p-10 shadow-lg">
            <div
              ref={numberRef}
              className="flex items-center justify-center bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100 bg-clip-text text-9xl font-semibold text-transparent lg:text-[10rem]"
            >
              {years}
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                Anos de mercado
              </h4>
              <p className="mt-4 text-lg font-semibold text-neutral-700">
                Trajetória comprovada em projetos premiados e relações duradouras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
