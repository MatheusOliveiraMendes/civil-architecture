import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Logo Arquitetura e Urbanismo"
                className="w-64 cursor-pointer"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {[
              {
                title: "Recursos",
                links: [
                  { name: "Blog", href: "" },
                  { name: "Projetos", href: "" },
                ],
              },
              {
                title: "Siga-nos",
                links: [
                  { name: "Linkedin", href: "" },
                  { name: "Instagram", href: "" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Política de Privacidade", href: "#" },
                  { name: "Termos e Condições", href: "#" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Todos os Direitos Reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {["Facebook", "Discord", "Twitter", "GitHub", "Dribbble"].map((platform, index) => (
              <a
                key={platform}
                href="#"
                className={`text-gray-500 hover:text-gray-900 dark:hover:text-white ${index !== 0 ? "ms-5" : ""}`}
              >
                <span className="sr-only">Página do {platform}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;