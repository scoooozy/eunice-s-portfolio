import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div>
        <p className="logo">E.M Portfolio</p>
      </div>
      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className={`list-item ${currentPage === "/" ? "active" : ""}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={`list-item ${currentPage === "/portfolio" ? "active" : ""}`}>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          </li>
          <li className={`list-item ${currentPage === "/contact" ? "active" : ""}`}>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Navbar;
