import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-transparent transition-all duration-300 ${
        isScrolled
          ? "bg-[#171717] text-white shadow-lg shadow-black/20 border-[#1f1f1f]"
          : "bg-[#171717] text-gray-200"
      }`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo Arquitetura e Urbanismo"
            className="w-44 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-10">
            {["Home", "Sobre", "Nossos Serviços", "Projetos", "Contato"].map(
              (item) => (
                <li key={item}>
                  <button
                    className={`text-xs font-semibold uppercase tracking-[0.3em] transition ${
                      isScrolled
                        ? "text-gray-100 hover:text-orange-200"
                        : "text-gray-200 hover:text-orange-200"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className={`hidden flex-col text-right text-[0.65rem] font-medium uppercase tracking-[0.3em] ${
              isScrolled ? "text-gray-400" : "text-gray-300"
            } lg:flex`}
          >
            <span>Fale conosco</span>
            <span
              className={`text-sm font-semibold tracking-[0.1em] ${
                isScrolled ? "text-white" : "text-orange-200"
              }`}
            >
              (11) 98765-4321
            </span>
          </div>
          <button
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
              isScrolled
                ? "border border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-[#171717]"
                : "border border-orange-300 text-orange-200 hover:bg-orange-200 hover:text-neutral-950"
            }`}
          >
            Orçamento
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
