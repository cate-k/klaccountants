import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyFour = () => {
  // Set the page's title
  document.title = "Small Business $20k Instant Asset Write-Off Until 30 June 2024 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-four">
          <h1>Small Business $20k Instant Asset Write-Off Until 30 June 2024</h1>
          <p className="date">December 1, 2023</p>
        </div>

        <div className="blog-content">
          <p>The government is encouraging small businesses to invest in more capital assets to grow. If your small business has an annual turnover of under $10 million, your business is eligible for the $20,000 instant asset write-off for this financial year. This is on a per asset basis so you can write off multiple assets. Assets valued at over $20,000 that cannot be immediately deducted can be placed into the small business simplified depreciation pool and depreciated at 15% in the first year, and 30% for subsequent years.</p>

          <p>Unless the scheme is extended, it is expected that from 1 July 2024, the write-off threshold will revert to $1,000.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyFour;