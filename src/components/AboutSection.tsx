
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h1 className="display-6 fw-bold mb-4 text-dark">#cin2025</h1>
            <p className="lead text-muted mb-3">
              La Conférence Internationale sur la Nutrition est un événement stratégique organisé par le 
              Gouvernement de la République du Bénin.
            </p>
            <p className="text-muted">
              Cette conférence rassemble des leaders internationaux, des experts en nutrition, des partenaires 
              techniques et financiers pour discuter des solutions innovantes et des investissements stratégiques 
              nécessaires pour lutter contre la malnutrition et promouvoir le développement durable en Afrique.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-arrow-repeat fs-1" style={{color: 'var(--cin-yellow)'}}></i>
              </div>
              <h4 className="fw-bold mb-3 text-dark">Nouveaux Sujets</h4>
              <p className="text-muted">
                Découvrez les dernières tendances et innovations dans le domaine de la nutrition 
                et du développement durable.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-mic fs-1" style={{color: 'var(--cin-yellow)'}}></i>
              </div>
              <h4 className="fw-bold mb-3 text-dark">Intervenants Clés</h4>
              <p className="text-muted">
                Écoutez les experts internationaux et les leaders gouvernementaux partager leurs 
                expériences et visions.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-headphones fs-1" style={{color: 'var(--cin-yellow)'}}></i>
              </div>
              <h4 className="fw-bold mb-3 text-dark">Support Multilingue</h4>
              <p className="text-muted">
                La conférence est disponible en français et en anglais pour assurer une 
                participation internationale optimale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
