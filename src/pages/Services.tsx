function Services() {  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-orange-300">NOSSOS SERVIÇOS</h2>
        <p className=" mt-2 max-w-lg text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Soluções de Construção        
          </p>
        <div className="mt-10 grid sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px  bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <img
                    className="size-full object-cover object-top"
                    src="images/services.jpg"
                    alt=""
                  />
              </div>
            </div>
            <div className="pointer-events-none absolute "></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px  bg-white "></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="sm:px-10 sm:pt-10">
                <p className="p-8 max-w-lg text-2xl text-gray-600 max-lg:text-center">
                A primeira coisa que fazemos é nos reunir com nossos clientes e conversar sobre seus objetivos em um projeto futuro. Durante esta reunião,
                 sinta-se à vontade para comunicar suas ideias e fazer muitas perguntas. Este estágio é altamente decisivo,
                  pois você pode avaliar o trabalho do seu arquiteto em potencial navegando em seu portfólio               
               </p>
              </div>
            </div>
            <div className="pointer-events-none absolute "></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px  bg-orange-300"></div>
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="sm:px-10 sm:pt-10">
                <p className="p-8 m-8 max-w-lg text-4xl font-semibold text-gray-950 max-lg:text-center">
                Nós nos concentramos no problema, na pergunta e na solução. E nós sempre pensamos no futuro.              
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;