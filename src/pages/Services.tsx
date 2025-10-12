import { FaBuilding, FaDraftingCompass, FaHammer, FaHardHat } from "react-icons/fa";

function Services() {
  const highlights = [
    {
      title: "Co-criação estratégica",
      description:
        "Workshops de imersão para alinhar expectativas, mapear necessidades e ativar soluções personalizadas.",
    },
    {
      title: "Tecnologia e precisão",
      description:
        "Modelagem BIM, maquetes digitais e monitoramento inteligente asseguram entregas com alto padrão.",
    },
  ];

  const services = [
    {
      icon: <FaHammer size={36} />,
      title: "Serviços de Construção",
      text: "Gestão completa de obra com acompanhamento diário, relatórios e controle de qualidade rigoroso.",
    },
    {
      icon: <FaBuilding size={36} />,
      title: "Gestão de Construção",
      text: "Planejamento integrado de cronograma, fornecedores e budget para garantir eficiência em cada etapa.",
    },
    {
      icon: <FaDraftingCompass size={36} />,
      title: "Projeto-Construção",
      text: "Equipe multidisciplinar atuando de ponta a ponta, da concepção aos detalhes executivos.",
    },
    {
      icon: <FaHardHat size={36} />,
      title: "Contratação Geral",
      text: "Rede de parceiros homologados e especialistas para soluções sob medida em projetos de qualquer escala.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 text-gray-100 sm:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[45vw] bg-gradient-to-l from-orange-300/20 via-orange-200/10 to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-20 px-6">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-orange-200">
              <span className="h-px w-10 bg-orange-300" />
              Nossos serviços
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-orange-100 sm:text-4xl lg:text-5xl">
              Soluções completas para construir o futuro dos seus espaços.
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Atuamos da estratégia à execução com processos integrados, transparência e tecnologia. Cada fase do projeto
              é acompanhada por especialistas dedicados em arquitetura, interiores, engenharia e gestão.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-orange-200/40 hover:bg-orange-200/10"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 hidden h-28 w-28 border border-orange-200/50 lg:block" />
            <div className="absolute -bottom-16 -right-12 hidden h-48 w-48 bg-orange-200/20 blur-2xl lg:block" />
            <div className="relative overflow-hidden border border-white/10 bg-white/10 shadow-2xl shadow-black/40">
              <img
                className="h-full w-full object-cover object-center"
                src="/images/services.jpg"
                alt="Equipe de arquitetura trabalhando em projeto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-8">
                <div className="border border-white/10 bg-neutral-950/70 p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-orange-200">
                    Do conceito à entrega
                  </p>
                  <p className="mt-4 text-base text-gray-200">
                    Cronogramas integrados, orçamentos transparentes e acompanhamento em tempo real para decisões mais
                    seguras e ágeis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden border border-white/10 bg-neutral-900/60 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-orange-200/40 hover:bg-neutral-900/80"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-orange-200/40 bg-orange-200/10 text-orange-200 transition group-hover:border-orange-200 group-hover:bg-orange-200/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-100">{service.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-300">{service.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 transition group-hover:text-orange-100">
                Saiba mais
                <span className="h-px w-10 bg-orange-300" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
