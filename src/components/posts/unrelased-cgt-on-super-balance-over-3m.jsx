import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyTwo = () => {
  // Set the page's title
  document.title = "Why All the Fuss? The Controversial Unrealised Capital Gains Tax on Superannuation Balances over $3 Million | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-two">
          <h1>Why All the Fuss? The Controversial Unrealised Capital Gains Tax on Superannuation Balances over $3 Million</h1>
          <p className="date">June 10, 2025</p>
        </div>

        <div className="blog-content">
          <p>This is the proposed Division 296 tax, commencing on 1 July 2025, on individuals with a Total Superannuation Balance (TSB) over $3 million. It is expected the legislation will be re-introduced when Parliament resumes in July 2025.</p>

          <h3>How will the tax work?</h3>
          <p>Under the current proposal:</p>
          <ul>
            <li>An additional 15% tax (bringing the total tax to 30%) will apply to the earnings attributed to the portion of your TSB exceeding $3 million at the end of the financial year.</li>
            <li>The earnings includes unrealised capital gains based on your TSB increase from the previous year. This means the additional tax will apply even if you have not sold assets.</li>
          </ul>

          <h3>Why the furore?</h3>
          <p>The tax on unrealised gains is the first of its kind in Australia (and very rare even in the world). It particularly affects SMSF members with illiquid assets such as property (farms, commercial properties, unlisted property trusts, collectables, etc.) as there may not be enough cash in the fund to pay the tax each year, without selling the main asset(s).</p>

          <p>Any unrealised loss will be treated as a carried forward loss for future years to reduce future gains, not as a cash refund. Some argue that this tax is a tax on inflation, as property and collectables are a hedge against inflation.</p>

          <h3>Should I do anything now?</h3>
          <p>At this stage it may be best to be cautious until the legislation is finalised, as there may be some changes and compromises before the final version. If you withdraw your money from super before the law passes, you may not be able to re-contribute due to caps, age and eligibility limits.</p>

          <p>You should consider your overall retirement and estate planning strategy, including:</p>
          <ul>
            <li>Tax implications of transferring investments outside of superannuation (e.g, in individual names or in a discretionary trust)</li>
            <li>Capital gains tax of any realised super assets</li>
            <li>The liquidity and cashflow of your super fund to meet tax liabilities</li>
            <li>Personal circumstances and objectives</li>
            <li>If you also have foreign residency, decide how to structure your assets to be an Australian or foreign tax resident.</li>
          </ul>

          <p>In spite of the controversy surrounding this new Div 296 tax, superannuation will still continue to be a tax-effective structure for retirement savings - at least up till a point. You should consider this as part of a wider context of wealth preservation.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyTwo;