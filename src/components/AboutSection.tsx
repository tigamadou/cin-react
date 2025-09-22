
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="display-4 fw-bold mb-4"><span className="text-yellow">#</span>cin2025</div>
            <p className="lead mb-3">
              La Conférence Internationale sur la Nutrition est un
              événement stratégique organisé par le Gouvernement de
              la République du Bénin.
            </p>
            <p className="lead">
              Cette conférence rassemble des leaders internationaux,
              des experts en nutrition, des partenaires techniques et
              financiers pour discuter des solutions innovantes et des
              investissements stratégiques nécessaires pour lutter
              contre la malnutrition et promouvoir le développement
              durable en Afrique.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-end gap-3 mb-2" >
              <div>
                <div className="feature-icon mb-3">
                  <i className="bi bi-arrow-repeat fs-1" style={{color: 'var(--cin-yellow)'}}></i>
                </div>
              </div>
              <div style={{borderBottom: '1px solid #000'}}>
                <h4 className="fw-bold mb-1">Nouveaux Sujets</h4>
                <p className="lead">
                  Découvrez les dernières tendances et innovations dans le domaine de la nutrition 
                  et du développement durable.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3 mb-2" >
              <div>
                <div className="feature-icon mb-3">
                  <i className="bi bi-mic fs-1" style={{color: 'var(--cin-yellow)'}}></i>
                </div>
              </div>
              <div style={{borderBottom: '1px solid #000'}}>
                <h4 className="fw-bold mb-1">Intervenants Clés</h4>
                <p className="lead">
                  Écoutez les experts internationaux et les leaders gouvernementaux partager leurs 
                  expériences et visions.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3 mb-2" >
              <div>
                <div className="feature-icon mb-3">
                  <i className="bi bi-headphones fs-1" style={{color: 'var(--cin-yellow)'}}></i>
                </div>
              </div>
              <div style={{borderBottom: '1px solid #000'}}>
                <h4 className="fw-bold mb-1">Support Multilingue</h4>
                <p className="lead">
                  La conférence est disponible en français et en anglais pour assurer une 
                  participation internationale optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
