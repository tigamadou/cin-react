import { useState } from 'react';
import AccommodationModal from './AccommodationModal';

interface Accommodation {
  id: number;
  name: string;
  rating: number;
  image: string;
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  amenities?: string[];
  price?: string;
}

const AccommodationSection: React.FC = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: "Hôtel du Port",
      rating: 4,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      description: "Hôtel moderne situé au cœur du port de Cotonou, offrant un accès facile aux principales attractions de la ville. Idéal pour les voyageurs d'affaires et les touristes.",
      address: "Boulevard de la République, Cotonou",
      phone: "+229 21 31 32 33",
      email: "contact@hotelduport.bj",
      price: "À partir de 45 000 FCFA/nuit",
      amenities: ["Wi-Fi gratuit", "Parking", "Restaurant", "Piscine", "Salle de fitness", "Service de navette"]
    },
    {
      id: 2,
      name: "Hôtel Marina Plaza",
      rating: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      description: "Luxueux hôtel avec vue sur la marina, proposant des services haut de gamme et une expérience inoubliable. Parfait pour un séjour de luxe à Cotonou.",
      address: "1820 Boulevard de la Marina, Cotonou",
      phone: "+229 21 31 32 34",
      email: "reservations@marinaplaza.bj",
      price: "À partir de 85 000 FCFA/nuit",
      amenities: ["Wi-Fi gratuit", "Parking privé", "Restaurant gastronomique", "Spa", "Piscine", "Salle de conférence", "Service de concierge"]
    },
    {
      id: 3,
      name: "Hôtel Central",
      rating: 5,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      description: "Hôtel d'affaires moderne au centre-ville, idéal pour les voyageurs professionnels et les conférences. Confort et praticité garantis.",
      address: "Avenue Clozel, Cotonou",
      phone: "+229 21 31 32 35",
      email: "info@hotelcentral.bj",
      price: "À partir de 35 000 FCFA/nuit",
      amenities: ["Wi-Fi gratuit", "Parking", "Restaurant", "Salle de conférence", "Centre d'affaires", "Service de blanchisserie"]
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
    <section id="accommodation" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="accommodation-header">
              <h2 className="accommodation-title">
                Hébergements <span className="accent-text">Alternatifs</span>
              </h2>
              <div className="accommodation-separator"></div>
              <p className="accommodation-description">
                Découvrez nos recommandations d'hébergements près du lieu de la conférence pour votre séjour à Cotonou.
              </p>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="accommodation-cards">
              {accommodations.map(accommodation => (
                <div 
                  key={accommodation.id} 
                  className="accommodation-card"
                  onClick={() => handleAccommodationClick(accommodation)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-image">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.name}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{accommodation.name}</h3>
                    <div className="card-rating">
                      {renderStars(accommodation.rating)}
                    </div>
                    <p className="card-description">{accommodation.description}</p>
                    <button className="card-btn">
                      DÉTAILS
                    </button>
                  </div>
                </div>
              ))}
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
