import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <FaMapMarkerAlt className="icon" />
        <h3>My Location</h3>
        <p>Los Angeles, CA</p>
      </div>
      <div className="contact-card">
        <FaPhoneAlt className="icon" />
        <h3>Phone</h3>
        <p>(424) 599-0740</p>
      </div>
      <div className="contact-card">
        <FaEnvelope className="icon" />
        <h3>Email</h3>
        <p>eunicemoon7@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactSection;
