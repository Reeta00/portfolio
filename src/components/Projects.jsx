import { useRef } from "react";

function ProjectCard({ project }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={project.link}
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
        />

      </div>

      <div className="project-info">

        <span>{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

      </div>
    </a>
  );
}


function Projects() {

  const carouselRef = useRef(null);

  const projects = [
    {
      title: "Counter App",
      category: "HTML • CSS • JavaScript",
      description:
        "A simple interactive counter I built to practice JavaScript.",
      image: "./src/assets/rubberduck.png",
      video: "./src/assets/RubberDuck.mp4"
    },

    {
      title: "Online Book Store",
      category: "React JS • Node.js • MySQL",
      description:
        "A full-stack bookstore where I focused on the database, admin and login pages and overall UI design.",
      image: "./src/assets/Novellinurkka.png",
      video: "./src/assets/FirstProject.mp4"
    },

    {
      title: "Mini Yahtzee",
      category: "React Native • Expo",
      description:
        "A school project featuring a mobile Yahtzee-style game built with React Native and Expo.",
      image: "./src/assets/yahtzee.png",
      video: "./src/assets/miniYahzee.mp4"
    },

    {
      title: "Weather App",
      category: "HTML • CSS • JavaScript • API",
      description:
        "A weather application that fetches and displays live weather data.",
      image: "./src/assets/WeatherApp.png",
      video: "./src/assets/WeatherApp.mp4"
    },

    {
      title: "Exercise App",
      category: "React Native • Expo",
      description:
        "A simple mobile application for browsing and tracking exercises.",
      image: "./src/assets/exercise.png",
      video: "./src/assets/ExerciseApp.mp4"
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
        </div>

        <p>
          Some of the projects and applications I've worked on
        </p>

      </div>



      <div className="carousel-wrapper">

        <button
          type="button"
          className="carousel-button carousel-button-left"
          onClick={() => scrollCarousel(-1)}
          aria-label="Previous projects"
        >
          <i className="bi bi-arrow-left"></i>
        </button>


        <div
          className="work-carousel"
          ref={carouselRef}
        >
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
            />
          ))}
        </div>


        <button
          type="button"
          className="carousel-button carousel-button-right"
          onClick={() => scrollCarousel(1)}
          aria-label="Next projects"
        >
          <i className="bi bi-arrow-right"></i>
        </button>

      </div>



      <div className="wireframe-section">

        <div className="wireframe-heading">

          <span>UI / UX</span>

          <h2>Wireframes & Design</h2>

          <p>
            Some of the early concepts and layouts I designed in Figma
          </p>

        </div>


        <div className="wireframe-grid">

          <div className="wireframe-card">
            <img
              src="./src/assets/Figmaprojekteja.png"
              alt="Figma projects and wireframes"
            />
          </div>

          <div className="wireframe-card">
            <img
              src="./src/assets/ShopFigma.png"
              alt="Shop website wireframe"
            />
          </div>

          <div className="wireframe-card">
            <img
              src="./src/assets/TravelSite.png"
              alt="Application wireframe"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;