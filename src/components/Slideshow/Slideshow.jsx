import { useEffect, useState } from 'react';
import './Slideshow.css';

const slides = [
  {
    image: 'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F1.png?alt=media&token=ebae488c-ca91-4a06-aac0-d9352f8d0598)',
    title: 'Traditional Korean Art Meets Modern Expression',
    description: 'Exploring the rich heritage of Korean art through contemporary interpretations and traditional techniques'
  },
  {
    image: 'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F5.png?alt=media&token=5d629ce9-3294-4f58-b510-c6a9a973e8c1)',
    title: 'Cultural Identity Through Art',
    description: 'Bridging Eastern and Western artistic traditions to create unique perspectives and meaningful narratives'
  },
  {
    image: 'url(https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F2.png?alt=media&token=912840ae-9e7e-48c6-8a8c-814769418c0e)',
    title: 'Mixed Media Explorations',
    description: 'Pushing boundaries through diverse materials and techniques to express contemporary themes'
  }
];

const Slideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setSlideDirection('next');
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setSlideDirection(index > currentSlideIndex ? 'next' : 'prev');
    setTimeout(() => {
      setCurrentSlideIndex(index);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="slideshow">
      <div
        className={`slideshow-image ${isTransitioning ? 'slide-out' : 'slide-in'} ${slideDirection}`}
        style={{ backgroundImage: slides[currentSlideIndex].image }}
      />
      <div className={`slideshow-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <h2 className="slideshow-title">{slides[currentSlideIndex].title}</h2>
        <p className="slideshow-description">{slides[currentSlideIndex].description}</p>
      </div>
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
