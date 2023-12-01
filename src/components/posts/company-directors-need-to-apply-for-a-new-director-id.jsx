import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostFour = () => {
  // Set the page's title
  document.title = "Company Directors Need to Apply for a New Director ID | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-four">
          <h1>Company Directors Need to Apply for a New Director ID</h1>
          <p className="date">January 10, 2022</p>
        </div>

        <div className="blog-content">
          <p>The ATO has established the Australian Business Registry Services (ABRS) to streamline how you register, view, and maintain your business information with the government. It brings together various government and ASIC registers in managing and accessing information.</p>

          <p>A director ID is a unique identifier which a director will apply for once and keeps indefinitely, even if that person is no longer a director or moves overseas. The ID helps to prevent fraudulent use of director identities and makes it easier for external administrators and regulators to trace {`directors'`} relationships with companies.</p>

          <p>This means that all directors of companies and corporate trustees must apply for a director ID.</p>

          <p>Existing directors have until 30 November 2022 to apply. From 5 April 2022, new directors must apply before they are appointed.</p>

          <p>The easiest way to apply for your director ID is online at ABRS using <a
              href="https://www.abrs.gov.au/director-identification-number/apply-director-identification-number"
              target="_blank"
              rel="noreferrer"
            >
              myGovID
            </a>
            .
          </p>

          <p>The above ABRS website has more detailed information on the Director ID.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostFour;