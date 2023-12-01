import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostSeventeen = () => {
  // Set the page's title
  document.title = "10 Reasons Owning Your Home Beats Super in Retirement | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-seventeen">
          <h1>10 Reasons Owning Your Home Beats Super in Retirement</h1>
          <p className="date">May 11, 2023</p>
        </div>

        <div className="blog-content">
          <p>Download issue here: <a
              href="https://portal.wealthadviser.com.au/hubfs/Marketing-Business-and-Growth/Wealth-Adviser-Client-Newsletter/Wealth-Adviser-Issue-65.pdf?_hsmi=256166643"
              target="_blank"
              rel="noreferrer"
            >
              10 Reasons Owning Your Home Beats Super in Retirement
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostSeventeen;