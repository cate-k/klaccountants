import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesThree = () => {
  // Set the page's title
  document.title = "Company Structure and Company Tax Returns | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-three-banner">
          <h1>Company Structure and Company Tax Returns</h1>
        </div>
        <br />
        <br />

        <p>A proprietary limited (Pty Ltd) company is a separate legal entity from its owners, so the shareholders have limited liability for the {`company's`} debts. The company can raise more capital by issuing new shares to new members, especially if you wish to expand beyond your family circle. This means the company is a good structure for asset protection and raising capital. Also the tax rate is lower for companies than for most salaried taxpayers, and profits can be retained in the company to fund continued growth.</p>
        <br />

        <p>A trading company (one that is running a business) in Australia is taxed at a flat rate of 25%, whereas an investment company (with passive income) is taxed at 30%. Owners can be paid with wages, director fees or fully franked dividends.</p>
        <br />

        <p>Company tax returns are lodged annually, normally by 15 May after the end of the previous financial year, if a tax agent is lodging the tax return.</p>
        <br />

        <p>Companies with one or more employees are required to file electronic Single Touch Payroll (STP) to report on income, tax and superannuation details.</p>
        <br />

        <p>As a registered tax agent, we can help you with setting up your company, regular BAS and STP reporting, complete your annual financial statements and tax return for Tax Office lodgment.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesThree;