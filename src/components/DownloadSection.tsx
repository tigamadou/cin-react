const DownloadSection: React.FC = () => {
  const handleDownload = (filePath: string) => {
    // Open the PDF in a new tab
    window.open(filePath, '_blank');
  };

  return (
    <section id="download" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="download-title">
              Documents officiels à télécharger
            </h2>
            <div className="download-separator mx-auto mb-4"></div>
            <p className="download-description">
              Accédez aux documents officiels de la Conférence Internationale sur la Nutrition. 
              Téléchargez les résumés des politiques nationales et les projets de supplémentation nutritionnelle 
              en versions française et anglaise.
            </p>
          </div>
        </div>

        {/* Document 1: Résumé de la Politique Nationale d'Alimentation et de Nutrition */}
        <div className="row mb-5 g-4 justify-content-center">
          <div className="col-6">
            <div className="download-card">
              <div className="row align-items-center">
                <div className="col-lg-6 justify-content-end">
                  <div className="brochure-container">
                    <div className="brochure">
                      <div className="brochure-cover">
                        <div className="brochure-image">
                          <img 
                            src="/documents/resume_politique_fr.png" 
                            alt="Politique Nationale d'Alimentation et de Nutrition Preview"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="download-content">
                    <h3 className="download-card-title">
                      Résumé de la Politique Nationale d'Alimentation et de Nutrition 2024-2033
                    </h3>
                    <div className="download-separator"></div>
                    <p className="download-card-description">
                      Document officiel présentant la politique nationale d'alimentation et de nutrition 
                      pour la période 2024-2033, incluant les objectifs, stratégies et actions prioritaires.
                    </p>
                    <div className="download-buttons">
                      <button 
                        className="btn btn-cta-sm" 
                        onClick={() => handleDownload('/documents/resume_politique_fr.pdf')}
                      >
                        Version Française
                      </button>
                      <button 
                        className="btn btn-cta-sm secondary" 

                        onClick={() => handleDownload('/documents/resume_polite_en.pdf')}
                      >
                        English Version
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="download-card ">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="brochure-container">
                    <div className="brochure">
                      <div className="brochure-cover">
                        <div className="brochure-image">
                          <img 
                            src="/documents/resume_programme_fr.png" 
                            alt="Projet de supplémentation nutritionnelle Preview"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="download-content">
                    <h3 className="download-card-title">
                      Résumé exécutif du projet de supplémentation nutritionnelle des 1000 premiers jours 2024-2028
                    </h3>
                    <div className="download-separator"></div>
                    <p className="download-card-description">
                      Résumé exécutif détaillant le projet de supplémentation nutritionnelle 
                      ciblant les 1000 premiers jours de vie, période cruciale pour le développement optimal de l'enfant.
                    </p>
                    <div className="download-buttons">
                      <button 
                        className="btn btn-cta-sm" 
                        onClick={() => handleDownload('/documents/resume_programme_fr.pdf')}
                      >
                        Version Française
                      </button>
                      <button 
                        className="btn btn-cta-sm secondary" 
                        onClick={() => handleDownload('/documents/resume_programme_en.pdf')}
                      >
                        English Version
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="download-card">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="brochure-container">
                    <div className="brochure">
                      <div className="brochure-cover">
                        <div className="brochure-image">
                          <img 
                            src="/agenda_2025_preview.png" 
                            alt="Conference Program Preview"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="download-content">
                    <h3 className="download-card-title">
                      Programme complet de la conférence
                    </h3>
                    <div className="download-separator"></div>
                    <p className="download-card-description">
                      Découvrez tous les détails de la Conférence Internationale sur la Nutrition. 
                      Le programme complet contient l'agenda détaillé, les informations sur les intervenants, 
                      les sessions parallèles et toutes les informations pratiques.
                    </p>
                    <button 
                      className="btn btn-cta-sm" 
                      onClick={() => handleDownload('/agenda_2025.pdf')}
                    >
                      TÉLÉCHARGER LE PROGRAMME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Document 2: Résumé exécutif du projet de supplémentation nutritionnelle */}
        <div className="row mb-5">
          
        </div>

        {/* Programme de la conférence */}
        <div className="row mt-5">
          
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
