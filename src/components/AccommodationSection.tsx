import { useState } from 'react';
import AccommodationModal from './AccommodationModal';
import sofitelImage from '../assets/sofitel.jpg';
import novotelImage from '../assets/novotel.jpg';
import goldenTulipImage from '../assets/golden_tulip.jpg';
import maisonRougeImage from '../assets/maison_rouge.jpeg';

interface Accommodation {
  id: number;
  name: string;
  rating: number;
  image: string;
  description: string;
  address?: string;
  website?: string;
}

const AccommodationSection: React.FC = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: "Sofitel Cotonou Marina Hotel & Spa",
      rating: 5,
      image: sofitelImage,
      description: "Hôtel 5 étoiles de luxe situé sur le Boulevard de la Marina, offrant 197 chambres avec vue sur l'océan. Proche de l'aéroport et des principales attractions de Cotonou.",
      address: "Boulevard de la Marina, Cotonou",
      website: "https://sofitel.accor.com/en/hotels/B845.html"
    },
    {
      id: 2,
      name: "Novotel Cotonou Orisha Hotel",
      rating: 4,
      image: novotelImage,
      description: "Hôtel 4 étoiles moderne situé sur le Boulevard de la Marina avec 110 chambres. Idéal pour les voyageurs d'affaires avec des équipements de conférence complets.",
      address: "Boulevard de la Marina, Cotonou",
      website: "https://all.accor.com/hotel/1826/index.fr.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Mapshttps://all.accor.com/hotel/1826/index.fr.shtml"
    },
    {
      id: 3,
      name: "Golden Tulip Le Diplomate Cotonou",
      rating: 4,
      image: goldenTulipImage,
      description: "Hôtel 4 étoiles élégant avec 134 chambres, situé sur le Boulevard de la Marina. Proche de l'Ambassade d'Angola et offrant un service personnalisé de qualité.",
      address: "No 90 rue 12.017 - Boulevard de la Marina, Cotonou",
      website: "https://diplomate-cotonou.goldentulip.com/fr-fr/"
    },
    {
      id: 4,
      name: "Hotel Maison Rouge Cotonou",
      rating: 4,
      image: maisonRougeImage,
      description: "Hôtel boutique 4 étoiles unique avec une décoration personnalisée et des expositions d'art. Situé sur le Boulevard de la Marina avec une terrasse panoramique sur la mer.",
      address: "Boulevard de la Marina, Cotonou",
      website: "https://hotel-benin-maison-rouge-cotonou.com/"
    }
  ];

  const handleAccommodationClick = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccommodation(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="accommodation" className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Hébergements <span className="text-yellow">Recommandés</span>
            </h2>
            <div className="mx-auto mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#28a745' }}></div>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Découvrez nos recommandations d'hébergements près du lieu de la conférence pour votre séjour à Cotonou.
            </p>
          </div>
        </div>
        
        {/* Accommodations Grid */}
        <div className="row g-4">
          {accommodations.map(accommodation => (
            <div key={accommodation.id} className="col-lg-6 col-xl-3">
              <div 
                className="card h-100 shadow-sm border-0 accommodation-card-hover"
                onClick={() => handleAccommodationClick(accommodation)}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              >
                <div className="position-relative">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark px-2 py-1">
                      {accommodation.rating} ⭐
                    </span>
                  </div>
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>
                    {accommodation.name}
                  </h5>
                  
                  <div className="mb-3">
                    {renderStars(accommodation.rating)}
                  </div>
                  
                  <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {accommodation.description}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="btn btn-yellow w-100 fw-semibold">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="alert alert-info bg-yellow border-0" style={{ backgroundColor: '#e3f2fd' }}>
              <i className="fas fa-info-circle me-2"></i>
              <strong>Note :</strong> Tous les hôtels sont situés sur le Boulevard de la Marina, à proximité du lieu de la conférence.
            </div>
          </div>
        </div>
      </div>
      
      <AccommodationModal 
        accommodation={selectedAccommodation}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default AccommodationSection;
