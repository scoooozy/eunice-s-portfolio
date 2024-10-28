import { useEffect, useState } from 'react';
import './Slideshow.css';

const images = [
  'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F1.png?alt=media&token=ebae488c-ca91-4a06-aac0-d9352f8d0598)',
  'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F5.png?alt=media&token=5d629ce9-3294-4f58-b510-c6a9a973e8c1)',
  'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F2.png?alt=media&token=912840ae-9e7e-48c6-8a8c-814769418c0e)',
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Wait for the fade-out transition to complete
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration

    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow">
      <div
        className={`slideshow-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        style={{ backgroundImage: images[currentImageIndex] }}
      />
    </div>
  );
};

export default Slideshow;
