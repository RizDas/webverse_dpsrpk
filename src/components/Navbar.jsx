import "/src/components/Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../media/starscope-logo.png" alt="Auraluxe" id="logo" />
        </Link>
      </div>

      <div id="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="navbar-links nav-links" id="nav-links">
        \<Link to="/tours">Tours</Link>
        <Link to="/our-vision/">Our Vision</Link>
        <Link to="/contact/">Contact Us</Link>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
