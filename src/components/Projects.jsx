
import { useRef } from "react";

function Projects() {

  const carouselRef = useRef(null);

  const projects = [
            {
      title: "Counter App",
      category: "HTLM • CSS • JavaScript",
      description: "A short description of this project.",
      image: "/src/assets/rubberduck.png",
      link: "#"
    },
    {
      title: "Weather App",
      category: "HTML • CSS • JavaScript • API",
      description: "A weather app for ",
      image: "/src/assets/WeatherApp.png",
      link: "#"
    },
    {
      title: "Mini Yahtzee",
      category: "React Native • Expo",
      description: "A short description of what this project was about.",
      image: "/src/assets/yahtzee.png",
      link: "#"
    },
    {
      title: "Online Book Store",
      category: "React JS • Node.js • MySQL",
      description: "First group project",
      image: "/src/assets/Novellinurkka.png",
      link: "#"
    },
    {
      title: "Exercise App",
      category: "React Native • Expo",
      description: "A short description of this project.",
      image: "/src/assets/exercise.png",
      link: "#"
    }

  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * 430,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="work" id="work">
   <div className="projects-heading">
  <span>Web development</span>

  <div className="projects-title-row">
    <h2>Projects</h2>

    <div className="carousel-buttons">
      <button
        type="button"
        className="carousel-button"
        onClick={() => scrollCarousel(-1)}
        aria-label="Previous projects"
      >
        <i className="bi bi-arrow-left"></i>
      </button>

      <button
        type="button"
        className="carousel-button"
        onClick={() => scrollCarousel(1)}
        aria-label="Next projects"
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  </div>

  <p>
    Selected projects and applications I've worked on.
  </p>
</div>

      <div className="work-carousel"
        ref={carouselRef}>

        {projects.map((project, index) => (
          <a
            href={project.link}
            className="project-card"
            key={index}
          >
            <div className={`project-image project-image-${index}`}>
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

      <div className="wireframe-section">

        <div className="wireframe-heading">
          <span>UI / UX</span>

          <h2>Wireframes & Design</h2>

          <p>
            Early concepts, layouts and user flows created in Figma.
          </p>
        </div>

        <div className="wireframe-grid">

          <div className="wireframe-card">
            <img
              src="/src/assets/Figmaprojekteja.png"
              alt="Figma projects and wireframes"
            />
          </div>

          <div className="wireframe-card">
            <img
              src="/src/assets/ShopFigma.png"
              alt="Shop website wireframe"
            />
          </div>

          <div className="wireframe-card">
            <img
              src="/src/assets/TravelSite.png"
              alt="Application wireframe"
            />
          </div>

        </div>

      </div>


    </section>
  );
}

export default Projects;