import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const ServicesSix = () => {
  // Set the page's title
  document.title = "Life Insurance and Income Protection Insurance | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content about-us">
        <div className="page-banner service-six-banner">
          <h1>Life Insurance and Income Protection Insurance</h1>
        </div>
        <br />
        <br />

        <p>What would happen to your {`family's`} financial security if you died unexpectedly or became permanently disabled?</p>
        <br />

        <p><span className="bold">Life insurance is a safety net to protect your {`family's`} financial future:</span></p>
        <ul>
          <li>Life insurance can help your loved ones pay off your mortgage and other debts.</li>
          <li>It can cover funeral expenses and living expenses for your family for a period of time.</li>
          <li>It can help pay for your {`children's`} ongoing education expenses.</li>
        </ul>
        <br />

        <p><span className="bold">If you {`don't`} have life insurance, here are seven reasons you probably need it:</span></p>
        <ol>
          <li>{`You're`} about to have a baby or you already have children to support</li>
          <li>{`You're`} about to get married</li>
          <li>{`You're`} supporting your aged parents</li>
          <li>You have a mortgage and investment loans to pay off</li>
          <li>You are self-employed or have a family-owned business</li>
          <li>Your job is high-risk</li>
          <li>You have some extreme hobbies, like scuba diving, rock climbing, etc.</li>
        </ol>
        <br />

        <p><span className="bold">There are four types of life insurance in Australia:</span></p>
        <ol>
          <li><span className="bold">Life Insurance</span> - pays your beneficiaries a tax free lump sum in the event of your death.</li>
          <li><span className="bold">Total and Permanent Disability</span> - pays you a tax free lump sum if you become disabled and unable to work. This will cover your medical, rehabilitation and ongoing living expenses.</li>
          <li><span className="bold">Income Protection Insurance</span> - pays you up to 75% of your monthly income if {`you're`} unable to work due to illness or injury. This income will help pay for your mortgage or rent and living expenses. The premiums are tax deductible.</li>
          <li><span className="bold">Critical Illness Insurance</span> - pays you a tax free lump sum if you are diagnosed with a critical illness such as stroke, cancer or heart attack.</li>
        </ol>
        <br />

        <p>As a registered financial planner, we can provide quotes and general advice for you for the above life insurances.</p>
        <br />
        <br />

        <p className="disclaimer">This website is published by KL Accountants Pty Ltd. Ken Koh AR 430565 is an authorised representative of Wealth Today Pty Ltd (ABN 62 133 393 263), AFSL 340289. The information contained in this website and any of the resources available through it including eBooks, fact sheets and seminars {`('Content')`} has been prepared for general information purposes only and is not (and cannot be construed or relied upon as) personal advice. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation of the Content. Financial products entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in such products is suitable for your circumstances.</p>

        <p className="disclaimer">Under no circumstances will any of KL Accountants Pty Ltd, Wealth Today Pty Ltd, its officers, representatives, associates or agents be liable for any loss or damage, whether direct, incidental or consequential, caused by reliance on or use of the Content. This Content is restricted to Australian residents and is for the intended recipient only. From time to time, our associates may hold interests in or transact in companies or products mentioned herein, and may receive fees or other benefits, in connection with the making of any recommendation or facilitating a transaction in such companies or products.</p>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesSix;