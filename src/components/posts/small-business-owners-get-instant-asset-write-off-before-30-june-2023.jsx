import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirteen = () => {
  // Set the page's title
  document.title = "Small Business Owners: Get your Instant Asset Write-Off Before the 30 June 2023 Deadline! | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirteen">
          <h1>Small Business Owners: Get your Instant Asset Write-Off Before the 30 June 2023 Deadline!</h1>
          <p className="date">March 10, 2023</p>
        </div>

        <div className="blog-content">
          <p>For small businesses, the instant asset write-off (temporary full expensing) rules end this June 2023. These measures were introduced during the pandemic to support businesses by encouraging reinvestment back into the business. This has saved businesses significant amounts in tax and administrative costs.</p>

          <p>From 1 July businesses will need to depreciate any asset over $1,000 instead of immediately writing them off as a deduction.</p>

          <p>If, however, cashflow is a challenge right now and you {`don't`} need the deduction to lower your tax, then the purchase can be deferred. {`It's`} also important to consider supply chain issues in case of delays in shipment, as the asset must be installed and ready to use by 30 June 2023 for you to claim the full expensing.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirteen;