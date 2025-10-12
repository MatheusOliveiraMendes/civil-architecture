function Contact() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-neutral-900 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-neutral-900/5 via-transparent to-transparent" />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
            <span className="h-px w-10 bg-orange-400" />
            Contato
          </span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Conecte-se com nossa equipe e transforme seu próximo projeto em realidade.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Preencha o formulário ou fale diretamente com nossos especialistas. Respondemos em até 24 horas úteis com o
            diagnóstico inicial e próximos passos.
          </p>
        </div>

        <div className="grid gap-12 border border-neutral-200 bg-white/70 p-10 shadow-xl shadow-neutral-200/60 backdrop-blur lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <div className="border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
                Escritórios
              </p>
              <div className="mt-6 space-y-4 text-neutral-600">
                <p>
                  <span className="font-semibold text-neutral-900">São Paulo</span> — Av. Paulista, 1000, cj. 1203
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Rio de Janeiro</span> — Rua Visconde, 450, sala 604
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Porto Alegre</span> — Rua Padre Chagas, 200
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
                Contatos diretos
              </p>
              <div className="mt-6 space-y-3 text-neutral-600">
                <p>
                  <span className="font-semibold text-neutral-900">Telefone:</span> (11) 98765-4321
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">E-mail:</span> contato@civilarchitecture.com
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">Horário:</span> Seg a Sex, 9h às 18h
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            {[
              { id: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
              { id: "email", label: "E-mail", type: "email", placeholder: "nome@empresa.com" },
              { id: "phone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
            ].map((field) => (
              <div key={field.id} className="space-y-3">
                <label
                  htmlFor={field.id}
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm text-neutral-700 transition placeholder:text-neutral-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200/60"
                />
              </div>
            ))}
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                placeholder="Conte-nos sobre seu projeto, prazos e expectativas."
                rows={5}
                className="w-full border border-neutral-200 bg-neutral-50 px-6 py-4 text-sm text-neutral-700 transition placeholder:text-neutral-400 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200/60"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-neutral-900 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-orange-300 hover:text-neutral-900"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="relative overflow-hidden bg-neutral-900 px-10 py-14 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.35),transparent_60%)] opacity-70" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-200">
                Pronto para começar?
              </p>
              <h3 className="text-3xl font-semibold leading-tight">
                Construção de qualquer complexidade com foco em performance e impacto.
              </h3>
              <p className="text-lg text-gray-300">
                Apresente seu desafio e criaremos um roadmap exclusivo com etapas, estimativas e cronograma inicial.
              </p>
            </div>
            <button className="border border-white/30 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition hover:border-orange-200 hover:bg-orange-200 hover:text-neutral-900">
              Fale com a equipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
