function Contact() {
    return (
      <div>
             <section id="contact" className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">Fale Conosco</h2>
        <p className="mt-4 text-lg">Entre em contato para saber como podemos ajudar seu negócio.</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Seu Nome" className="w-full p-3 border rounded mb-4" />
          <input type="email" placeholder="Seu E-mail" className="w-full p-3 border rounded mb-4" />
          <textarea placeholder="Sua Mensagem" className="w-full p-3 border rounded mb-4"></textarea>
        </form>
      </section>
      </div>
    )
  }
  
  export default Contact;