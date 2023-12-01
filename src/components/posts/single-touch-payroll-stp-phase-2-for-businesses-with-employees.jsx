import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwo = () => {
  // Set the page's title
  document.title = "Single Touch Payroll (STP) Phase 2 for Businesses with Employees | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-two">
          <h1>Single Touch Payroll (STP) Phase 2 for Businesses with Employees</h1>
          <p className="date">January 10, 2022</p>
        </div>

        <div className="blog-content">
          <p>The {`government's`} roadmap for mandatory STP reporting Phase 2 started on 1 January 2022. The Digital Service Provider that you are using for your business (eg, Xero, Reckon, etc) would have updated their software to include these changes, or they will let you know if they have applied for a deferral for their customers.</p>

          <p>Key changes include the reporting of more specific income types and components (such as paid leave, allowances, overtime, bonuses, {`directors'`} fees), instead of a single gross amount.</p>

          <p>Some of the main benefits, according to the ATO are:</p>
          <ul>
            <li>You no longer have to send your {`employees'`} TFN declarations to the ATO.</li>
            <li>Payroll information will be shared with Services Australia to streamline their interactions with customers.</li>
            <li>You no longer need to provide separation certificates when your employees leave.</li>
          </ul>

          <p>
            More information about STP Phase 2 is available from the <a
              href="https://www.ato.gov.au/Business/Single-Touch-Payroll/Expanding-Single-Touch-Payroll-(Phase-2)/"
              target="_blank"
              rel="noreferrer"
            >
              ATO link
            </a>
            .
          </p>

          <p>Note that STP reporting is required for businesses with employees. It is not required for self-employed sole traders with no other employees.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwo;