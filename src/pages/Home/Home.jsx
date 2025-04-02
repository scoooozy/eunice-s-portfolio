import { Link } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <Slideshow />
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to My Creative Journey</h2>
            <p>
              As a Korean-American artist, I blend traditional Eastern artistry with contemporary Western influences. My work explores cultural identity, heritage, and personal narratives through various mediums - from traditional Minhwa paintings to modern mixed media pieces. Each artwork tells a story of cultural bridging and artistic exploration.
            </p>
            <Link to="/portfolio" className="cta-button">
              View My Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Featured Works</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F4.png?alt=media&token=4447d481-01dc-44ad-9178-cbe90b18f3f6"
                alt="Traditional Korean Art"
                loading="lazy"
              />
              <div className="featured-overlay">
                <h3>Traditional Korean Art</h3>
                <p>A modern interpretation of Korean writing instruments in Minhwa style, celebrating cultural heritage through vibrant colors and symbolic elements</p>
              </div>
            </div>
            <div className="featured-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F7.png?alt=media&token=600953f8-e302-4324-b7fe-3c22fbe4ac75"
                alt="Identity Exploration"
                loading="lazy"
              />
              <div className="featured-overlay">
                <h3>Identity Exploration</h3>
                <p>Mixed media piece exploring the complexity of cultural identity, blending traditional Korean motifs with contemporary artistic expression</p>
              </div>
            </div>
            <div className="featured-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/more-task.appspot.com/o/images%2F15.png?alt=media&token=7252a480-f2d4-4407-b89e-3010942cfa1b"
                alt="Geometric Art"
                loading="lazy"
              />
              <div className="featured-overlay">
                <h3>Geometric Art</h3>
                <p>Precision meets creativity in this paper folding series, demonstrating the harmony between mathematical patterns and artistic intuition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
