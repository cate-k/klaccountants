import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirty = () => {
  // Set the page's title
  document.title = "Super Charging Your Retirement Balance Before Retirement or Before Turning 75 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty">
          <h1>Super Charging Your Retirement Balance Before Retirement or Before Turning 75</h1>
          <p className="date">December 4, 2024</p>
        </div>

        <div className="blog-content">
          <p>If you want to rapidly put money into your superannuation fund before retiring, or before turning 75 when {`you're`} retired, here are two ways:</p>
          <p className="new-line"><br /></p>

          <h3>Downsizer Super Contribution</h3>
          <p>Anyone aged over 55 can make a Downsizer Super Contribution from the sale of their home of up to $300,000 per person. If {`you're`} downsizing your home in your older years, you can contribute up to $600,000 combined for a couple into super, even if you have maxed out your existing caps. You must have owned your home for at least 10 years, and must make the contribution within 90 days of selling their home.</p>

          <p>If you are aged 55, you may still have 10 years until retirement, so the money is locked up in super for 10 years before you can access it. You may wish to save this strategy for later and use some of your existing non-concessional contribution limits in the meantime. For those already retired, this money is available at any time.</p>
          <p className="new-line"><br /></p>

          <h3>Bring Forward Your Non-Concessional Contributions in the Year Before Turning 75</h3>
          <p>You do not need to meet the work test requirements to make a non-concessional contribution into superannuation (i.e, contribute from your after tax money).</p>

          <p>{`Let's`} say you turn 75 in the 2025-2026 year, and {`let's`} assume you {`haven't`} contributed more than the normal non-concessional limits during the past 3 years. In the current 2024-2025 year, you can bring forward the next 2 years and contribute up to a maximum of $360,000 into superannuation before 30 June 2025.</p>

          <p>Note that you cannot trigger the bring forward rule in the financial year (2025-2026) that you turn 75. Be aware, however, if your total super balance has previously maxed out your caps in earlier years, then you are not eligible to make any more non-concessional contributions. So this strategy will not be available if your caps have been used up earlier.</p>
          <p className="new-line"><br /></p>

          <h3>After Turning 75</h3>
          <p>Generally if you are over 75, the only contributions you can make are:</p>
          <ul>
            <li>Employer contributions from your work, and</li>
            <li>The Downsizer Contribution mentioned above.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirty;