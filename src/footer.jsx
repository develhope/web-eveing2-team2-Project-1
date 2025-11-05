import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" role="contentinfo" aria-label="Footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/logo.png" alt="Logo" />
                </div>

                <nav className="footer-section" aria-label="Chi siamo">
                    <h4>Chi siamo</h4>
                    <ul>
                        <li><a href="#storia">La nostra storia</a></li>
                        <li><a href="#team">Il team</a></li>
                        <li><a href="#mission">Mission</a></li>
                    </ul>
                </nav>

                <nav className="footer-section" aria-label="Servizi">
                    <h4>Servizi</h4>
                    <ul>
                        <li><a href="#design">Web Design</a></li>
                        <li><a href="#sviluppo">Sviluppo</a></li>
                        <li><a href="#marketing">Marketing</a></li>
                    </ul>
                </nav>

                <section className="footer-section" aria-label="Contatti">
                    <h4>Contatti</h4>
                    <p>Via Roma 123, Milano</p>
                    <p><a href="mailto:travelroute@gmail.com">travelroute@gmail.com</a></p>
                    <p><a href="tel:+393334877951">+39 3334877951</a></p>

                    <div className="social-icons" aria-label="Social links">
                        <a href="#" aria-label="Facebook" rel="noopener noreferrer">
                            {/* simple SVG icon to avoid external icon libs */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 2.9h-2.03v7A10 10 0 0022 12z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm6.5-2.4a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M4.98 3.5A2.5 2.5 0 112.5 6a2.5 2.5 0 012.48-2.5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.65h.06c.49-.92 1.68-1.9 3.46-1.9 3.7 0 4.38 2.43 4.38 5.59V21h-3.96v-5.17c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.34-1.97 2.72V21H9.5z" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>

            <div className="footer-bottom" aria-hidden="false">
                © {year} Tutti i diritti riservati.
            </div>
        </footer>
    );
};

export default Footer;