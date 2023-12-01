import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostFifteen = () => {
  // Set the page's title
  document.title = "End of Financial Year Tax Planning | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-fifteen">
          <h1>End of Financial Year Tax Planning</h1>
          <p className="date">May 11, 2023</p>
        </div>

        <div className="blog-content">
          <p>As the end of the financial year approaches, now is a great time to start thinking about tax saving strategies. Here are a few ideas to consider:</p>
          <ol>
            <li><span className="bold">Make the most of tax deductions:</span> If {`you're`} self-employed or own a small business, you can claim deductions related to your work, such as home office expenses, travel, and equipment. Make sure to keep receipts and records of these expenses to claim them on your tax return. Before the end of financial year, you can prepay subscriptions, buy equipment for your work or home office. Anything under $300 can be claimed in full. If you have a fixed rate home loan on your investment property, you can also prepay the interest for the following year.</li>
            <li><span className="bold">Contribute to your superannuation:</span> You can ask your employer to salary sacrifice into super before 30 June, or you can make a personal concessional contribution directly. Ensure though that your total employer and personal concessional contributions during the year do not exceed $27,500. You may also be eligible for government contributions, such as the government co-contribution or the low income super tax offset.</li>
            <li><span className="bold">Consider salary sacrificing:</span> If {`you're`} an employee, you may be able to negotiate with your employer to sacrifice part of your salary in exchange for additional benefits, such as superannuation contributions, novated lease on a car, purchase of computer equipment or a mobile phone. This can help reduce your taxable income.</li>
            <li><span className="bold">Invest in tax-effective investments:</span> There are several investment options, such as shares with fully franked dividends, property trusts, managed funds and exchange-traded funds, that may offer tax benefits. {`It's`} important to seek professional advice before making any investment decisions.</li>
          </ol>

          <p><span className="bold">By considering these tax saving strategies, you can reduce your tax and save money. Feel free to contact us for a tax planning consultation before 30 June.</span></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostFifteen;