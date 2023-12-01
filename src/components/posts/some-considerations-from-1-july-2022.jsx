import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostSix = () => {
  // Set the page's title
  document.title = "Some Considerations from 1 July 2022 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-six">
          <h1>Some Considerations from 1 July 2022</h1>
          <p className="date">June 7, 2022</p>
        </div>

        <div className="blog-content">
          <ol>
            <li>If you are an employer with 19 or less employees, their STP (Single Touch Payroll) finalisation is due by 14 July 2022. If some of your employees are family members, then their STP finalisation is due by 30 September.</li>
            <li>The temporary 50% reduction in superannuation minimum drawdown requirements for account based pensions and similar products has been extended to 30 June 2023.</li>
            <li>From 1 July 2022, people aged 67 to 74 will no longer need to meet the work test when making non-concessional or salary-sacrificed superannuation contributions, to allow older Australians to save in retirement. If you are under age 75, you can also bring forward up to three times the annual general cap (ie, up to $330,000). Note that the above does not apply to personal concessional (ie, deductible) contributions for people aged 67 to 74, where the work test still applies.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostSix;