import { useState, useEffect } from 'react';
import {
  Loader,
  Navigation,
  HeroSection,
  AboutSection,
  SpeakersSection,
  ScheduleSection,
  DownloadSection,
  VenueSection,
  // AccommodationSection,
  StatsSection,
  RegistrationSection,
  MapSection,
  Footer
} from './components';
import type { TimeLeft } from './types';
import { speakers, scheduleByDay } from './data/conferenceData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const eventDate = new Date('2025-09-27T10:00:00').getTime();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);


  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-vh-100">
      <Navigation />
      <HeroSection timeLeft={timeLeft} />
      <AboutSection />
      <SpeakersSection speakers={speakers} />
      <ScheduleSection scheduleByDay={scheduleByDay} />
      <VenueSection />
      <DownloadSection />
      <StatsSection />
      <RegistrationSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;