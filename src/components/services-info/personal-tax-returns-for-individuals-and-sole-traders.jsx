import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesOne = () => {
  // Set the page's title
  document.title = "Personal Tax Returns for Individuals and Sole Traders | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-one-banner">
          <h1>Personal Tax Returns for Individuals and Sole Traders</h1>
        </div>
        <br />
        <br />

        <p>The most common taxpayers are individuals who are employees on Pay As You Go (PAYG) wages. Your employer will withhold tax for you and pay this to the Australian Taxation Office (ATO).</p>
        <br />

        <p>If you are a sole trader operating under your name, you need to register for an Australian Business Number (ABN). This is to identify your business and complete your tax return. You can also register for a business name, but this is optional.</p>
        <br />

        <p>If your turnover each year is over $75,000 you are legally required to register for Goods and Services Tax (GST) and forward GST payments to the ATO. This is reported in a Business Activity Statement (BAS) that is lodged either annually, quarterly or monthly due to the size of your turnover.</p>
        <br />

        <p>The ATO applies Pay As You Go (PAYG) tax instalments each quarter to businesses to help smooth the cash flow of your tax payments and avoid a large lump sum tax amount after the end of the financial year. You can vary down these instalments if trading conditions are less profitable than the previous year.</p>
        <br />

        <p>Deductions are available to employees and to sole traders, including simplified small business rules on deductions.</p>
        <br />

        <p>If you are a sole trader, you are responsible to pay superannuation into your own super fund. If you have no other employees, as a sole trader you are not required to lodge Single Touch Payroll reporting.</p>
        <br />

        <p>As a professional tax agent firm we can help you with advice, preparation and lodgment of your tax returns and BASs.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesOne;