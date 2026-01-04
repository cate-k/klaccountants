import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyEight = () => {
  // Set the page's title
  document.title = "Meals - What Can and Can't Be Claimed | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-eight">
          <h1>Meals - What Can and {`Can't`} Be Claimed</h1>
          <p className="date">March 2, 2026</p>
        </div>

        <div className="blog-content">
          <p>Sometimes it can be confusing to know when meals can be tax deductible by the ATO and when they {`can't`}.</p>

          <p>Meals are not deductible if the travel does not involve an overnight stay for work or business. So meals incurred on day trips to visit customers, suppliers, entertainment and meetings are not deductible.</p>

          <p>If you stay away from home overnight for work or business, then claiming meals are allowed for breakfast, lunch and dinner that fall within the actual travel period. For example, if you leave at 10am Wednesday and return home at 3pm Thursday, you can claim reasonable amounts for lunch and dinner on Wednesday and breakfast and lunch on Thursday.</p>

          <p>To claim meal expenses without keeping detailed receipts, the amount spent must be within the {`ATO's`} reasonable allowance rates for the relevant tax year. These rates vary depending on the location (e.g, high-cost cities in Australia or overseas) and the {`employee's`} salary.</p>

          <p>For employees earning $148,250 or less annually, the reasonable allowance rates for 2025-2026 are $34.75 for breakfast, $39.10 for lunch, $66.65 for dinner, and $24.50 for incidentals in high-cost locations. You cannot combine these amounts across meals; each meal must be considered separately.</p>

          <p>For travel lasting six or more consecutive nights, a travel diary is mandatory, and you must record business activities, dates, places, and the proportion of time spent on business versus personal activities. Even for shorter trips, maintaining records is strongly recommended to support your claim.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyEight;