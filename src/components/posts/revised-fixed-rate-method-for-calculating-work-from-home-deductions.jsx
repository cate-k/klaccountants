import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwelve = () => {
  // Set the page's title
  document.title = "Revised Fixed Rate Method for Calculating Work From Home Deductions for 2022-2023 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twelve">
          <h1>Revised Fixed Rate Method for Calculating Work From Home Deductions for 2022-2023</h1>
          <p className="date">February 24, 2023</p>
        </div>

        <div className="blog-content">
          <p>For the 2022-2023 tax year, the Australian Taxation Office (ATO) has announced changes to using the fixed rate method to claim working from home expenses.</p>

          <p>Under the current system, taxpayers who work from home can claim a deduction for expenses such as electricity, internet, and phone bills. The ATO has revised the fixed rate method to one set rate, instead of two. The previous 52c per hour fixed rate method or 80c per hour shortcut method ended on 30 June 2022.</p>

          <p>From 1 July 2022, there are two methods available to calculate your work from home claims:</p>
          <ol>
            <li>
              <span className="bold">Revised fixed rate method at a rate of 67 cents per hour</span> for each hour you work from home. This rate covers the costs of electricity and gas, internet, phone, stationery and computer consumables (such as printer tone and paper). You {`can't`} claim any additional separate expenses for these items.
              <p className="new-line"><br /></p>
              You can separately claim for other work-related items such as desks, office chairs, computers, bookshelves, keyboards, monitors, desk lamps, etc. Any item over $300 is depreciated.
              <p className="new-line"><br /></p>
              <span className="bold">From 1 March 2023, you must keep a timesheet or diary of the total number of actual hours worked from home. An estimate of the hours worked from home is insufficient evidence. Also you must keep at least one record for each of the running expenses included in the fixed rate method above, plus records of your additional deductions (depreciating assets, etc). So there is more record keeping than in the previous {`years'`} fixed rate methods.</span>
              <p className="new-line"><br /></p>
              More detailed explanations are provided in <a
                href="https://www.ato.gov.au/individuals/income-and-deductions/deductions-you-can-claim/working-from-home-expenses/fixed-rate-method---67-cents/"
                target="_blank"
                rel="noreferrer"
              >
                this ATO link
              </a>.
            </li>
            <p className="new-line"><br /></p>
            <li>
              <span className="bold">The Actual cost method</span> requires taxpayers to keep records of all their expenses related to working from home. This includes receipts for electricity bills, phone and internet bills, stationary, computer consumables and all other expenses and depreciating assets incurred while working from home.
              <p className="new-line"><br /></p>
              You can read more about this in <a
                href="https://www.ato.gov.au/Individuals/Income-and-deductions/Deductions-you-can-claim/Working-from-home-expenses/Actual-cost-method/"
                target="_blank"
                rel="noreferrer"
              >
                the ATO link
              </a>.
            </li>
          </ol>

          <p>{`It's`} important for taxpayers to consider which method is best for their individual circumstances.</p>

          <p><span className="bold">For the revised fixed rate method, please take note of the additional record keeping requirements from 1 March 2023.</span> Those who work from home for a limited number of hours each week may find the fixed rate method simpler and more convenient. However, those who work from home for longer periods or who have significant expenses related to their home office may find that the actual cost method is more beneficial.</p>

          <p>{`It's`} worth noting that taxpayers can switch between the two methods from year to year, depending on their circumstances. However, {`it's`} important to keep accurate records of expenses as the ATO may ask for evidence to support any claims made.</p>

          <p>If you have any questions or concerns about claiming working from home expenses, feel free to contact us or visit the ATO website for further information.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwelve;