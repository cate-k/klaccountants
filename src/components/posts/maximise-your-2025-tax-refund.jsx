import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyFive = () => {
  // Set the page's title
  document.title = "Maximise Your 2025 Tax Refund | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-five">
          <h1>Maximise Your 2025 Tax Refund</h1>
          <p className="date">June 10, 2025</p>
        </div>

        <div className="blog-content">
          <p>You can maximise your tax refund each year by knowing what deductions you can claim:</p>

          <h3>For Individuals</h3>
          <ul>
            <li>Work-related expenses - memberships, subscriptions, tools, protective clothing, etc.</li>
            <li>Self-education expenses to maintain or improve your income-earning skill</li>
            <li>Work from home expenses - claim via the fixed cost method or actual cost method (phone, internet, computer consumables, stationery)</li>
            <li>Car travel expenses - cents per km method or log book method (fuel, insurance, registration, servicing, interest, depreciation)</li>
            <li>Deductions on investment property - interest, land tax, council and water rates, insurance, repairs and maintenance, depreciation. We can refer you to obtain an ATO compliant depreciation report for your property.</li>
            <li>Deductions on share investments - margin loan interest, subscriptions.</li>
            <li>Donations to charity</li>
          </ul>

          <h3>For Business Owners</h3>
          <ul>
            <li>Depreciation on assets</li>
            <li>Bank interest on loans</li>
            <li>Marketing and advertising</li>
            <li>Wages and superannuation</li>
            <li>Accounting and professional advice</li>
            <li>Software and subscriptions</li>
            <li>Materials and tools</li>
            <li>Business travel, including motor vehicles</li>
          </ul>

          <h3>How should I keep my records?</h3>
          <p>You can use a digital or paper filing system to store:</p>
          <ul>
            <li>Invoices and receipts</li>
            <li>Bank statements, dividend and share trading statements, rental property statements, etc.</li>
            <li>Logbook for your motor vehicle, diary entries for work-from-home hours</li>
          </ul>

          <h3>ATO Compliance</h3>
          <ul>
            <li>Keep your tax records for 5 years generally from the time you lodge your return.</li>
            <li>The ATO is focusing compliance on: work-related expenses, work-from-home claims, rental property deductions, crypto trading and side hustle income (e.g, freelancing and the gig economy).</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyFive;