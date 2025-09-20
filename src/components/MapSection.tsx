const MapSection: React.FC = () => {
  return (
    <section id="map" className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d2.3936833!3d6.3495485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235510b9e3ce5d:0xe809d8dda0da17ee!2sSofitel+Cotonou+Marina+Hotel+%26+Spa!5e0!3m2!1sen!2sbj!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sofitel Cotonou Marina Hotel & Spa - CIN 2025 Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
