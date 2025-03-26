import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Define como `true` se o usuário rolar para baixo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpa o evento ao desmontar o componente
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white flex justify-between items-center px-8 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-neutral-900 shadow-md" : "bg-transparent"
      }`}
    >
      <img
        src="/images/logo.png"
        alt="Logo Arquitetura e Urbanismo"
        className="w-64 cursor-pointer"
      />

      <nav className="flex-1">
        <ul className="flex justify-center gap-8">
          <li><button className="hover:text-orange-300 uppercase">Home</button></li>
          <li><button className="hover:text-orange-300 uppercase">Sobre</button></li>
          <li><button className="hover:text-orange-300 uppercase">Nossos Serviços</button></li>
          <li><button className="hover:text-orange-300 uppercase">Projetos</button></li>
          <li><button className="hover:text-orange-300 uppercase">Contato</button></li>
        </ul>
      </nav>

      <div className="absolute right-8 flex items-center gap-2">
      <img
        src="/images/mobile.png"
        alt="Icon Mobile"
        className=" w-5 cursor-pointer"
      />
        <p className="">(11) 98765-4321</p>
      </div>
    </header>
  );
}

export default Header;