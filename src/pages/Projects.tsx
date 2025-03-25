function Projects() {
  const projects = [
    {
      id: 1,
      title: "Residência Moderna",
      description: "Projeto de uma residência moderna com design minimalista.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Edifício Comercial",
      description: "Edifício comercial com foco em sustentabilidade.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Praça Pública",
      description: "Projeto de revitalização de uma praça pública.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-16">
      <h2 className="text-center text-4xl font-bold m-8">Projetos</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Confira alguns dos nossos projetos mais recentes, que combinam inovação, funcionalidade e estética.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;