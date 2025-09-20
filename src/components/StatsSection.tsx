import { useState, useEffect, useRef, useMemo } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = useMemo(() => [
    {
      id: 1,
      icon: "bi-globe",
      number: 72,
      label: "PAYS"
    },
    {
      id: 2,
      icon: "bi-mic",
      number: 38,
      label: "INTERVENANTS"
    },
    {
      id: 3,
      icon: "bi-file-text",
      number: 126,
      label: "PROGRAMMES"
    },
    {
      id: 4,
      icon: "bi-person-badge",
      number: 495,
      label: "PARTICIPANTS"
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        const increment = stat.number / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const newCount = Math.min(Math.floor(increment * currentStep), stat.number);
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = newCount;
            return newCounts;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible, stats]);

  return (
    <section id="stats" className="stats-section" ref={sectionRef}>
      <div className="stats-background">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=400&fit=crop&blur=20" 
          alt="Conference Background"
          className="stats-bg-image"
        />
        <div className="stats-overlay"></div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={stat.id} className="stat-item">
                  <div className="stat-icon">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <div className="stat-number">{counts[index]}</div>
                  <div className="stat-label">{stat.label}</div>
                  {index < stats.length - 1 && <div className="stat-separator"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
