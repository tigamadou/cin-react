const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="venue-section" style={{backgroundImage: `url(https://www.cvent.com/venues/_next/image?url=https%3A%2F%2Fimages.cvent.com%2Fcsn%2F0ede71bc-3a50-468d-8e24-04a6213607df%2Fimages%2Fed9eb1c9da524bab906e26476e97dcd8_large!_!c506d6a79882a78415a84f99dec4e3f1.jpg&w=1200&q=80)`}}>
      
      <div className="venue-overlay" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="venue-content">
                <h2 className="venue-title">LIEU</h2>
                <div className="venue-separator"></div>
                <p className="venue-description">
                  Découvrez le lieu exceptionnel qui accueillera la Conférence Internationale sur la Nutrition. 
                  Un cadre moderne et professionnel au cœur de Cotonou.
                </p>
                <div className="venue-info">
                  <h3 className="venue-name">Sofitel Cotonou Marina Hotel & Spa</h3>
                  <div className="venue-address">
                  <p>1820 Boulevard de la Marina</p>
                  <p>Cotonou, Bénin</p>
                  <p>01 20 90 04 61</p>
                  <p>Marina de Cotonou</p>
                </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-flex align-items-center justify-content-end ">
              <div className="venue-details d-flex align-items-center justify-content-end gap-2">
                  <div className="location-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
