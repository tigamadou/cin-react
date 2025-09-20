import type { TimeLeft } from '../types';
interface HeroSectionProps {
  timeLeft: TimeLeft;
}

const HeroSection: React.FC<HeroSectionProps> = ({ timeLeft }) => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section text-white py-5 position-relative">
        <div className="hero-background position-absolute w-100 h-100">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-100 h-100"
            style={{
              objectFit: 'cover',

            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-background-overlay position-absolute w-100 h-100" style={{
          zIndex: -1
        }}></div>
        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 text-white">
                Conférence Internationale sur la Nutrition 2025
              </h1>
              <p className="mb-5 fs-5 text-white" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
                Nutrition et Développement : Un Investissement Stratégique pour les Générations Présentes et Futures
              </p>
              <div className="d-flex gap-3 ">
                <div className="d-flex align-items-center justify-content-center">
                <i className=" bi bi-calendar-event me-2 fs-4"></i>
                <div>
                    <div className="fw-bold">27 Septembre 2025</div>
                </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-geo-alt me-2 fs-4"></i>
                <div>
                    <div className="fw-bold">SOFITEL COTONOU</div>
                </div>
                </div>
              </div>
                  
            </div>
            <div className="col-lg-6 justify-content-end d-flex flex-column align-items-end">
                
                <div className="counter-container d-flex gap-4 mb-5">
                    <div className="counter-item">
                        <div className="counter-item-value">{timeLeft.days}</div>
                        <div className="counter-item-label">JOURS</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-item-value">{timeLeft.hours}</div>
                        <div className="counter-item-label">HEURES</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-item-value">{timeLeft.minutes}</div>
                        <div className="counter-item-label">MINUTES</div>
                    </div>
                    <div className="counter-item">
                        <div className="counter-item-value">{timeLeft.seconds}</div>
                        <div className="counter-item-label">SECONDES</div>
                    </div>
                </div>
                 <div className="d-flex gap-3 mb-4 mt-5">
                     <button className="btn btn-cta">S'inscrire</button>
                 </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                 {/* Event Details */}
              <div className="row mb-5 align-items-center justify-content-center">
                
              </div>


              {/* Countdown Timer */}
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
