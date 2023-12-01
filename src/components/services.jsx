import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "react-feather";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const Services = () => {
  // Set the page's title
  document.title = "Services | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content services">
        <div className="page-banner services-banner">
          <h1>Our Services</h1>
        </div>

        <p>A professional accounting team will bring you high end customised service, with a fully dedicated adviser to take the compliance burden off your shoulders so that you can focus on what really matters to keep your business growing, or to enjoy your life.</p>

        <h2 className="more-info-heading">More Information</h2>
        <ul className="info-links">
          <li>
            <Link to="/personal-tax-returns-for-individuals-and-sole-traders">
              Personal Tax Returns for Individuals and Sole Traders
            </Link>
          </li>
          <li>
            <Link to="/small-business-accounting-and-tax">
              Small Business Accounting and Tax, including Business Activity Statements (BAS) and Single Touch Payroll (STP)
            </Link>
          </li>
          <li>
            <Link to="/company-structure-and-tax-returns">
              Company Structure and Company Tax Returns
            </Link>
          </li>
          <li>
            <Link to="/trust-tax-returns">
              Trust Tax Returns
            </Link>
          </li>
          <li>
            <Link to="/smsfs-accounting-and-compliance">
              Self-Managed Superannuation Funds (SMSFs) Accounting and Compliance
            </Link>
          </li>
          <li>
            <Link to="/life-insurance-and-income-protection-insurance">
              Life Insurance and Income Protection Insurance
            </Link>
          </li>
          <li>
            <Link to="/virtual-cfo-and-outsourced-accountant-plans">
              Virtual CFO and Outsourced Accountant Plans for Your Business
            </Link>
          </li>
        </ul>
        <br />
        <br />

        <div className="info-container">
          <img
            className="info-img"
            src={require("../styles/images/group-of-coworkers.jpg")}
            alt=""
          />

          <div className="info-area">
            <h2>We Help You With</h2>
            <p>
              <Check className="blue-checkmark" />
              Accounting and tax returns
            </p>
            <p>
              <Check className="blue-checkmark" />
              Year-end tax planning strategies to reduce your tax
            </p>
            <p>
              <Check className="blue-checkmark" />
              Claiming deductions on work, business or investment property
            </p>
            <p>
              <Check className="blue-checkmark" />
              Advice on issues related to cloud accounting, Bitcoin and Cryptoassets
            </p>
            <p>
              <Check className="blue-checkmark" />
              Capital gains tax advice
            </p>
            <p>
              <Check className="blue-checkmark" />
              Companies and trusts
            </p>
            <p>
              <Check className="blue-checkmark" />
              Business consulting - from start up to growth, sale of business and finally, wind up
            </p>
            <p>
              <Check className="blue-checkmark" />
              Superannuation advice, including setting up a new SMSF
            </p>
            <p>
              <Check className="blue-checkmark" />
              Life insurance and income protection
            </p>
          </div>
        </div>

        <div className="info-container">
          <div className="info-area">
            <h2>We Can Help Small Businesses With</h2>
            <p>
              <Check className="blue-checkmark" />
              Business and tax advice, including structuring, tax planning
            </p>
            <p>
              <Check className="blue-checkmark" />
              Preparing and lodging Business Activity Statements
            </p>
            <p>
              <Check className="blue-checkmark" />
              Preparing and lodging income tax returns for companies, trusts, partnerships, individuals, SMSFs
            </p>
            <p>
              <Check className="blue-checkmark" />
              Advice on cloud accounting systems such as Xero, Quickbooks, etc.
            </p>
            <p>
              <Check className="blue-checkmark" />
              Single touch payroll reporting
            </p>
            <p>
              <Check className="blue-checkmark" />
              Superannuation advice
            </p>
            <p>
              <Check className="blue-checkmark" />
              Insurance advice
            </p>
            <p>You can read our reviews on <a href="https://www.bark.com/en/au/company/kl-accountants-pty-ltd/wygZR/" target="_blank" rel="noreferrer">Bark.com</a></p>
          </div>

          <img
            className="info-img middle-img"
            src={require("../styles/images/person-working.jpg")}
            alt=""
          />
        </div>

        <div className="info-container">
          <img
            className="info-img"
            src={require("../styles/images/team-working.jpg")}
            alt=""
          />

          <div className="info-area">
          <h2>Our Network of Alliance Partners Will Also Help You With</h2>
            <p>
              <Check className="blue-checkmark" />
              Your financing needs: to buy a property, buy a motor vehicle or grow your business.
            </p>
            <p>
              <Check className="blue-checkmark" />
              Estate planning to give you more control of your assets during your life, provide care if you are disabled, and allow your wealth to transfer to whom you want at the lowest cost.
            </p>
          </div>
        </div>

        <p className="disclaimer">This website is published by KL Accountants Pty Ltd. Ken Koh AR 430565 is an authorised representative of Wealth Today Pty Ltd (ABN 62 133 393 263), AFSL 340289. The information contained in this website and any of the resources available through it including eBooks, fact sheets and seminars {`('Content')`} has been prepared for general information purposes only and is not (and cannot be construed or relied upon as) personal advice. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation of the Content. Financial products entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in such products is suitable for your circumstances.</p>

        <p className="disclaimer">Under no circumstances will any of KL Accountants Pty Ltd, Wealth Today Pty Ltd, its officers, representatives, associates or agents be liable for any loss or damage, whether direct, incidental or consequential, caused by reliance on or use of the Content. This Content is restricted to Australian residents and is for the intended recipient only. From time to time, our associates may hold interests in or transact in companies or products mentioned herein, and may receive fees or other benefits, in connection with the making of any recommendation or facilitating a transaction in such companies or products.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Services;