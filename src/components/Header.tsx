function Header() {
  return (
    <header className="fixed top-0 left-0 w-full  text-white flex justify-between items-center px-8 py-4  z-50">
      <h1 className="text-2xl font-bold cursor-pointer">
        Arquitetura e Urbanismo
      </h1>
      <nav className="flex-1">
        <ul className="flex justify-center gap-8">
          <li><button className="hover:text-gray-400 uppercase">Home</button></li>
          <li><button className="hover:text-gray-400 uppercase">Sobre</button></li>
          <li><button className="hover:text-gray-400 uppercase">Nossos Serviços</button></li>
          <li><button className="hover:text-gray-400 uppercase">Projetos</button></li>
          <li><button className="hover:text-gray-400 uppercase">Contato</button></li>
        </ul>
      </nav>

      <div className="absolute right-8">
        <p className="">(11) 98765-4321</p>
      </div>
      
    </header>
  );
}

export default Header;