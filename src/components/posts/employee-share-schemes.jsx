import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyNine = () => {
  // Set the page's title
  document.title = "Employee Share Schemes - How They Work and How They are Taxed | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-nine">
          <h1>Employee Share Schemes - How They Work and How They are Taxed</h1>
          <p className="date">December 4, 2024</p>
        </div>

        <div className="blog-content">
          <p>Larger employers offer employee share schemes (ESS) as an incentive to attract and retain top talent. In Australia, ESS generally takes the form of Employee Share Plans (ESPs) and Employee Share Options (ESOPs). In the US and UK, employee share plans are called Restricted Stock Units (RSUs). We will discuss ESPs as this is more common for larger public companies to offer small parcel of shares to their staff regularly.</p>
          <p className="new-line"><br /></p>

          <h3>Employee Share Plans (ESPs)</h3>
          <p>In the ESP, you receive shares either completely free or you might have to pay a discount for the shares. {`Let's`} say you receive $10,000 shares this year at a 30% discount.</p>
          <p className="new-line"><br /></p>

          <h3>Taxed Upfront</h3>
          <p>The discount of $3,000 is taxed upfront in this {`year's`} tax return; but it means that you have to dip into your savings to pay the tax. When you sell the shares in the future, the capital gain may qualify for the CGT discount if held for over 12 months. Hence not so good for cashflow in the short term, but this method can offer big savings in tax in the longer term, especially if the shares grow rapidly in value.</p>

          <p>Some start-up companies have concessions that exempt the entire upfront discount from tax, provided certain requirements are met.</p>
          <p className="new-line"><br /></p>

          <h3>Deferred Taxing Point</h3>
          <p>The other method is to defer tax upfront, to a future taxing point. Any growth up to the deferred taxing point is taxed as income but without the 50% discount. When you sell the shares at a later date, then you can utilise the 50% CGT discount. This method is chosen if there is a real risk your shares may be forfeited due to certain conditions (e.g, KPIs) not being met; so it makes sense to defer the tax until the risk of forfeiture ends or the restrictions on disposal lifts.</p>
          <p className="new-line"><br /></p>

          <h3>Here are some terms to understand:</h3>
          <p>The <span className="bold">Vesting Date</span> is the date when the ESS shares or options become exercisable or transferable to the employee once the conditions are met: e.g, a period of employment or performance metrics.</p>

          <p>The <span className="bold">Settlement Date</span> (also called the taxing point) is the date when the ESS shares or options are settled or transferred to employees. Typically it occurs not long after the vesting date. In Australia the tax liability associated with the ESS shares or options is triggered on the settlement date.</p>

          <p>Your employer may or may not offer you the choice of either the Taxed Upfront or Taxed Deferred alternative. {`It's`} important to get proper tax advice on this as there are nuances on a case by case basis.</p>
          <p className="new-line"><br /></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyNine;