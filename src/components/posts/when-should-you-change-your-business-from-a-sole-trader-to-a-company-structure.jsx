import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostNineteen = () => {
  // Set the page's title
  document.title = "When Should You Change Your Business from a Sole Trader to a Company Structure? | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-nineteen">
          <h1>When Should You Change Your Business from a Sole Trader to a Company Structure?</h1>
          <p className="date">June 28, 2023</p>
        </div>

        <div className="blog-content">
          <p>As your business grows, naturally {`you'll`} want to scale up to the next level in terms of sales, staffing and profitability. You may also want to consider restructuring to a company for the following reasons:</p>
          <ol>
            <li><span className="bold">Limited Liability Protection.</span> As a sole trader you bear unlimited liability for your {`business'`} debts. You can also be personally sued if something goes wrong. If {`you're`} operating in a litigious industry or {`you're`} scaling up and have to take more risk, having a company separates your personal assets from your {`company's`} liabilities. The corporate veil provides protection against being personally liable (unless you sign a personal guarantee). </li>
            <li><span className="bold">Scaling the Business is much easier.</span> A company structure allows other investors to finance business growth through equity, plus the company can borrow from the bank in its own name as it is a separate legal entity from you. </li>
            <li><span className="bold">Enhanced Credibility.</span> Larger customers such as corporate and government entities prefer dealing with a registered company due to perceived professionalism. Also regulatory requirements may favour a company structure.</li>
            <li><span className="bold">Tax Planning Benefits.</span> A company has more favourable tax treatment than an individual: including a lower rate of income tax (currently 25%), and access to ATO and government concessions.</li>
            <li><span className="bold">Succession Planning and Exit Strategy.</span> The company can carry on business and live on long after the founders have left. You can sell your share in the business (or buy out your {`partner's`} share), access small business capital gains tax concessions, develop a viable succession plan and insure the lives of key persons in the company.</li>
          </ol>

          <p>Transitioning from a sole trader to a company structure involves legal, tax, financial and administrative considerations. You should consult with your accountant and adviser to help you make the best decision.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostNineteen;