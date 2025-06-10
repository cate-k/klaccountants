import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyFour = () => {
  // Set the page's title
  document.title = "Tax Changes from 1 July 2025 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-four">
          <h1>Tax Changes from 1 July 2025</h1>
          <p className="date">June 10, 2025</p>
        </div>

        <div className="blog-content">
          <h3>For Individuals</h3>
          <ul>
            <li><span className="bold">From 1 July 2025, you can no longer claim an income tax deduction for ATO interest charges</span> on unpaid tax liabilities incurred from the 2025-2026 year onwards. Any ATO interest charges incurred prior to 1 July 2025 remains deductible for the 2024-2025 and earlier income years.</li>
            <li><span className="bold">The ATO is cracking down on work-related expenses</span> (including work from home deductions), car-related travel claims, and investment property expenses. When making a claim, please ensure that you have paid for the expense yourself, that it is directly related to your income and that it is not private in nature. Also have documentation or receipts in case you are asked to justify the expense.</li>
          </ul>

          <h3>For Small Businesses</h3>
          <ul>
            <li><span className="bold">The $20,000 instant asset write-off</span> ends on 30 June 2025. It will revert to $1,000 per asset from 1 July 2025. Labor, however, had earlier promised to extend the $20,000 write-off threshold by another year to 30 June 2026 if it was re-elected. While winning the election and technically legislating the extension, there had been no funding allocated for this in the 2025 federal budget. This creates a dilemma.</li>
            <li>So if you need equipment now, buy it quickly and have it installed and ready to use by 30 June 2025. If you wait till later, there is no guarantee that the $20,000 write-off will be certain. If you can afford to wait, stay informed about government announcements later in the tax year, to give greater clarity.</li>
          </ul>

          <h3>Superannuation</h3>
          <ul>
            <li>The Superannuation Guarantee rate for employers will increase from 11.5% to 12% on 1 July 2025.</li>
            <li>The Labor {`government's`} election win means that its plan to double the tax rate on super funds with a balance over $3 million per member from 15% to 30% will proceed. This plan (known as the Division 296 tax) includes the controversial tax on unrealised capital gains. This has not become law yet, as the new legislation will be re-introduced to both houses of parliament at the end of July. If it passes, more details will be released during the course of the year. Currently this proposed law affects you if your member balance is over $3 million. You may consider strategies on how to structure your super and non-super investments (including the use of discretionary trusts), but this should be part of an overall retirement strategy.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyFour;