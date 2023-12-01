import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostOne = () => {
  // Set the page's title
  document.title = "A Reminder on Superannuation Contributions Cap for 2021-2022 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-one">
          <h1>A Reminder on Superannuation Contributions Cap for 2021-2022</h1>
          <p className="date">January 10, 2022</p>
        </div>

        <div className="blog-content">
          <p>Please remember the following:</p>
          <ul>
            <li>You can make concessional contributions up to $27,500 before 30 June 2022 (for your combined employer and personal contributions).</li>
            <li>You can make non-concessional contributions up to $110,000 by 30 June 2022.</li>
            <li>If you were under 67 at 1 July 2021, you can contribute under the non-concessional contribution cap bring-forward rule up to $330,000 by 30 June 2022 (if you {`haven't`} triggered this rule in the previous 2 years and if your total super balance was under $1.7M).</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostOne;