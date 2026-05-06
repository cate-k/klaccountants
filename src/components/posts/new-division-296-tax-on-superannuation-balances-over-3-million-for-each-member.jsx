import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostFortyOne = () => {
  // Set the page's title
  document.title =
    "New Division 296 Tax on Superannuation Balances Over $3 Million for Each Member | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-forty-one">
          <h1>
            New Division 296 Tax on Superannuation Balances Over $3 Million for
            Each Member
          </h1>
          <p className="date">May 7, 2026</p>
        </div>

        <div className="blog-content">
          <p>
            <span className="bold">Division 296</span> is a new Australian tax
            on superannuation earnings for individuals with a{" "}
            <span className="bold">Total Superannuation Balance (TSB)</span>{" "}
            exceeding <span className="bold">$3 million</span>. Passed into law
            in March 2026, it takes effect from{" "}
            <span className="bold">1 July 2026</span> (the 2026-27 financial
            year) and applies to the proportion of realized earnings
            attributable to balances above the threshold.
          </p>

          <p>The tax structure involves two tiers:</p>
          <ul>
            <li>
              <span className="bold">15% additional tax</span> (30% total
              effective rate) on earnings relating to the portion of the balance
              between <span className="bold">$3 million and $10 million.</span>
            </li>
            <li>
              <span className="bold">25% additional tax</span> (40% total
              effective rate) on earnings relating to the portion of the balance{" "}
              <span className="bold">above $10 million</span>.
            </li>
          </ul>

          <p>Key operational details include:</p>
          <ul>
            <li>
              <span className="bold">Calculation Basis:</span> The tax applies
              only to <span className="bold">realized earnings</span> (cash
              after asset sales, dividends, interest, rent), not unrealized
              capital gains.
            </li>
            <li>
              <span className="bold">Thresholds:</span> The $3 million and $10
              million thresholds are indexed to CPI annually ($150,000 and
              $500,000 increments respectively).
            </li>
            <li>
              <span className="bold">Liability:</span> It is a{" "}
              <span className="bold">personal tax</span> assessed on the
              individual, not the fund. Taxpayers can pay out-of-pocket or use
              an ATO release authority to deduct it from super.
            </li>
            <li>
              <span className="bold">SMSF Options:</span> SMSF members can elect
              for a <span className="bold">cost base reset</span> of all fund
              assets by the 2026-27 tax return due date to manage future capital
              gains, though this is an irreversible decision.
            </li>
            <li>
              <span className="bold">Estate Implications:</span> Division 296
              liabilities become debts of the {`deceased's`} estate, which can
              create misalignment if superannuation passes to different
              beneficiaries than those inheriting the estate assets.
            </li>
          </ul>

          <p>
            For members with balances over $3 million, key planning strategies
            include:
          </p>
          <ul>
            <li>
              <span className="bold">
                Withdrawing assets before 30 June 2027
              </span>{" "}
              to reduce the Total Superannuation Balance (TSB) below the $3
              million threshold, as the transitional rule allows this to avoid
              the tax for the first year.
            </li>
            <li>
              <span className="bold">Electing a cost base reset</span> for SMSFs
              by the 2026-27 tax return due date to exclude unrealised gains
              accrued prior to 1 July 2026 from future Division 296
              calculations.
            </li>
            <li>
              <span className="bold">
                Reviewing contribution and pension strategies
              </span>{" "}
              prior to 30 June 2026 to manage balance growth and ensure
              sufficient liquidity to pay the personal tax liability, which can
              be released from super via an ATO release authority.
            </li>
            <li>
              <span className="bold">
                Modelling realised vs. unrealised gains
              </span>{" "}
              to understand post-tax outcomes, as the tax applies only to
              realised earnings, potentially altering asset allocation decisions
              for funds holding direct property or unlisted assets.
            </li>
          </ul>

          <p>
            The tax is assessed to the <span className="bold">individual</span>,
            not the super fund, and applies to all super interests including
            SMSFs, retail funds, and defined benefit interests, though standard
            retail funds cannot access the cost base reset option available to
            SMSFs.
          </p>

          <p>
            There is no one-size-fits all strategy. Analysis and advice are
            highly dependent on individual circumstances.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostFortyOne;
