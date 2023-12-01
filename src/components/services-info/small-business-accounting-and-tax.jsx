import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesTwo = () => {
  // Set the page's title
  document.title = "Small Business Accounting and Tax, including Business Activity Statements (BAS) and Single Touch Payroll (STP) | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-two-banner">
          <h1>Small Business Accounting and Tax, including Business Activity Statements (BAS) and Single Touch Payroll (STP)</h1>
        </div>
        <br />
        <br />

        <p>We help you prepare and submit your BAS and STP filings on a monthly, quarterly or annual basis for:</p>
        <ul>
          <li>Goods and Services Tax (GST)</li>
          <li>PAYG Withholding tax for your {`employees'`} wages</li>
          <li>Pay As You Go (PAYG) Tax Instalments for your {`business'`} tax</li>
        </ul>
        <br />

        <p>Whether you keep your business records on spreadsheets or cloud-based accounting software, we can help you with your regular compliance and reporting.  We are well versed with various online software such as Xero, Quickbooks, Reckon and MYOB.</p>
        <br />

        <p><span className="bold">For new businesses,</span> we advise you on the best tax and legal structure for your purposes: as a company, trust, sole trader or partnership. We help you with registering for your ABN, GST and PAYG withholding obligations.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesTwo;