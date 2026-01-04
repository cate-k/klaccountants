import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyNine = () => {
  // Set the page's title
  document.title = "What Kind of Repairs and Maintenance Can Be Expensed Immediately Or Need to Be Depreciated for Investment Properties? | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-nine">
          <h1>What Kind of Repairs and Maintenance Can Be Expensed Immediately Or Need to Be Depreciated for Investment Properties?</h1>
          <p className="date">March 2, 2026</p>
        </div>

        <div className="blog-content">
          <p>If you own an investment property rented out to tenants, you can claim an immediate expense for:</p>
          <ul>
            <li>Items costing less than $300 (but not part of a set of identical items that cost more than $300).</li>
            <li>Expenses for repairs and maintenance, where the deduction relates to wear and tear or other damage. It may involve replacing a worn out or broken part, such as replacing worn roof tiles or fixing a damaged air conditioner. But if you replace the entire item, such as replacing the air conditioner, then this will need to be depreciated as it is of a capital nature.</li>
          </ul>

          <p>Doing initial repairs after you purchased the property but before it was made available for rent is also considered a capital expense, as are improvements and renovations. These will need to be depreciated.</p>

          <p>You can claim a deduction for the decline in value of new depreciating assets that you installed yourself. The following, however, {`can't`} be claimed: for example, a second hand television set that you bought - because it is not a new asset; a washing machine installed by the previous owner - if you bought the property after 9 May 2017, you {`can't`} claim deductions for existing depreciating assets from the previous owner.</p>

          <p>If you acquired a newly built residential property from a developer, you can claim a deduction for depreciation if no one was previously entitled to a deduction for the asset, and if no one resided before you bought it and you purchased the property within 6 months of it being built.</p>

          <p>Feel free to contact us if you have any questions on your investment property.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyNine;