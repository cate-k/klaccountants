import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostFive = () => {
  // Set the page's title
  document.title = "End of Financial Year 2022 Reminders | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-five">
          <h1>End of Financial Year 2022 Reminders</h1>
          <p className="date">June 7, 2022</p>
        </div>

        <div className="blog-content">
          <p>{`Here's`} a quick checklist of reminders for you to consider doing (as applicable) before the end of the Australian tax year, 30 June 2022:</p>
          <ol>
            <li>
              Claim as tax deductions:
              <ul>
                <li>Superannuation - make a personal concessional contribution (up to a total of $27,500 for the year).</li>
                <li>Purchase plant and equipment, supplies and any items you need for your business or work, especially before supply chain shortages bite later this year.</li>
                <li>Prepay expenses such as interest, insurance or subscriptions.</li>
              </ul>
            </li>
            <li>If you have a SMSF, remember to withdraw your minimum pension before 30 June.</li>
            <li>The company tax rate is 25% from the 2021-22 year onwards, provided the turnover is under $50 million and any passive income earned cannot exceed 80%.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostFive;