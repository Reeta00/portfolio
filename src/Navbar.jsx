

function Navbar() {
  return (
    <nav className="navbar portfolio-navbar">
      <div className="container-fluid px-4 px-lg-5">

        <a href="#" className="navbar-brand">
          PORTFOLIO
        </a>

        <div className="desktop-nav d-none d-md-flex align-items-center gap-4">
          <a href="#work" className="nav-link active">
            Work
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            LinkedIn ↗
          </a>

          <a href="#contact" className="contact-button">
            Contact
          </a>
        </div>

        <button className="mobile-menu d-md-none">
          <i className="bi bi-list"></i>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;