import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <FaMapMarkerAlt className="icon" />
        <h3>My Location</h3>
        <p>1234 Beverly Hills, CA</p>
      </div>
      <div className="contact-card">
        <FaPhoneAlt className="icon" />
        <h3>Phone</h3>
        <p>(123) 456-7890</p>
      </div>
      <div className="contact-card">
        <FaEnvelope className="icon" />
        <h3>Email</h3>
        <p>info@example.com</p>
      </div>
    </div>
  );
};

export default ContactSection;
