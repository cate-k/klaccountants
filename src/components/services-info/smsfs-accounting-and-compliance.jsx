import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesFive = () => {
  // Set the page's title
  document.title = "Self-Managed Superannuation Funds (SMSFs) Accounting and Compliance | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-five-banner">
          <h1>Self-Managed Superannuation Funds (SMSFs) Accounting and Compliance</h1>
        </div>
        <br />
        <br />

        <p>A self-managed super fund (SMSF) is a type of superannuation fund that allows you to manage your own retirement savings in Australia.</p>
        <br />

        <p>Here are a few things to consider when comparing SMSFs with industry or retail super funds:</p>
        <ol>
          <li><span className="bold">Control:</span> SMSFs give you more control over your retirement savings as you have the ability to make investment decisions and choose the assets in your fund. For example, the DIY investor can invest in shares directly or invest in exchange traded funds (ETFs) to track an index or buy managed funds. As you are the trustee of your SMSF, you have more direct ownership of the assets than having it in other super fund structures with their own trustees.</li>
          <li><span className="bold">Costs:</span> For larger super funds, the flat fee of SMSFs can work out to be cheaper than a percentage of fund assets charged by other super fund structures.</li>
          <li><span className="bold">Complexity:</span> {`You'll`} need to ensure you comply with all the relevant laws and regulations, and you may need to seek professional advice. So SMSFs can be more time-consuming and complex to run; however we can help minimise the administration by taking care of much of the compliance for you.</li>
          <li><span className="bold">Flexibility and Investment options:</span> SMSFs have a wider range of investment options, as you have the ability to choose the assets in your fund: such as direct property, more {`'alternative'`} assets like gold, art work, collectables, Bitcoin and crypto assets. These can only be held directly in a SMSF. If you are a business owner, you can have your SMSF own your office, clinic, shop or warehouse and rent it to your business.</li>
        </ol>
        <br />

        <p>Whether you choose an SMSF fund will depend on your individual circumstances and financial goals. {`It's`} important to carefully consider your options and seek professional advice before making a decision.</p>
        <br />

        <p>As professional accountants we can help with the set up of your SMSF, and look after the annual compliance - accounting, documentation and tax preparation.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesFive;