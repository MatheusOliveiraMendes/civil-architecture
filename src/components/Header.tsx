
function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer">
      Arquitetura e Urbanismo
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li><button >Home</button></li>
          <li><button >Sobre</button></li>
          <li><button >Serviços</button></li>
          <li><button >Projetos</button></li>
          <li><button >Contato</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;