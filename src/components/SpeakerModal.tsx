import type { Speaker } from '../types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
        
        <div className="modal-body">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="speaker-image-modal">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="img-fluid"
                />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="speaker-details">
                <h2 className="speaker-name">{speaker.name}</h2>
                <p className="speaker-title">{speaker.title}</p>
                {speaker.social && Object.keys(speaker.social).length > 0 && (
                  <div className="social-links">
                  {speaker.social.facebook && (
                    <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="bi bi-facebook"></i>
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="bi bi-twitter"></i>
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                </div>
                )}
                
                
                <div className="speaker-bio">
                  <p>{speaker.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
