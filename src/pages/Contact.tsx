function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mb-6">
            Estamos aqui para ajudar você a transformar suas ideias em realidade. Entre em contato conosco para discutir
            seu projeto ou tirar dúvidas. Nossa equipe está pronta para atender você!
          </p>
          <p className="text-lg text-gray-600">
            Você também pode nos visitar em nosso escritório ou entrar em contato por telefone. Estamos ansiosos para
            ouvir você!
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Seu E-mail"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-neutral-900 text-white font-semibold rounded-lg transition duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;