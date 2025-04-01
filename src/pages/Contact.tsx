function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="w-full max-w-4xl flex flex-col items-center gap-8 p-8 text-center mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl p-8 text-orange-300">CONTATO COM NOSSA EQUIPE</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-6">
            Estamos aqui para ajudar você a transformar suas ideias em realidade. Entre em contato conosco para discutir
            seu projeto ou tirar dúvidas. Nossa equipe está pronta para atender você!
          </p>
        </div>
        <div className="w-full">
          <form className="space-y-6">
            <div className="text-left">
              <label htmlFor="name" className="block font-bold text-gray-800 mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu Nome"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-orange-300"
              />
            </div>
            <div className="text-left">
              <label htmlFor="email" className="block font-bold text-gray-800 mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Seu E-mail"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-orange-300"
              />
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block font-bold text-gray-800 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                placeholder="Sua Mensagem"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-orange-300"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-300 text-white font-semibold rounded-full transition duration-300 hover:bg-orange-400"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      <div className="w-full h-[250px] bg-orange-300 flex items-center justify-between px-32">
        <div>
          <h2 className="text-3xl font-bold text-black">Construção de Qualquer Complexidade</h2>
          <p className="text-lg text-black">CONFIE EM NOSSA EQUIPE COM SEU PRÓXIMO PROJETO</p>
        </div>
        <button
          className="px-6 py-3 bg-black text-white font-semibold rounded-full transition duration-300 hover:bg-gray-100"
        >
          Fale Conosco
        </button>
      </div>  
    </div>
  );
}

export default Contact;