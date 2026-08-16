function Header() {
    return (
        <header className="hero">
            <div className="container-fluid px-4 px-lg-5">
                <div className="row align-items-center">


                    <div className="col-md-6">
                        <div className="hero-content">

                            <p className="hero-intro">
                                Hi, I'm
                            </p>

                            <h1>
                                Reeta Valtamäki.
                            </h1>

                            <h2>
                                Aspiring UX/UI Designer & Software Developer | 3rd-year IT Student
                            </h2>

                            <p className="hero-description">
                                I’m a baker turned IT student who still loves making things, just with different tools. I enjoy combining creativity and logical problem solving as I learn to turn ideas from everyday life into practical, playful or simply fun projects through design and code.
                            </p>

                            <a href="#work" className="hero-button">
                                View my work ↓
                            </a>

                        </div>
                    </div>


                    <div className="col-md-6">
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