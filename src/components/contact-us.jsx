import { useEffect } from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const ContactUs = () => {
  // Set the page's title
  document.title = "Contact Us | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content contact-us">
        <div className="page-banner contact-us-banner">
          <h1>Contact Us</h1>
          <p>Send us a quick message and {`we'll`} get right back to you</p>
        </div>

        <img
          className="location-img"
          src={require("../styles/images/470-st-kilda-road.jpg")}
          alt=""
        />

        <p>KL Accountants Pty Ltd</p>
        <br />

        <p className="contact-heading">Office Address</p>
        <p>Ground Floor</p>
        <p>470 St Kilda Road</p>
        <p>Melbourne VIC 3004, Australia</p>
        <br />

        <p>Tel: 0404 362 268</p>

        <p className="google-maps">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.813198930783!2d144.9751125222932!3d-37.841258793495996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6693aa464baf9%3A0xbd7c4b011b939aeb!2s470%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004!5e0!3m2!1sen!2sau!4v1682583852144!5m2!1sen!2sau"
            className="map"
            allowFullScreen="allowfullscreen"
          >
          </iframe>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;