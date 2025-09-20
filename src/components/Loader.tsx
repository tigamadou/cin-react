import { useEffect } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const preloadAssets = async () => {
      const assets = [
        '/logo-cin.jpeg',
        '/agenda_2025_preview.png',
        '/agenda_2025.pdf'
      ];

      const loadAsset = (src: string): Promise<void> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if one asset fails
          img.src = src;
        });
      };

      // Load all assets
      try {
        await Promise.all(assets.map(loadAsset));
        
        // Small delay to show completion
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } catch (error) {
        console.error('Error loading assets:', error);
        // Still complete loading even if there's an error
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    };

    preloadAssets();
  }, [onLoadingComplete]);

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
