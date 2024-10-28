import "./Contact.css";
import ContactSection from "../../components/ContactSection/ContactSection";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-intro">
        <h1>Contact Information</h1>
        <h2>If you have any questions or interests, feel free to reach out anytime!</h2>
      </section>
      <ContactSection/>
    </div>
  );
};

export default Contact;
