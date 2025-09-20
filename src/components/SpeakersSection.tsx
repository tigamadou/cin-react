import { useState } from 'react';
import type { Speaker } from '../types';
import SpeakerModal from './SpeakerModal';

interface SpeakersSectionProps {
  speakers: Speaker[];
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <>
      <section id="speakers" className="py-5 bg-light">
        <div className="container">
          <div className=" mb-5">
            <h2 className="display-6 fw-bold mb-3 text-dark">SPEAKERS</h2>
          </div>
          <div className="row">
            {speakers.map(speaker => (
              <div key={speaker.id} className="col-lg-3 col-md-6 mb-4">
                <div 
                  className="speaker-card text-center"
                  onClick={() => handleSpeakerClick(speaker)}
                >
                  <div className="speaker-image">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      style={{ width: '100%',  objectFit: 'cover' }}
                    />
                  </div>
                  <div className="speaker-content">
                    <h5 className="fw-bold mb-2 text-dark">{speaker.name}</h5>
                    <div className="speaker-separator mb-2"></div>
                    <p className="text-muted text-uppercase small fw-semibold mb-1">{speaker.title}</p>
                    <p className="text-muted small fw-semibold">{speaker.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakerModal 
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SpeakersSection;
