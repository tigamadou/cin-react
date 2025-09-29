import React from 'react';

interface Photo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const PicturesSection: React.FC = () => {
  const FLICKR_ALBUM_URL = 'https://www.flickr.com/photos/dgpd/albums/72177720329316024/';

  // Sample photos representing the CIN 2025 conference
  // These are placeholder images - in production, you would fetch from Flickr API
  const photos: Photo[] = [
    {
      id: '1',
      title: 'Conférence Internationale sur la Nutrition - CIN 2025',
      url: 'https://www.flickr.com/photos/dgpd/54815446034/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815446034_a58a959a9a_b.jpg'
    },
    {
      id: '2', 
      title: 'Participants de la conférence CIN 2025',
      url: 'https://www.flickr.com/photos/dgpd/54815186756/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815186756_741b1b1438_h.jpg'
    },
    {
      id: '3',
      title: 'Séance de travail - CIN 2025',
      url: 'https://www.flickr.com/photos/dgpd/54815445918/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815445918_698140f1ac_h.jpg'
    },
    {
      id: '4',
      title: 'Intervenants de la conférence',
      url: 'https://www.flickr.com/photos/dgpd/54814339547/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54814339547_5b4a8be445_b.jpg'
    },
    {
      id: '5',
      title: 'Moment de networking - CIN 2025',
      url: 'https://www.flickr.com/photos/dgpd/54815528850/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815528850_aa2d7a6cdc_b.jpg'
    },
    {
      id: '6',
      title: 'Présentation des résultats',
      url: 'https://www.flickr.com/photos/dgpd/54815446428/in/album-72177720329316024 ',
      thumbnail: 'https://live.staticflickr.com/65535/54815446428_59c35d7d63_h.jpg'
    },
    {
      id: '7',
      title: 'Échanges entre participants',
      url: 'https://www.flickr.com/photos/dgpd/54815446094/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815446094_5ac5182712_h.jpg'
    },
    {
      id: '8',
      title: 'Cérémonie de clôture CIN 2025',
      url: 'https://www.flickr.com/photos/dgpd/54815529030/in/album-72177720329316024',
      thumbnail: 'https://live.staticflickr.com/65535/54815529030_6139676e92_c.jpg'
    }
  ];

 

  return (
    <section id="pictures" className="pictures-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Galerie Photos</h2>
          </div>
        </div>

        <div className="row g-3">
          {photos.map((photo) => (
            <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className="photo-item position-relative overflow-hidden rounded shadow-sm"
                style={{ aspectRatio: '1', cursor: 'pointer' }}

              >
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                    <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    className="w-100 h-100 object-cover"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    />
                </a>

              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <a 
              href={FLICKR_ALBUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta-sm"
            >
              Voir toutes les photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PicturesSection;
