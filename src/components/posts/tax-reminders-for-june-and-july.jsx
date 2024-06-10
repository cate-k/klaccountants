import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyEight = () => {
  // Set the page's title
  document.title = "Tax Reminders for June and July | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-eight">
          <h1>Tax Reminders for June and July</h1>
          <p className="date">June 10, 2024</p>
        </div>

        <div className="blog-content">
          <p>Here are some reminders to do in June or July each year:</p>
          <ol>
            <li>If you have a discretionary trust (commonly called, a family trust), please ensure that you sign your relevant trust distribution minutes before 30 June.</li>
            <li>If your self-managed superannuation fund (SMSF) is in pension phase, please withdraw your minimum pension amount before 30 June, to remain a complying super fund.</li>
            <li>If you are an employer with arms-length employees, your deadline for finalising their Single Touch Payroll (STP) reporting is 14 July each year, for wages in the previous financial year. This is so that your employees can quickly submit their tax returns with PAYG data that matches what their employer have reported to the ATO. If you have closely held employees (i.e, family members), then your due date is generally 30 September.</li>
            <li>Also please ensure that your {`employee's`} superannuation payment for the April to June quarter is paid by 28 July, to avoid the super guarantee charge for late payments.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyEight;