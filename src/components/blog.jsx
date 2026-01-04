import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const Blog = () => {
  // Set the page's title
  document.title = "Blog | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post">
          <Link className="blog-link" to="/what-kind-of-repairs-and-maintenance-can-be-expensed-immediately">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-39.jpg")}
              alt=""
            />
            <h2>What Kind of Repairs and Maintenance Can Be Expensed Immediately Or Need to Be Depreciated for Investment Properties?</h2>
            <p>Posted <span className="date">March 2, 2026</span></p>
            <p className="description">If you own an investment property rented out to tenants, you can claim an immediate expense for: Items costing less than $300...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/meals-what-can-and-cant-be-claimed">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-38.jpg")}
              alt=""
            />
            <h2>Meals - What Can and {`Can't`} Be Claimed</h2>
            <p>Posted <span className="date">March 2, 2026</span></p>
            <p className="description">Sometimes it can be confusing to know when meals can be tax deductible by the ATO and when they {`can't`}. Meals are not deductible if the travel does not involve...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/ato-interest-can-no-longer-be-claimed-from-fy-2026-onwards">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-37.jpg")}
              alt=""
            />
            <h2>ATO Interest Can No Longer Be Claimed from FY 2026 Onwards</h2>
            <p>Posted <span className="date">March 2, 2026</span></p>
            <p className="description">From 1 July 2025, ATO interest charges, including the General Interest Charge and Shortfall Interest Charge, are no longer tax-deductible for any taxpayer...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/ato-tax-rates-for-individuals-tax-residents">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-36.jpg")}
              alt=""
            />
            <h2>ATO Tax Rates for Individuals (Tax Residents)</h2>
            <p>Posted <span className="date">June 10, 2025</span></p>
            <p className="description">Tax Rates 2025-2026 Year: The 2026 financial year starts on 1 July 2025 and ends on 30 June 2026. Tax Scale 2025-26 (per Stage 3 tax cuts as adjusted)...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/maximise-your-2025-tax-refund">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-35.jpg")}
              alt=""
            />
            <h2>Maximise Your 2025 Tax Refund</h2>
            <p>Posted <span className="date">June 10, 2025</span></p>
            <p className="description">You can maximise your tax refund each year by knowing what deductions you can claim: Work-related expenses - memberships, subscriptions, tools...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/tax-changes-from-1-july-2025">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-34.jpg")}
              alt=""
            />
            <h2>Tax Changes from 1 July 2025</h2>
            <p>Posted <span className="date">June 10, 2025</span></p>
            <p className="description">From 1 July 2025, you can no longer claim an income tax deduction for ATO interest charges on unpaid tax liabilities incurred from the 2025-2026 year onwards...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/tax-planning-to-reduce-your-tax-before-june-2025">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-33.jpg")}
              alt=""
            />
            <h2>Tax Planning to Reduce Your Tax Before 30 June 2025</h2>
            <p>Posted <span className="date">June 10, 2025</span></p>
            <p className="description">To lower your tax bill for this financial year, you may consider some of these tax planning strategies and implement them before 30 June 2025...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/unrelased-cgt-on-super-balance-over-3m">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-32.jpg")}
              alt=""
            />
            <h2>The Controversial Unrealised Capital Gains Tax on Superannuation Balances over $3 Million</h2>
            <p>Posted <span className="date">June 10, 2025</span></p>
            <p className="description">This is the proposed Division 296 tax, commencing on 1 July 2025, on individuals with a Total Superannuation Balance (TSB) over $3 million...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/how-much-would-1000-invested-10-years-ago-be-worth-today">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-31.jpg")}
              alt=""
            />
            <h2>How Much Would $1,000 Invested 10 Years Ago be Worth Today in Bitcoin, Gold, Stocks and Property?</h2>
            <p>Posted <span className="date">December 4, 2024</span></p>
            <p className="description">If you had invested $1,000 ten years ago in growth assets, the tables below show you how much that USD $1,000 or AUD $1,000 would...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/super-charging-your-retirement-balance-before-retirement">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-30.jpg")}
              alt=""
            />
            <h2>Super Charging Your Retirement Balance Before Retirement or Before Turning 75</h2>
            <p>Posted <span className="date">December 4, 2024</span></p>
            <p className="description">If you want to rapidly put money into your superannuation fund before retiring, or before turning 75 when {`you're`} retired, here are...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/employee-share-schemes">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-29.jpg")}
              alt=""
            />
            <h2>Employee Share Schemes - How They Work and How They are Taxed</h2>
            <p>Posted <span className="date">December 4, 2024</span></p>
            <p className="description">Larger employers offer employee share schemes (ESS) as an incentive to attract and retain top talent. In Australia, ESS generally...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/tax-reminders-for-june-and-july">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-28.jpg")}
              alt=""
            />
            <h2>Tax Reminders for June and July</h2>
            <p>Posted <span className="date">June 10, 2024</span></p>
            <p className="description">Here are some reminders to do in June or July each year. If you have a discretionary trust (commonly called, a family trust)...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/tax-planning-before-30-june-2024">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-27.jpg")}
              alt=""
            />
            <h2>Tax Planning Before 30 June 2024</h2>
            <p>Posted <span className="date">June 10, 2024</span></p>
            <p className="description">To lower your tax bill for this financial year, you may consider some of these tax planning strategies and implement them before...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/buying-an-electric-vehicle-for-your-business-with-fbt-exemption">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-26.jpg")}
              alt=""
            />
            <h2>Buying an Electric Vehicle for Your Business, with FBT Exemption</h2>
            <p>Posted <span className="date">June 10, 2024</span></p>
            <p className="description">Normally if you buy a vehicle under your company name, primarily for your private use, then fringe benefits tax (FBT) will apply...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/ato-tax-rate-changes-from-1-july-2024">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-25.jpg")}
              alt=""
            />
            <h2>ATO Tax Rate Changes from 1 July 2024</h2>
            <p>Posted <span className="date">June 10, 2024</span></p>
            <p className="description">ATO tax rates are changing from 1 July 2024. You can compare the changes from 2024-25 to the current tax rates in 2023-24...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/small-business-20k-instant-asset-write-off-until-30-june-2024">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-24.jpg")}
              alt=""
            />
            <h2>Small Business $20k Instant Asset Write-Off Until 30 June 2024</h2>
            <p>Posted <span className="date">December 1, 2023</span></p>
            <p className="description">The government is encouraging small businesses to invest in more capital assets to grow. If your small business has an...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/proposed-tax-on-super-balances-over-3m">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-23.jpg")}
              alt=""
            />
            <h2>Proposed Tax on Super Balances Over $3M</h2>
            <p>Posted <span className="date">December 1, 2023</span></p>
            <p className="description">The government is forging ahead with its plan to tax individuals who have a superannuation member balance of over $3 million...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/setting-up-a-foreign-company-in-a-low-tax-country">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-22.jpg")}
              alt=""
            />
            <h2>Setting Up a Foreign Company in a Low Tax Country to Run Your Business</h2>
            <p>Posted <span className="date">December 1, 2023</span></p>
            <p className="description">It is common for people who work in the knowledge economy (ie, having an online-based business or contracting with such businesses) to...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/property-investors-take-note">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-21.jpg")}
              alt=""
            />
            <h2>Property Investors Take Note! Land Tax Changes in Victoria from 1 January 2024</h2>
            <p>Posted <span className="date">December 1, 2023</span></p>
            <p className="description">In Victoria, land tax applies if you own investment property (residential and commercial), holiday homes or vacant land. Your home or farm...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/how-to-spot-scammers-impersonating-the-australian-tax-office">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-20.jpg")}
              alt=""
            />
            <h2>How to Spot Scammers Impersonating the Australian Tax Office</h2>
            <p>Posted <span className="date">June 28, 2023</span></p>
            <p className="description">Nowadays, especially at the end of financial year, many scammers try to impersonate the ATO. {`Here's`} some tips to spot them and protect...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/when-should-you-change-your-business-from-a-sole-trader-to-a-company-structure">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-19.jpg")}
              alt=""
            />
            <h2>When Should You Change Your Business from a Sole Trader to a Company Structure?</h2>
            <p>Posted <span className="date">June 28, 2023</span></p>
            <p className="description">As your business grows, naturally {`you'll`} want to scale up to the next level in terms of sales, staffing and profitability. You may also...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/why-do-60-of-small-businesses-fail-in-their-first-three-years">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-18.jpg")}
              alt=""
            />
            <h2>Why Do 60% of Small Businesses Fail in Their First Three Years? And What You Can Do to Succeed</h2>
            <p>Posted <span className="date">June 28, 2023</span></p>
            <p className="description">An oft quoted statistic is that 60% of small businesses in Australia fail within their first three years. What are the reasons for this and what...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/10-reasons-owning-your-home-beats-super">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-17.jpg")}
              alt=""
            />
            <h2>10 Reasons Owning Your Home Beats Super in Retirement</h2>
            <p>Posted <span className="date">May 11, 2023</span></p>
            <p className="description">Download issue here: 10 Reasons Owning Your Home Beats Super in Retirement...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/some-key-takeaways-from-the-federal-budget-of-9-may-2023">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-16.jpg")}
              alt=""
            />
            <h2>Some Key Takeaways from the Federal Budget of 9 May 2023</h2>
            <p>Posted <span className="date">May 11, 2023</span></p>
            <p className="description">The 2023 Federal Budget is a tame, prudent budget, addressing immediate challenges but with no long term vision on tax reform to...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/end-of-financial-year-tax-planning">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-15.jpg")}
              alt=""
            />
            <h2>End of Financial Year Tax Planning</h2>
            <p>Posted <span className="date">May 11, 2023</span></p>
            <p className="description">As the end of the financial year approaches, now is a great time to start thinking about tax saving strategies. Here are a few ideas to...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/proposed-government-changes-to-superannuation-for-balances-over-3-million">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-14.jpg")}
              alt=""
            />
            <h2>The Proposed Government Changes to Superannuation for Balances over $3 Million</h2>
            <p>Posted <span className="date">March 10, 2023</span></p>
            <p className="description">Superannuation is the big pot of gold that governments salivate over. As the years go by the rules keep changing in favour of the...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/small-business-owners-get-instant-asset-write-off-before-30-june-2023">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-13.jpg")}
              alt=""
            />
            <h2>Small Business Owners: Get your Instant Asset Write-Off Before the 30 June 2023 Deadline!</h2>
            <p>Posted <span className="date">March 10, 2023</span></p>
            <p className="description">For small businesses, the instant asset write-off (temporary full expensing) rules end this June 2023. These measures were...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/revised-fixed-rate-method-for-calculating-work-from-home-deductions">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-12.jpg")}
              alt=""
            />
            <h2>Revised Fixed Rate Method for Calculating Work From Home Deductions for 2022-2023</h2>
            <p>Posted <span className="date">February 24, 2023</span></p>
            <p className="description">For the 2022-2023 tax year, the Australian Taxation Office (ATO) has announced changes to using the fixed rate method to claim...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/reviewing-your-life-and-income-protection-insurance-needs">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-11.jpg")}
              alt=""
            />
            <h2>Reviewing your Life and Income Protection Insurance Needs for the New Year</h2>
            <p>Posted <span className="date">January 10, 2023</span></p>
            <p className="description">Life insurance is a type of insurance that provides financial protection to the {`policyholder's`} beneficiaries in the event of the...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/self-managed-superannuation-funds-vs-industry-superannuation-funds">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-10.jpg")}
              alt=""
            />
            <h2>Self-Managed Superannuation Funds (SMSFs) vs Industry Superannuation Funds - The Pros and Cons and {`What's`} Best for You</h2>
            <p>Posted <span className="date">January 10, 2023</span></p>
            <p className="description">A self-managed super fund (SMSF) is a type of superannuation fund that allows you to manage your own retirement savings...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/most-common-tax-deductions-for-wage-employees">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-9.jpg")}
              alt=""
            />
            <h2>Most Common Tax Deductions for Wage Employees</h2>
            <p>Posted <span className="date">January 10, 2023</span></p>
            <p className="description">Employees who are paid wages or salary are the biggest number of tax payers in Australia. Some of the most common...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/downsizer-superannuation-contributions-changes">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-8.jpg")}
              alt=""
            />
            <h2>Downsizer Superannuation Contributions Changes from 1 January 2023</h2>
            <p>Posted <span className="date">January 10, 2023</span></p>
            <p className="description">From 1 January 2023, people aged 55 years and over are eligible to make downsizer contributions into super from the sale of their home...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/how-bad-can-it-get-managing-risk-in-a-bear-market">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-7.jpg")}
              alt=""
            />
            <h2>How Bad Can it Get? Managing Risk in a Bear Market</h2>
            <p>Posted <span className="date">June 7, 2022</span></p>
            <p className="description">The world right now is gripped by fear and bad news. From geopolitical tensions, supply chain breakdowns...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/some-considerations-from-1-july-2022">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-6.jpg")}
              alt=""
            />
            <h2>Some Considerations from 1 July 2022</h2>
            <p>Posted <span className="date">June 7, 2022</span></p>
            <p className="description">If you are an employer with 19 or less employees, their STP (Single Touch Payroll) finalisation is due by 14 July 2022...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/end-of-financial-year-2022-reminders">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-5.jpg")}
              alt=""
            />
            <h2>End of Financial Year 2022 Reminders</h2>
            <p>Posted <span className="date">June 7, 2022</span></p>
            <p className="description">{`Here's`} a quick checklist of reminders for you to consider doing (as applicable) before the end of the Australian tax year, 30 June 2022...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/company-directors-need-to-apply-for-a-new-director-id">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-4.jpg")}
              alt=""
            />
            <h2>Company Directors Need to Apply for a New Director ID</h2>
            <p>Posted <span className="date">January 10, 2022</span></p>
            <p className="description">The ATO has established the Australian Business Registry Services (ABRS) to streamline how you register, view, and maintain your...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/financial-resolutions-for-the-new-year">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-3.jpg")}
              alt=""
            />
            <h2>Financial Resolutions for the New Year</h2>
            <p>Posted <span className="date">January 10, 2022</span></p>
            <p className="description">Whether you have just started building wealth or have been at it for a long time, here are some resolutions that can...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/single-touch-payroll-stp-phase-2-for-businesses-with-employees">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-2.jpg")}
              alt=""
            />
            <h2>Single Touch Payroll (STP) Phase 2 for Businesses with Employees</h2>
            <p>Posted <span className="date">January 10, 2022</span></p>
            <p className="description">The {`government's`} roadmap for mandatory STP reporting Phase 2 started on 1 January 2022...</p>
          </Link>
        </div>

        <div className="blog-post">
          <Link className="blog-link" to="/a-reminder-on-superannuation-contributions-cap-for-2021-2022">
            <img
              className="blog-img"
              src={require("../styles/images/posts/post-1.jpg")}
              alt=""
            />
            <h2>A Reminder on Superannuation Contributions Cap for 2021-2022</h2>
            <p>Posted <span className="date">January 10, 2022</span></p>
            <p className="description">Please remember the following: You can make concessional contributions up to $27,500 before 30 June 2022...</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;