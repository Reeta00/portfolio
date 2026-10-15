import { useRef } from "react";
import data from "/data.js"


import figmaProjects from "/src/assets/Figmaprojekteja.png";
import shopFigma from "/src/assets/ShopFigma.png";
import travelSite from "/src/assets/TravelSite.png";

function ProjectCard({ data }) {
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
      href={data.link}
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">

        <img
          src={data.image}
          alt={data.title}
        />

        <video
          ref={videoRef}
          src={data.video}
          muted
          loop
          playsInline
        />

      </div>

      <div className="project-info">

        <span>{data.category}</span>

        <h3>{data.title}</h3>

        <p>{data.description}</p>

      </div>
    </a>
  );
}


function Projects() {

  const carouselRef = useRef(null);




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
          {data.map((project, index) => (
            <ProjectCard
              data={project}
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
    <span>UI / UX DESIGN</span>
    <h2>Wireframes & Design</h2>
    <p>
      Early concepts and layouts I designed in Figma.
    </p>
  </div>

  <div className="wireframe-grid">

    <div className="wireframe-card">
      <img
        src={figmaProjects}
        alt="Figma projects and wireframes"
        loading="lazy"
      />
    </div>

    <div className="wireframe-card">
      <img
        src={shopFigma}
        alt="Shop website wireframe"
        loading="lazy"
      />
    </div>

    <div className="wireframe-card">
      <img
        src={travelSite}
        alt="Travel website design"
        loading="lazy"
      />
    </div>

  </div>

</div>

    </section>
  );
}

export default Projects;