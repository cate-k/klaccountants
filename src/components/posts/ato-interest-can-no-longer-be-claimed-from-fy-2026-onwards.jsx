import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtySeven = () => {
  // Set the page's title
  document.title = "ATO Interest Can No Longer Be Claimed from FY 2026 Onwards | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-seven">
          <h1>ATO Interest Can No Longer Be Claimed from FY 2026 Onwards</h1>
          <p className="date">March 2, 2026</p>
        </div>

        <div className="blog-content">
          <p>From 1 July 2025, ATO interest charges, including the General Interest Charge and Shortfall Interest Charge, are no longer tax-deductible for any taxpayer. This change applies to all income years beginning on or after 1 July 2025, including those for businesses with substituted accounting periods.</p>

          <p>The final year in which such interest could be claimed as a deduction was the 2024-25 financial year. So this means that for the financial year 2026 onwards, ATO interest charges are no longer deductible.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtySeven;