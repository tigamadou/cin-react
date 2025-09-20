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

interface AccommodationModalProps {
  accommodation: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
}

const AccommodationModal: React.FC<AccommodationModalProps> = ({ accommodation, isOpen, onClose }) => {
  if (!accommodation) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-content accommodation-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
            
            <div className="row g-0">
              <div className="col-md-6">
                <div className="accommodation-image-modal">
                  <img src={accommodation.image} alt={accommodation.name} />
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="accommodation-details">
                  <h2 className="accommodation-name">{accommodation.name}</h2>
                  
                  <div className="accommodation-rating">
                    {renderStars(accommodation.rating)}
                    <span className="rating-text">{accommodation.rating}/5 étoiles</span>
                  </div>
                  
                  <div className="accommodation-info">
                    {accommodation.address && (
                      <div className="info-item">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>{accommodation.address}</span>
                      </div>
                    )}
                    
                    {accommodation.phone && (
                      <div className="info-item">
                        <i className="bi bi-telephone-fill"></i>
                        <span>{accommodation.phone}</span>
                      </div>
                    )}
                    
                    {accommodation.email && (
                      <div className="info-item">
                        <i className="bi bi-envelope-fill"></i>
                        <span>{accommodation.email}</span>
                      </div>
                    )}
                    
                    {accommodation.price && (
                      <div className="info-item">
                        <i className="bi bi-currency-euro"></i>
                        <span>{accommodation.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="accommodation-description">
                    <h4>Description</h4>
                    <p>{accommodation.description}</p>
                  </div>
                  
                  {accommodation.amenities && accommodation.amenities.length > 0 && (
                    <div className="accommodation-amenities">
                      <h4>Équipements</h4>
                      <div className="amenities-list">
                        {accommodation.amenities.map((amenity, index) => (
                          <span key={index} className="amenity-tag">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="accommodation-actions">
        
                    <button className="btn btn-light ">
                      Plus d'informations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccommodationModal;
