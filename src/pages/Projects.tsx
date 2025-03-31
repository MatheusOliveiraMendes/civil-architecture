function Projects() {
  const projects = [
    {
      id: 1,
      title: "Residência Moderna",
      description: "Projeto design minimalista.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Edifício Comercial",
      description: "Edifício comercial sustentavel.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Praça Pública",
      description: "Projeto de revitalização.",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Casa de Campo",
      description: "Projeto de uma casa.",
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
              <p className="absolute bottom-28 rotate-270 text-white text-sm font-semibold">
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