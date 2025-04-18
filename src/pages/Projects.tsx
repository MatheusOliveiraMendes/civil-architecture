function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hangzhou, China",
      description: "Gerenciamento de Projetos.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Los Angeles, United States",
      description: "Serviços de arquitetura.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Montreal, Canada",
      description: "Pré-construção.",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Reggio Emilia, Italy",
      description: "Engenharia de fachada.",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="relative h-[600px] overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-75"
            />
           <div className="absolute inset-0 flex flex-col justify-between text-center text-white px-4 py-8">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold">
  {project.description}
</p>            
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 border-2 border-orange-300 text-orange-300 font-semibold rounded-full hover:bg-orange-300 hover:text-white transition">
          Veja todos projetos
        </button>
      </div>
    </div>
  );
}

export default Projects;