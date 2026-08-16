function Header() {
  return (
    <header className="hero">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center">

         
          <div className="col-lg-6">
            <div className="hero-content">

              <p className="hero-intro">
                Hi, I'm
              </p>

              <h1>
                Reeta Valtamäki.
              </h1>

              <h2>
                Aspiring software developer & UX/UI designer
              </h2>

              <p className="hero-description">
                I design and build thoughtful digital experiences
                that are intuitive, accessible and user centered.
              </p>

              <a href="#work" className="hero-button">
                View my work
                <span>↓</span>
              </a>

            </div>
          </div>

          
          <div className="col-lg-6">
            <div className="hero-image-container">

              <div className="hero-dots"></div>

              <img
                src="/src/assets/profiilikuvaReeta.png"
                alt="Reetan profiilikuva"
                className="hero-image"
              />

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;