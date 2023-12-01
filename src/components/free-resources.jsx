import { useEffect } from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const FreeResources = () => {
  // Set the page's title
  document.title = "Free Resources | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content free-resources">
        <h1>Free Resources</h1>
        <div className="divider"></div>

        <h2 className="resources-heading">Tools & Calculators</h2>

        <div className="links">
          <a
            href="https://www.ato.gov.au/Rates/Individual-income-tax-rates/"
            target="_blank"
            rel="noreferrer"
          >
            ATO Tax Rates for Individuals
          </a>
          <br />
          <br />

          <a
            href="https://www.abr.business.gov.au/"
            target="_blank"
            rel="noreferrer"
          >
            ABN Lookup
          </a>
          <br />

          <p>
            <span className="heading">Depreciation Reports for Your Investment Property</span> - Discounted fees are available for our clients from:
          </p>
          <ul>
            <li>
              <a
                href="https://www.washingtonbrown.com.au/public/static/quickquote/?RID=K2B9UEF2BZ"
                target="_blank"
                rel="noreferrer"
              >
                Washington Brown
              </a>
            </li>
            <li>
              <a
                href="https://duotax.secure.force.com/contactus?accid=0012t000008AZlC"
                target="_blank"
                rel="noreferrer"
              >
                Duo Tax Property Group
              </a>
            </li>
          </ul>

          <a
            href="https://moneysmart.gov.au/home-loans/mortgage-calculator"
            target="_blank"
            rel="noreferrer"
          >
            Home Loans Calculator
          </a>
          <span> - How much can I borrow? What will my repayments be? How can I repay my loan sooner?</span>
          <br />
          <br />

          <a
            href="https://moneysmart.gov.au/budgeting/compound-interest-calculator"
            target="_blank"
            rel="noreferrer"
          >
            Compound Interest Calculator
          </a>
          <span> - How the magic of compounding grows your wealth</span>
          <br />
          <br />

          <a
            href="https://moneysmart.gov.au/managing-debt/net-worth-calculator"
            target="_blank"
            rel="noreferrer"
          >
            Net Worth Calculator
          </a>
          <span> - Work out your financial position and net worth</span>
          <br />
          <br />

          <a
            href="https://moneysmart.gov.au/managed-funds-and-etfs/managed-funds-fee-calculator"
            target="_blank"
            rel="noreferrer"
          >
            Managed Funds Fee Calculator
          </a>
          <span> - How fees and costs will affect your investment</span>
          <br />
          <br />

          <a
            href="https://moneysmart.gov.au/retirement-income/retirement-planner"
            target="_blank"
            rel="noreferrer"
          >
            Retirement Planner Calculator
          </a>
          <span> - Find out your income when you retire</span>
          <br />
          <br />
        </div>

        <p className="disclaimer">This website is published by KL Accountants Pty Ltd. Ken Koh AR 430565 is an authorised representative of Wealth Today Pty Ltd (ABN 62 133 393 263), AFSL 340289. The information contained in this website and any of the resources available through it including eBooks, fact sheets and seminars {`('Content')`} has been prepared for general information purposes only and is not (and cannot be construed or relied upon as) personal advice. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation of the Content. Financial products entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in such products is suitable for your circumstances.</p>

        <p className="disclaimer">Under no circumstances will any of KL Accountants Pty Ltd, Wealth Today Pty Ltd, its officers, representatives, associates or agents be liable for any loss or damage, whether direct, incidental or consequential, caused by reliance on or use of the Content. This Content is restricted to Australian residents and is for the intended recipient only. From time to time, our associates may hold interests in or transact in companies or products mentioned herein, and may receive fees or other benefits, in connection with the making of any recommendation or facilitating a transaction in such companies or products.</p>
      </div>

      <Footer />
    </div>
  );
};

export default FreeResources;