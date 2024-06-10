import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentySeven = () => {
  // Set the page's title
  document.title = "Tax Planning Before 30 June 2024 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-seven">
          <h1>Tax Planning Before 30 June 2024</h1>
          <p className="date">June 10, 2024</p>
        </div>

        <div className="blog-content">
          <p>To lower your tax bill for this financial year, you may consider some of these tax planning strategies and implement them before 30 June 2024:</p>
          <ol>
            <li><span className="bold">Make a personal concessional contribution (i.e, tax deductible) into your superannuation fund.</span> You will need to check with your super fund on the correct reference code to indicate it is to be a concessional (i.e, deductible) contribution, plus complete a Notice of Intent to Claim form to provide to your super fund. Alternatively, you could ask your employer if you can <span className="bold">salary sacrifice part or all of your next pay run into superannuation</span> before 30 June 2024. Note that the total of your personal and employer concessional contributions for the 2024 year must be no more than $27,500. From 1 July 2024, the concessional contribution cap increases to $30,000 per person.</li>
            <li>Note that if your total super balance is under $500,000 at the end of the previous year, then you may be able to make over $27,500 of concessional contributions this year, to <span className="bold">utilise your unused concessional contribution limits</span> from the last 5 years.</li>
            <li>If you wish to make a <span className="bold">non-concessional contribution</span> (i.e, from after tax income so {`it's`} non-deductible), then the cap for the 2024 financial year is $110,000 per person. This cap increases to $120,000 per person for the 2024-2025 year.</li>
            <li>If you have a fixed rate loan against your investment property or share portfolio, you may be able to <span className="bold">prepay interest</span> (if permitted by your lender) for the next 12 months, and claim that interest as a deduction this year. You may also choose to <span className="bold">bring forward some expenses</span> (e.g, insurance, rates, levies, etc.) and pay them before the end of financial year.</li>
            <li>If you have a business under $10 million in annual turnover (as a sole trader, company or trust), you can purchase plant and equipment for your business. Then <span className="bold">business assets up to $20,000 may be written off entirely in the 2024 year.</span> So you can deduct up to $20,000 per item for the financial year. This instant asset write-off scheme continues until 30 June 2025, unless it is extended again.</li>
            <li>You may wish to make a <span className="bold">donation to charity</span> or a school building fund before year end, to claim that in your tax return.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentySeven;