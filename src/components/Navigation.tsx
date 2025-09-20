
const Navigation: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 50;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3 shadow-sm">
      <div className="container px-4">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <img 
            src="/logo-cin.jpeg" 
            alt="CIN Logo" 
            className="me-2" 
            style={{ height: '40px', width: 'auto' }}
          />
          <span className="fw-bold fs-3 text-dark">CIN</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-4">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about" onClick={(e) => handleNavClick(e, 'about')}>À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#speakers" onClick={(e) => handleNavClick(e, 'speakers')}>Intervenants</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#schedule" onClick={(e) => handleNavClick(e, 'schedule')}>Programme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#venue" onClick={(e) => handleNavClick(e, 'venue')}>Lieu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#accommodation" onClick={(e) => handleNavClick(e, 'accommodation')}>Hébergement</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
