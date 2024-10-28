import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <nav>
      <div>
        <p className="logo">E.M Portfolio</p>
      </div>
      <div>
        <ul className="nav-list">
          <li className={`list-item ${currentPage === "/" ? "active" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`list-item ${currentPage === "/portfolio" ? "active" : ""}`}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={`list-item ${currentPage === "/contact" ? "active" : ""}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired
}

export default Navbar;
