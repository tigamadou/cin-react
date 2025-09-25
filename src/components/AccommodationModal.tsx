interface Accommodation {
  id: number;
  name: string;
  rating: number;
  image: string;
  description: string;
  address?: string;
  website?: string;
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
                    
                    
                    
                    {accommodation.website && (
                      <div className="info-item">
                        <i className="bi bi-globe"></i>
                        <a href={accommodation.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          Visiter le site web
                        </a>
                      </div>
                    )}
                    
                  </div>
                  
                  <div className="accommodation-description">
                    <h4>Description</h4>
                    <p>{accommodation.description}</p>
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
