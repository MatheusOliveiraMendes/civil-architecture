function Services() {
    return (
      <div>
          <section id="services" className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold">Nossos Serviços</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold">Desenvolvimento Web</h3>
            <p className="mt-2 text-gray-600">Criamos sites responsivos e otimizados para conversão.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold">Marketing Digital</h3>
            <p className="mt-2 text-gray-600">Estratégias para impulsionar sua presença online.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold">Branding</h3>
            <p className="mt-2 text-gray-600">Criamos identidade visual marcante para sua marca.</p>
          </div>
        </div>
      </section>
      </div>
    )
  }
  
  export default Services;