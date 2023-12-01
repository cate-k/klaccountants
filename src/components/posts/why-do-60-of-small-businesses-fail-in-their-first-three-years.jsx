import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostEighteen = () => {
  // Set the page's title
  document.title = "Why Do 60% of Small Businesses Fail in Their First Three Years? And What You Can Do to Succeed | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-eighteen">
          <h1>Why Do 60% of Small Businesses Fail in Their First Three Years? And What You Can Do to Succeed</h1>
          <p className="date">June 28, 2023</p>
        </div>

        <div className="blog-content">
          <p>An oft quoted statistic is that 60% of small businesses in Australia fail within their first three years. What are the reasons for this and what steps can you take to overcome this?</p>
          <ol>
            <li><span className="bold">A lack of market demand for your product or service.</span> You need to ask yourself, what problem am I solving? Niche down further to develop your Ideal Customer Profile - what kind of person are you selling to, where do they hang out, what are their pain points and interests? Why would they be interested in buying your product or service?</li>
            <li><span className="bold">Lack of capital or poor financial management.</span> Rather than jumping in with both feet to something totally new, work on it as a side hustle while still keeping your day job. Then when business builds up, you can slowly scale down hours in the other job. Plan out your cashflow and have enough savings to pay your bills for the first six months. That will keep you from panic attacks!</li>
            <li><span className="bold">Poor product-market fit.</span> A startup business needs to address a specific problem in your chosen market. Otherwise you will have high customer churn, low adoption and dissatisfaction. Research continuously, do A/B testing, start with a prototype or samples before investing more time and money in case your audience is not interested. Talk about your idea in social media, write articles or post videos to attract interest and get feedback.</li>
            <li><span className="bold">Poor marketing and sales.</span> Needless to say, even with a great product, without good marketing, your will fail to acquire and retain customers. Think about your value proposition and plan out your marketing strategy - but focus on one or two channels (including social media) to start with, instead of the scatter gun approach.</li>
            <li><span className="bold">Some positive things you can do:</span> network with industry experts, mentors and referral sources. Join networking events, communities and be actively posting and making connections with people on social media.</li>
          </ol>

          <p>Welcome to starting a business. {`It's`} hard work, exciting and challenging at the same time. We wish you every success and may you enjoy the journey!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostEighteen;