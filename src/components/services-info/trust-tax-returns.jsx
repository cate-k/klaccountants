import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesFour = () => {
  // Set the page's title
  document.title = "Trust Tax Returns | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-four-banner">
          <h1>Trust Tax Returns</h1>
        </div>
        <br />
        <br />

        <p>Trusts are used mainly for asset protection and tax minimisation by distributing profit to beneficiaries. Trusts can be classified as:</p>
        <ul>
          <li>Discretionary Trusts (commonly called Family Trusts), where distributions to beneficiaries is variable, at the discretion of the trustee.</li>
          <li>Unit Trusts, where distributions to beneficiaries are in a fixed proportion.</li>
        </ul>
        <br />

        <p>The trustee, which can be individuals or a company, controls the trust and holds the assets in trust for the beneficiaries, who are entitled to receive a benefit from the income and/or capital. Discretionary trusts can also stream certain types of income and capital to different beneficiaries, if the trust deed allows: such as dividends and franking credits to one beneficiary and capital gains to another.</p>
        <br />

        <p>The trust files a tax return each year by 15 May; however the trust itself normally does not pay income tax. Income tax is assessed to each beneficiary who receives a profit distribution from the trust.</p>
        <br />

        <p>We can explain the different types of trust and trustee structures to you, and help you set up your trust. We also help with the ongoing accounting and tax compliance for your trust.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesFour;