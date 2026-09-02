import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar-expand-md portfolio-navbar">
      <div className="container-fluid px-4 px-lg-5">

        <a className="navbar-brand">
          PORTFOLIO
        </a>

        <button
          className="navbar-toggler mobile-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="portfolioNav"
        >
          <div className="desktop-nav d-flex align-items-center gap-5">

            <a
              href="https://github.com/Reeta00"
              target="_blank"
              rel="noreferrer"
              className="navbar-social"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/reeta-valtam%C3%A4ki-858a3b426/"
              target="_blank"
              rel="noreferrer"
              className="navbar-social"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>


            <Button className='contact-button' onClick={handleShow}>
              Contact me
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              centered
              className="contact-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Let's Connect!</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="contact-content">
                  <p className="contact-intro">
                    I’m looking for my first opportunity in IT where I can put my skills into practice, keep learning and grow professionally. I’m also open to doing my final thesis in collaboration with a company.
                  </p>
                  <p className='connect-p'>I’d love to connect!</p>

                  <div className="contact-details">

                    <a href="tel:+358400917294" className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <div>
                        <span>Phone</span>
                        <strong>+358 400917294</strong>
                      </div>
                    </a>

                    <a
                      href="mailto:reeta.valtamaki@hotmail.com"
                      className="contact-item"
                    >
                      <i className="bi bi-envelope"></i>
                      <div>
                        <span>Email</span>
                        <strong>reeta.valtamaki@hotmail.com</strong>
                      </div>
                    </a>

                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  className="contact-close"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;