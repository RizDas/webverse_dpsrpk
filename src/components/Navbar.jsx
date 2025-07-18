import "/src/components/Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../src/assets/logo-full.png" alt="Auraluxe" id="logo" />
        </Link>
      </div>

      <div id="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="navbar-links nav-links" id="nav-links">
        <Link to="/about-us/">About Us</Link>

        <div className="dropdown">
          <Link to="/products">Products &nbsp;</Link>
          <div className="dropdown-content">
            <a href="/product.html?id=1">1</a>
            <a href="/product.html?id=2">2</a>
          </div>
        </div>

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
