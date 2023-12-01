import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="col-one">
          <h2>Contact Us</h2>
          <p>{`Don't`} hesistate to contact us.</p>
          <p>KL Accountants Pty Ltd</p>
          <br />

          <p className="footer-heading">Office Address</p>
          <p>Ground Floor,</p>
          <p>470 St Kilda Road,</p>
          <p>Melbourne VIC 3004, Australia</p>
          <br />

          <p className="footer-heading">Phone</p>
          <p>0404 362 268</p>
          <br />

          <div className="footer-link">
            <Link to="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/KL-Accountants-432814013868876/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://www.linkedin.com/company/kl-accountants-pty-ltd/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="col-two">
          <img
            className="tax-badge"
            src={require("../../styles/images/tax-practitioners-board-logo.png")}
            alt="Tax Practitioners Board"
          />
          <h2>Tax Agent</h2>
          <p>25620586</p>
          <p>Tax is a complicated matter. It can cause big problems if you ignore it. Let us help you!</p>

          <div className="footer-badges">
            <img
              className="xero-badge"
              src={require("../../styles/images/xero-badge.png")}
              alt="Xero Certified Advisor"
            />

            <img
              className="quickbooks-badge"
              src={require("../../styles/images/quickbooks-platinum-tier-badge.png")}
              alt="QuickBooks Platinum Tier"
            />
          </div>

          <div className="bark-badges">
            <a
              href="https://www.bark.com/en/au/company/kl-accountants-pty-ltd/wygZR/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bark-badge"
                src={require("../../styles/images/bark-badge-one.png")}
                alt="KLAccountants Pty Ltd"
              />
            </a>

            <a
              href="https://www.bark.com/en/au/company/kl-accountants-pty-ltd/wygZR/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="bark-badge"
                src={require("../../styles/images/bark-badge-two.png")}
                alt="KLAccountants Pty Ltd"
              />
            </a>
          </div>
        </div>
        <br />
      </div>

      <div className="footer-year">
        <p>&copy; 2017 - {new Date().getFullYear()} KL Accountants. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;