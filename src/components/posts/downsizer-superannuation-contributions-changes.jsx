import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostEight = () => {
  // Set the page's title
  document.title = "Downsizer Superannuation Contributions Changes from 1 January 2023 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-eight">
          <h1>Downsizer Superannuation Contributions Changes from 1 January 2023</h1>
          <p className="date">January 10, 2023</p>
        </div>

        <div className="blog-content">
          <p>From 1 January 2023, people aged 55 years and over are eligible to make downsizer contributions into super from the sale of their home, up to $300,000 per person (ie, $600,000 per couple). These contributions will not count towards their concessional or non-concessional super contributions caps.</p>

          <p>To satisfy the eligibility criteria:</p>
          <ol>
            <li>Your home must be in Australia, and have been owned by you or your spouse for at least 10 years and the sale must be exempt or partially exempt from capital gains tax.</li>
            <li>You have not previously made a downsizer contribution.</li>
            <li>You must provide your super fund a Downsizer contribution form either before or at the time of making your contribution.</li>
            <li>Your downsizer contribution must be within 90 days of the settlement of your property.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostEight;