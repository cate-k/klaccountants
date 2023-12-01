import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostSixteen = () => {
  // Set the page's title
  document.title = "Some Key Takeaways from the Federal Budget of 9 May 2023 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-sixteen">
          <h1>Some Key Takeaways from the Federal Budget of 9 May 2023</h1>
          <p className="date">May 11, 2023</p>
        </div>

        <div className="blog-content">
          <p>The 2023 Federal Budget is a tame, prudent budget, addressing immediate challenges but with no long term vision on tax reform to make Australia more productive. Perhaps the biggest winner from the Budget is the ATO, with boosted funding for a tougher compliance crackdown on tax payers: $90 million in funding to the ATO and $1.2 million to Treasury to extend the Personal Income Tax Compliance Program for two years.</p>

          <p>There were some cost of living relief measures for lower income individuals, such as an increase in the Medicare levy low-income thresholds for singles, families and seniors and pensioners from 1 July 2022.</p>
          <p className="new-line"><br /></p>

          <h3>Expect a Lower Tax Refund for 2023 with the ending of the Low and Middle-Income Tax Offset</h3>
          <p>There was, however, no extension of the Low and Middle-Income Tax Offset (LMITO) which expired on 30 June 2022. In 2022 the LMITO provided eligible taxpayers earning up to $126,000 a tax offset of up to $1,500 once their tax returns were lodged. With LMITO removed, many middle income earners will have either a lower refund or more tax to pay for 2023. This will exacerbate the cost of living pressures for millions of Australians.</p>
          <p className="new-line"><br /></p>

          <h3>Small Business</h3>
          <p>There was not much joy for small business: a temporary increase in the instant asset write-off threshold to $20,000 for from 1 July 2023 until 30 June 2024. No where near as good as the full expensing for the previous year, but still better than nothing.</p>
          <p className="new-line"><br /></p>

          <h3>Superannuation</h3>
          <p>The government will proceed with the additional 15% tax on superannuation accumulation balances greater than $3 million, as previously announced. This will include a tax on unrealised gains, which is a first in tax policy.</p>

          <p>The government also confirmed a move to payday super, which would help employees receive more frequent superannuation payments, but create more administrative burdens for employers.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostSixteen;