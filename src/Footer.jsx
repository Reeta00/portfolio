function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container-fluid px-4 px-lg-5">
        <div className="d-flex justify-content-center align-items-center gap-2">

          <span className="text-muted small">
            © 2026 Reeta Valtamäki
          </span>

          <a
            href="https://www.instagram.com/rempce/"
            target="_blank"
            rel="noreferrer"
            className="footer-instagram"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;