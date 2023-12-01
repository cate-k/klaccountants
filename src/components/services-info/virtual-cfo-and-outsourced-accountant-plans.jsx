import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesSeven = () => {
  // Set the page's title
  document.title = "Virtual CFO and Outsourced Accountant Plans | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-seven-banner">
          <h1>Virtual CFO and Outsourced Accountant Plans for Your Business</h1>
        </div>
        <br />
        <br />

        <p><span className="bold">Why choose an Outsourced CFO?</span></p>
        <p>We are invested in the growth and success of your business:</p>
        <ul>
          <li>Your business will have an outsourced accountant and/or virtual CFO at a fraction of the cost of an in-house accountant or CFO.</li>
          <li>Streamline your business processes through scalable cloud technology in accounting.</li>
          <li>Clear management reporting with KPIs and analytics that matter to your business.</li>
          <li>Increase efficiency and easy cashflow management with built-in bookkeeping, accounting and tax services.</li>
          <li>Align your budget with your short and long term goals, with budget analysis and forecasting.</li>
          <li>Have peace of mind that your compliance needs are met and your strategic and operational issues are brought into sharper focus.</li>
        </ul>
        <br />

        <p><span className="bold">Who needs a Virtual CFO Service?</span></p>
        <p>Businesses of all sizes can take advantage of an outsourced CFO:</p>
        <ul>
          <li><span className="bold">Startups</span> can have a virtual CFO chart a viable growth path to attract investors or debt financing.</li>
          <li><span className="bold">Small businesses</span> can have an outsourced accountant or CFO to manage the accounting and financial side of the operation.</li>
          <li><span className="bold">Medium businesses</span> with a CFO can outsource ancillary or overflow tasks to a virtual CFO, or for consulting during major projects.</li>
        </ul>
        <br />

        <p><span className="bold">What is included in a Virtual CFO Package?</span></p>
        <p>Please contact us for more information on our Outsourced CFO packages.</p>
        <br />

        <p>As your needs change over time, your service offering will also change to reflect this.</p>
        <ul>
          <li>You have flexibility to select one of our standard packages or to customise your package.</li>
          <li>Plus you are not locked into a fixed period, so you can change or cancel at any time. </li>
          <li>Free initial consultation to understand your business and requirements.</li>
          <li>Our professionals are able to communicate in Asian languages and dialects.</li>
        </ul>
        <br />

        <p>Our packages include different levels of service for:</p>
        <ul>
          <li>Bookkeeping, Accounting and Taxation: including business activity statements, payroll and superannuation reporting, financial statements and tax returns for all your compliance needs.</li>
          <li>Accounting setup or training, industry-best software for cloud accounting, and phone support.</li>
          <li>Business and tax advice, business analytics and KPIs.</li>
          <li>Budget analysis, cashflow forecasting, risk management analysis, working capital and debt management strategies.</li>
          <li>Virtual CFO meetings online.</li>
          <li>Board reports and presentations.</li>
          <li>Strategic Advice to grow your business profitably and sustainably, including financing.</li>
          <li>Risk protection and buy-sell agreements.</li>
          <li>Exit planning.</li>
        </ul>
        <br />
        <br />

        <p className="disclaimer">This website is published by KL Accountants Pty Ltd. Ken Koh AR 430565 is an authorised representative of Wealth Today Pty Ltd (ABN 62 133 393 263), AFSL 340289. The information contained in this website and any of the resources available through it including eBooks, fact sheets and seminars {`('Content')`} has been prepared for general information purposes only and is not (and cannot be construed or relied upon as) personal advice. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation of the Content. Financial products entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in such products is suitable for your circumstances.</p>

        <p className="disclaimer">Under no circumstances will any of KL Accountants Pty Ltd, Wealth Today Pty Ltd, its officers, representatives, associates or agents be liable for any loss or damage, whether direct, incidental or consequential, caused by reliance on or use of the Content. This Content is restricted to Australian residents and is for the intended recipient only. From time to time, our associates may hold interests in or transact in companies or products mentioned herein, and may receive fees or other benefits, in connection with the making of any recommendation or facilitating a transaction in such companies or products.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesSeven;