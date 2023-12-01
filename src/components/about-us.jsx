import { useEffect } from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const AboutUs = () => {
  // Set the page's title
  document.title = "About Us | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner about-us-banner">
          <h1>About Us</h1>
        </div>

        <h2>Our Core Values</h2>
        <p>We are committed to get you the best result with trust and integrity.</p>

        <p>We are committed to respond to you in a timely and accurate way and at an affordable price.</p>

        <div className="page-divider"></div>

        <h2>About Us</h2>
        <p>We specialise in accounting, tax, business and advice services. With a network of highly skilled alliance partners, we provide a comprehensive {`'one-stop shop'`} of financial services.</p>

        <p>We do this by:</p>
        <ul>
          <li>Guiding you through each step with education and advice</li>
          <li>Listening to you and regularly communicating with you</li>
          <li>Advising you on the most effective strategies and structures</li>
          <li>Being authentic with you and transparent with fees.</li>
        </ul>

        <p>Call us on <span className="number">0404 362 268</span> for a friendly chat. {`We'd`} love to develop a long term relationship with you and your family!</p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;