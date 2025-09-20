const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="download-brochure">
              <div className="brochure-container">
                <div className="brochure">
                  <div className="brochure-cover">
                    <div className="brochure-image">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                        alt="Conference Brochure"
                      />
                    </div>
                    <div className="brochure-text">
                      <span className="brochure-title">CIN </span>
                      <span className="brochure-year">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="download-content">
              <h2 className="download-title">
                Téléchargez le programme complet de la conférence
              </h2>
              <div className="download-separator"></div>
              <p className="download-description">
                Découvrez tous les détails de la Conférence Internationale sur la Nutrition. 
                Le programme complet contient l'agenda détaillé, les informations sur les intervenants, 
                les sessions parallèles et toutes les informations pratiques pour participer à cet événement exceptionnel.
              </p>
              <button className="download-btn">
                TÉLÉCHARGER PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
