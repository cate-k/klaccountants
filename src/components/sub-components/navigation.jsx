import { Link } from "react-router-dom";
import { Phone } from "react-feather";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="banner">
        <Phone className="nav-icon" />
        <span>0404 362 268 - CALL US NOW</span>

        <p>Your Trusted Tax Accountants</p>
      </div>

      <div className="nav-header">
        <Link className="home-link" to="/home">
          <img
            className="logo"
            src={require("../../styles/images/logo.png")}
            alt="KLAccountants"
          />
        </Link>

        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <p className="menu-text-button">Menu</p>
          <div className="menu-button"></div>
        </label>

        <ul className="menu">
          <li>
            <Link className="nav-link" to="/home">
              <p>Home</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about-us">
              <p>About Us</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/blog">
              <p>Blog</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/services">
              <p>Services</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/virtual-cfo-and-outsourced-accountant-plans">
              <p>Virtual CFO</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/faqs">
              <p>FAQs</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/free-resources">
              <p>Free Resources</p>
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/contact-us">
              <p>Contact Us</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;