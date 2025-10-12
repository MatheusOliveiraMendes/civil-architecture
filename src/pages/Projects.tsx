function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hangzhou, China",
      description: "Gerenciamento de Projetos.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Los Angeles, United States",
      description: "Serviços de arquitetura.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Montreal, Canada",
      description: "Pré-construção.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-100 py-24 text-neutral-900 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-orange-200/30 via-transparent to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
              <span className="h-px w-10 bg-orange-400" />
              Portfólio
            </span>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Projetos que traduzem identidade, tecnologia e propósito.
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              Cada entrega é construída com curadoria de materiais, iluminação inteligente e integração com o entorno,
              garantindo experiências completas e memoráveis.
            </p>
          </div>
          <button className="border border-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:bg-neutral-900 hover:text-white">
            Veja todos
          </button>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
              </div>
              <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/60 bg-white/40 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-0 w-full p-8">
                <div className="border border-white/60 bg-white/80 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
                    {project.description}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-neutral-900">{project.title}</h3>
                  <button className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 transition hover:text-orange-400">
                    Ver projeto
                    <span className="h-px w-10 bg-neutral-700 transition group-hover:bg-orange-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
