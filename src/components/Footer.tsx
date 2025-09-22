import logo from '../assets/Logo_white.svg';
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer text-white py-5">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row mb-4">
          {/* Logo and Description */}
          <div className="col-lg-3 mb-4">
            <div className="d-flex align-items-center mb-3 ">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img 
                    src={logo} 
                    alt="CIN Logo" 
                    className="me-3" 
                    style={{ height: '80px', width: 'auto' }}
                  />
                </div>
              </div>
            </div>
            <p className=" mb-3">
              Conférence Internationale sur la Nutrition<br />
              Nutrition et Développement : Un Investissement Stratégique pour les Générations Présentes et Futures
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-facebook fs-4" style={{color: 'white'}}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-twitter fs-4" style={{color: 'white'}}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-linkedin fs-4" style={{color: 'white'}}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-instagram fs-4" style={{color: 'white'}}></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-youtube fs-4" style={{color: 'white'}}></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3" style={{color: 'white'}}>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none hover-accent">
                  À Propos
                </a>
              </li>
              <li className="mb-2">
                <a href="#speakers" className="text-white text-decoration-none hover-accent">
                  Intervenants
                </a>
              </li>
              <li className="mb-2">
                <a href="#schedule" className="text-white text-decoration-none hover-accent">
                  Programme
                </a>
              </li>
              <li className="mb-2">
                <a href="#venue" className="text-white text-decoration-none hover-accent">
                  Lieu
                </a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-white text-decoration-none hover-accent">
                  Inscription
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3" style={{color: 'white'}}>Contact</h5>
            <div className="text-white">
              <div className="mb-3 d-flex align-items-center justify-content-start">
                <p className="mb-0">
                  <strong>Email:</strong>
                </p>
                <p className="mb-0 ms-4">
                  <a href="mailto:info@cin2025.bj" className="text-white text-decoration-none hover-accent">
                    info@cin2025.bj
                  </a>
                </p>
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-start">
                <p className="mb-0">
                  <strong>Téléphone:</strong>
                </p>
                <p className="mb-0 ms-4">
                  <a href="tel:+22912345678" className="text-white text-decoration-none hover-accent">
                    +229 12 34 56 78
                  </a>
                </p>
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-start">
                <p className="mb-0">
                  <strong>Adresse:</strong>
                </p>
                <p className="mb-0 ms-4 small">
                  Palais des Congrès<br />
                  Cotonou, Bénin
                </p>
              </div>
            </div>
          </div>

          {/* Organizer Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3" style={{color: 'white'}}>Organisateur</h5>
            <div className="text-white">
              <p className="mb-2">
                <strong>Gouvernement de la République du Bénin</strong>
              </p>
              <p className="mb-0 small">
                Ministère d'État chargé du Développement<br />
                Cotonou, Bénin
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-4" style={{borderColor: 'white'}} />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-white">
              © 2025 Conférence Internationale sur la Nutrition. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-white small">
              27-28 Septembre 2025 • Cotonou, Bénin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
