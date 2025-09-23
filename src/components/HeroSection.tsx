import { useState } from 'react';
import type { TimeLeft } from '../types';
import RegistrationModal from './RegistrationModal';
import heroBackground from '../assets/pictogramm.svg';

interface HeroSectionProps {
  timeLeft: TimeLeft;
}

const HeroSection: React.FC<HeroSectionProps> = ({ timeLeft }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section  py-5 position-relative" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row align-items-center hero-section-bg">
            <div className="col-md-6 col-lg-6 offset-md-6 offset-lg-6 bg-green">
              <div className="mb-2 text-yellow fs-3 fw-bold">
                Thème :
              </div>
              <h2 className="fw-bold mb-4 text-white fs-1">
               <span className="text-yellow">« </span>
               Investir dans la Nutrition : un choix stratégique pour la santé et 
               le développement durable des générations. 
               <span className="text-yellow"> »</span>
              </h2>
              <div className="mb-3 text-yellow fw-bold fs-2">
                Samedi 27 sept. 2025 à 10h00
              </div>
              
              <div className="d-flex gap-3 text-white fs-4">
                <div className="d-flex align-items-center justify-content-center">
                  Le Dôme CIC, Cotonou
                </div>
                <div className="d-flex align-items-center justify-content-center ">
                  Sofitel Cotonou Marina Hotel & Spa
                </div>
              </div>
                  
            </div>
          </div>
        </div>
      </section>
      <div className="color-banner">
        <div className="banner-column green"></div>
        <div className="banner-column yellow"></div>
        <div className="banner-column red"></div>
      </div>
      <div className="hero-section-footer">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="counter-container">
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
                <button className="btn btn-cta" onClick={handleOpenModal}>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default HeroSection;
