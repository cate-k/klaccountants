import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyTwo = () => {
  // Set the page's title
  document.title = "Setting Up a Foreign Company in a Low Tax Country to Run Your Business | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-two">
          <h1>Setting Up a Foreign Company in a Low Tax Country to Run Your Business</h1>
          <p className="date">December 1, 2023</p>
        </div>

        <div className="blog-content">
          <p>It is common for people who work in the knowledge economy (ie, having an online-based business or contracting with such businesses) to consider relocating to a low tax jurisdiction - for example, Portugal, United Arab Emirates or Singapore. Alternatively they may consider setting up company operations offshore, while still remaining in Australia for most of the year.</p>

          <p>{`Let's`} say you are currently an Australian tax resident and run an online business where most of your customers are overseas. You have a team or use contractors who are also based offshore to help in your business. You, however, make the important strategic decisions though many of the day to day operational decisions are delegated to your team.</p>

          <p>You are considering setting up a company in a low income tax country (including one with no capital gains tax). Is your company then exempt from Australian income tax?</p>

          <p>Under Australian tax law, the main issue is whether central management and control of the foreign-incorporated company lies in Australia or not (not where the sales are made or where the customers or team reside).</p>

          <p>Assuming your usual abode is in Australia and you spend most of the year (over 183 days) in Australia, then it is quite clear that you personally are an Australian tax resident. If the strategic, high-level decision making rests with you then according to the management and control test, the company will be considered an Australian tax resident for Australian company tax (at 25% on business income).</p>

          <p>On the other hand, if you lived for most of the year abroad, that being your usual abode, then both you and the company can be considered foreign non-residents for tax purposes and not subject to Australian tax. Of course, this is a generalised example as there are many nuances since each case is different. You should get professional advice on your particular circumstances.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyTwo;