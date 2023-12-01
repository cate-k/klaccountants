import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyOne = () => {
  // Set the page's title
  document.title = "Property Investors Take Note! Land Tax Changes in Victoria from 1 January 2024 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-one">
          <h1>Property Investors Take Note! Land Tax Changes in Victoria from 1 January 2024</h1>
          <p className="date">December 1, 2023</p>
        </div>

        <div className="blog-content">
          <p>In Victoria, land tax applies if you own investment property (residential and commercial), holiday homes or vacant land. Your home or farm is exempt.</p>

          <p>From 1 January 2024, the following apply:</p>
          <ol>
            <li>
              <span className="bold">A {`"temporary"`} land tax surcharge.</span> The {`"temporary"`} land tax surcharge is part of the Victorian government Covid debt repayment plan and will expire after 10 years. Properties exempt from land tax will be exempt from this surcharge. For taxable landholdings over $300,000 (for individuals), a $975 flat surcharge will apply plus a 0.10% increase in the land tax rate.

              <p>Eg: For a $750,000 assessed property - land tax in 2023 was $1,725. In 2024, land tax will rise to $3,150.</p>
            </li>
            <li>
              <span className="bold">An increase in the absentee owner surcharge rate from 2% to 4%.</span> Note that for land tax, an {`"absentee owner"`} refers to someone who is not an Australian citizen or permanent resident, or who does not ordinarily reside in Australia - ie, a foreign-resident owner of property. Their surcharge has doubled in 2024.

              <p>Eg: For a $750,000 assessed property - land tax in 2023 was $16,725. In 2024, land tax will rise to $33,150.</p>
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyOne;