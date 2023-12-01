import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThree = () => {
  // Set the page's title
  document.title = "Financial Resolutions for the New Year | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-three">
          <h1>Financial Resolutions for the New Year</h1>
          <p className="date">January 10, 2022</p>
        </div>

        <div className="blog-content">
          <p>Whether you have just started building wealth or have been at it for a long time, here are some resolutions that can improve your financial health by the end of the year, and also for the long term.</p>

          <p>For resolutions to be more than just an unfulfilled wishlist, you need to:</p>
          <ol>
            <li>
              <span className="bold">Prioritise</span> the most important resolutions and know the goal you want to achieve.
            </li>
            <li>
              <span className="bold">Plan</span> to take small action steps - a series of digestible, realistic small steps each day, week and month.
            </li>
            <li>
              <span className="bold">Periodically</span> review how well {`you're`} progressing and where are the areas you need to address. Also get some professional help where appropriate.
            </li>
          </ol>

          <p>Here are some financial resolutions to consider:</p>
          <ol>
            <li>Invest a regular amount each month and increase it a little if you can. This includes saving for your retirement.</li>
            <li>Pay off your credit card debt.</li>
            <li>Make extra payments to your mortgage.</li>
            <li>Have a budget that works for you and stick to it.</li>
            <li>Save some money for your emergency fund.</li>
            <li>Spend less money especially on impulse purchases.</li>
            <li>Find ways to save more money - e.g, on your insurances, subscriptions, bring lunch to work, eat out less, etc.</li>
            <li>For big-ticket items, make a list to rank them in priority to purchase and the time frame.</li>
            <li>Get your tax return done early, to get your refund quicker, or to budget if you have tax to pay.</li>
            <li>Find a side hustle if your regular job or business is not earning enough. You can also learn a new skill as this can increase your marketability in the workplace.</li>
            <li>Update your will.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThree;