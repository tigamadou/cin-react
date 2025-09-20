
import { useState } from 'react';
import RegistrationModal from './RegistrationModal';

const RegistrationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="registration" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="registration-content">
              <h2 className="registration-title">INSCRIPTION</h2>
              <div className="registration-separator"></div>
              <p className="registration-description">
                Rejoignez-nous pour cette conférence internationale sur la nutrition et le développement. 
                Une opportunité unique de participer à des discussions de haut niveau avec des experts 
                internationaux et de contribuer aux solutions pour améliorer la nutrition en Afrique.
              </p>
   
            </div>
          </div>
          
          <div className="col-lg-6 d-flex align-items-center justify-content-end">
            <div className="registration-cta">
              <button className="btn-cta" onClick={handleOpenModal}>
                S'INSCRIRE MAINTENANT
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default RegistrationSection;
