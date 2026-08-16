function Projects() {
  const projects = [
    {
      title: "Project One",
      category: "UX/UI Design",
      description: "A short description of what this project was about.",
      image: "/src/assets/project1.png",
      link: "#"
    },
    {
      title: "Project Two",
      category: "Web Development",
      description: "A short description of what you built and your role.",
      image: "/src/assets/project2.png",
      link: "#"
    },
    {
      title: "Project Three",
      category: "UX/UI · Development",
      description: "A short description of this project.",
      image: "/src/assets/project3.png",
      link: "#"
    }
  ];

  return (
    <section className="work" id="work">
      <div className="container-fluid px-4 px-lg-5">

        <div className="work-heading">
          <h4>Projects</h4>
        </div>

        <div className="work-carousel">

          {projects.map((project, index) => (
            <a
              href={project.link}
              className="project-card"
              key={index}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;