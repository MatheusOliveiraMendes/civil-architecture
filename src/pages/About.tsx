function About() {
  return (
    <div className="min-h-screen flex">
      {/* Seção 60% com fundo cinza claro e texto */}
      <div className="w-3/5 bg-gray-100 flex items-center justify-center p-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl text-orange-300 mb-6">SOBRE NÓS</h2>
          <h3 className="text-4xl font-semibold mb-4">Nós Transformamos Ideias Em Realidade</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aplicamos soluções de design inovadoras para melhorar o bem-estar residencial das pessoas e ajudar os locais
            de trabalho a ter sucesso e alcançar mais em ambientes confortáveis!
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Toda a nossa equipe colabora com nossos clientes, em todos os nossos 3 escritórios, que estão localizados em
            todo Brasil. Nossa missão é implementar as excelentes ideias e soluções de design para qualquer projeto em
            que estejamos trabalhando. Durante esse processo, combinamos cuidadosamente as diretrizes do cliente, as
            possibilidades técnicas, bem como as questões ambientais. As soluções de engenharia e design de interiores
            que entregamos geralmente nascem após um processo colaborativo.
          </p>
        </div>
      </div>

      {/* Seção 40% com espaço para conteúdo adicional ou imagem */}
      <div className="w-2/5 bg-white flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* Número 15 com imagem de fundo */}
          <div
            className="text-[10rem] font-bold text-transparent flex items-center justify-center bg-clip-text bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/slide3.jpg')",
            }}
          >
            15
          </div>
          {/* Texto abaixo do número */}
          <p className="text-xl font-semibold text-gray-700 mt-4 text-center">
          <h2 className="text-4xl text-orange-300 mb-6">ANOS</h2>
          DE TRABALHO BEM SUCEDIDO NO MERCADO
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;