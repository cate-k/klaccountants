import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostFourteen = () => {
  // Set the page's title
  document.title = "The Proposed Government Changes to Superannuation for Balances over $3 Million | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-fourteen">
          <h1>The Proposed Government Changes to Superannuation for Balances over $3 Million</h1>
          <p className="date">March 10, 2023</p>
        </div>

        <div className="blog-content">
          <p>Superannuation is the big pot of gold that governments salivate over. As the years go by the rules keep changing in favour of the government. Unfortunately we just have to deal with it and plan as best as we can. That being said, superannuation is still a good concessionally tax vehicle to save for retirement, compared to other alternatives. As rules change so do the strategies to mitigate these.</p>

          <p>So far the current federal government has announced the following changes to commence from 1 July 2025, provided they win the next election:</p>
          <ol>
            <li>Super accumulation balances greater than $3m will be taxed at 30%, an increase from the current 15%. This $3m will not be indexed.</li>
            <li>The $3m refers to an individual {`member's`} total balance across multiple super funds.</li>
            <li>There will be three tax rates for earnings in superannuation:</li>
            <table className="blog-post-table">
              <tr>
                <th>Member Balance</th>
                <th>Tax Rate</th>
              </tr>
              <tr>
                <td>Up to $1.7m in retirement phase</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Amounts up to $3m in accumulation phase</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Over $3m in accumulation phase</td>
                <td>30%</td>
              </tr>
            </table>
            <li>The current 1/3 CGT discount on the sale of assets held for over 12 months will be retained, for balances under $3m. </li>
            <li>The 30% tax will include CGT on realised and unrealised capital gains. This is a departure from normal tax policy on only realised gains, as it will include a {`'mark-to-market'`} assessment each year for unrealised gains.</li>
            <li>Negative earnings can be carried forward to offset future taxes.</li>
          </ol>
          <p className="new-line"><br /></p>

          <h3>The Liquidity Challenge for Taxing Unrealised Gains</h3>
          <p>Many questions are still unanswered as the details have yet to be worked out, such as the basis for valuation on property assets, unlisted shares, and what is the treatment of unrealised losses. Also concerning is that it sets a precedent on taxing unrealised gains for assets outside of superannuation, just as there is some debate in the US about taxing unrealised gains on property, etc.</p>

          <p>For super funds with large, illiquid assets like property, the challenge is whether there is enough cash to pay for annual taxes that includes unrealised capital growth. Investors can pay this from another superannuation fund that is more liquid or from assets outside of superannuation - personally or from their discretionary trust.</p>
          <p className="new-line"><br /></p>

          <h3>Conclusion</h3>
          <p>It is recommended to get advice if you have over $3m in superannuation or are likely to have over $3m by 1 July 2025. These changes will be implemented in the 2025-2026 tax year, with the tax assessments and first tax payable occurring in 2026-2027.</p>

          <p>Much can change in the meantime, as there is a long way to go in the politics. For people with over $3m in superannuation,  some assets could be transferred to a family trust or investment company, or to the super of a low-balance spouse, or invested more in the family home. There are a range of strategies to consider and to plan ahead of time, particularly closer to 2025 when more definite details emerge.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostFourteen;