import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostSeven = () => {
  // Set the page's title
  document.title = "How Bad Can it Get? Managing Risk in a Bear Market | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-seven">
          <h1>How Bad Can it Get? Managing Risk in a Bear Market</h1>
          <p className="date">June 7, 2022</p>
        </div>

        <div className="blog-content">
          <p>The world right now is gripped by fear and bad news. From geopolitical tensions, supply chain breakdowns, escalating inflation, weather disasters - every headline is a constant stream of gloom. So how bad will it get? And when will things get better?</p>

          <p>The outlook {`doesn't`} seem so bright for the foreseeable future. Rather than predicting the future, however, {`we'll`} look at how we can manage risk - from an investment perspective and a quality of life perspective.</p>

          <p>Central banks are raising interest rates to combat rapidly rising inflation globally. But the inflation is not fuelled so much by speculation as it is by supply chain destruction. Less supply of energy and food, and prices will sure go up. Raising interest rates will curb speculation in financial and property markets, but {`won't`} increase the supply of essential products and services. {`There's`} the dilemma.</p>

          <p>So how can we manage risk to our wealth?</p>
          <ol>
            <li>Firstly, deleverage your assets. Pay down debt.</li>
            <li>Next, get liquid. Sell poorly performing assets to raise cash for bargain buying opportunities down the road, and for cash in case of unexpected expenses.</li>
            <li>Keep your highest quality assets, especially those with an income stream.</li>
            <li>Hedge against inflation. {`It's`} no accident that the best returning investments in the past few months have been energy and commodities (due to shrinking supply) and utilities (defensive).</li>
            <li>Factor in your line in the sand: at what level will you exit your investment to take profit or prevent further loss? This may be a price level, or a mental state (if you can no longer sleep well at night, or anxiety drags on your quality of life).</li>
            <li>Stick to your plan. {`Don't`} let emotions rule you when it comes to investing.</li>
          </ol>

          <p>Also manage the risk to your broader quality of life:</p>
          <ol>
            <li>Consider a side income or side business - to help pay the bills and the mortgage, especially when your usual salary is not able to keep up with inflation. You can learn some practical skills which may be useful in an economic downturn, or it may even become your main business if your job is threatened.</li>
            <li>Think about the knowledge and skills you need to develop if things really go south. The internet is a wealth of information and there are teaching videos on Youtube on almost any thing. Use the time you have now wisely.</li>
            <li>Consider buying extra food to store each time you shop. Grow an edible garden. Start small to be manageable. The food crisis globally will not be resolved any time soon. {`You'll`} be saving money plus giving your family a buffer when costs escalate and supplies are less available.</li>
            <li>Finally, find some like-minded people - family, friends or neighbours - to support one another. People survived the Great Depression by developing a hardy mindset, practical skills and leaning on one another.</li>
          </ol>

          <p>{`Here's`} to your success in these times!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostSeven;