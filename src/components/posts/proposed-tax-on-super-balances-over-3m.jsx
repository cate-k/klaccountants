import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyThree = () => {
  // Set the page's title
  document.title = "Proposed Tax on Super Balances Over $3M | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-three">
          <h1>Proposed Tax on Super Balances Over $3M</h1>
          <p className="date">December 1, 2023</p>
        </div>

        <div className="blog-content">
          <p>The government is forging ahead with its plan to tax individuals who have a superannuation member balance of over $3 million. The draft legislation is in the public consultation phase for now. If implemented, these changes will reduce the effectiveness of superannuation for members with high balances, and introduce a profound departure from the present tax system, in the form of taxing unrealised capital gains.</p>
          <p className="new-line"><br /></p>

          <h3>Who does this apply to?</h3>
          <p>Individuals whose total member balance is over $3 million will be subject to an additional 15% tax to the portion of earnings from that balance that exceeds the $3M threshold. {`"Earnings"`} is measured by the increase in the members account from 30 June of the previous year to 30 June of the present year. Contributions and withdrawals are not taken into account; however, it means that unrealised capital gains are taxed. This is a new definition of {`"earnings"`} not merely the profit earned by the fund, but it includes the unrealised increase in capital value.</p>

          <p>The member is liable for the tax, not their super fund. He or she can pay the tax personally or request their super fund to release the tax amount.</p>
          <p className="new-line"><br /></p>

          <h3>When does this commence (if legislation passes)?</h3>
          <p>From 1 July 2025.</p>
          <p className="new-line"><br /></p>

          <h3>When is the tax payable?</h3>
          <p>Within 84 days of the ATO giving the notice of assessment.</p>
          <p className="new-line"><br /></p>

          <h3>Will the $3M threshold be indexed?</h3>
          <p>No. Consider a $2M member balance today, earning 7% p.a. compounding. This balance would reach $3M in 6 years, assuming no withdrawals or contributions. The $3M includes their total super balance, so both their accumulation and pension amounts are caught by this measure.</p>
          <p className="new-line"><br /></p>

          <h3>Can I get a refund if my earnings have a negative year?</h3>
          <p>No. Negative earnings will be carried forward to offset the tax in future years, so the government will not refund notional tax on negative earnings.</p>
          <p className="new-line"><br /></p>

          <h3>What are some of the problems?</h3>
          <ul>
            <li><span className="bold">Liquidity shortfalls due to tax on unrealised gains.</span> If you have a large illiquid asset like direct property or unlisted property trusts in your super fund, you may be forced to sell in a poor market to pay a small amount of tax - if you have few liquid assets outside of your super fund to meet the liability.</li>
            <li><span className="bold">No tax refunds for negative {`"earnings"`}.</span> As your fund experiences the normal market cycle, years of positive earnings may be followed by a few years of negative {`"earnings"`}. However, there is no way to recoup the tax paid during the good years. Instead the loss in {`"earnings"`} is carried forward to offset future positive {`"earnings"`}. If the fund is in pension phase, there may then be difficulties in meeting minimum pension payments.</li>
            <li><span className="bold">You have only 84 days to pay.</span> If you have to sell a property, this may not be enough time from the marketing to settlement.</li>
          </ul>
          <p className="new-line"><br /></p>

          <h3>Be prepared now</h3>
          <p>Even though this measure has not yet been passed into law, it would be wise to review your structure and strategy with your adviser, to be well prepared for the proposed changes.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyThree;