import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: eunicemoon7@gmail.com</p>
          <p>Phone: (424) 599-0740</p>
        </div>
        
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
          <ul className="nav-list">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="list-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Eunice Eunseo Moon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 