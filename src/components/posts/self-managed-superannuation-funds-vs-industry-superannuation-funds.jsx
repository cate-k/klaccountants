import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTen = () => {
  // Set the page's title
  document.title = "Self-Managed Superannuation Funds (SMSFs) vs Industry Superannuation Funds - The Pros and Cons and What's Best for You | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-ten">
          <h1>Self-Managed Superannuation Funds (SMSFs) vs Industry Superannuation Funds</h1>
          <p className="date">January 10, 2023</p>
        </div>

        <div className="blog-content">
          <p>A self-managed super fund (SMSF) is a type of superannuation fund that allows you to manage your own retirement savings in Australia. On the other hand, industry super funds are managed by industry bodies on behalf of their members. Both options have their own pros and cons, and {`it's`} important to carefully consider your options before deciding which is best for you.</p>

          <p>Here are a few things to consider when comparing SMSFs and industry super funds:</p>
          <ol>
            <li><span className="bold">Control:</span> SMSFs give you more control over your retirement savings as you have the ability to make investment decisions and choose the assets in your fund. For example, the DIY investor can invest in shares directly or invest in exchange traded funds (ETFs) to track an index or buy funds with an active investment manager. Industry super funds can also offer some scope for individual stock selection, but generally have investment managers who make decisions on behalf of the members. So SMSFs cater to the hands-on investor who wants to be directly involved in their retirement nest egg; whereas industry funds cater more for the set-and-forget investor who prefer to leave it to professional fund managers.</li>
            <li><span className="bold">Costs:</span> SMSFs tend to have a flat fee structure (accounting and audit fees); industry funds have a small admin fee plus a management fee for the fund manager, as a percentage of assets built into the unit pricing. This means that for smaller funds SMSFs can have higher costs but for larger super funds, the flat fee of SMSFs can work out to be cheaper than a percentage of fund assets.</li>
            <li><span className="bold">Complexity:</span> Setting up and managing an SMSF can be complex and time-consuming. {`You'll`} need to ensure you comply with all the relevant laws and regulations, and you may need to seek professional advice. Industry super funds are generally less complex as all the compliance work is managed by the fund administrators.</li>
            <li><span className="bold">Flexibility and Investment options:</span> SMSFs have a wider range of investment options, as you have the ability to choose the assets in your fund. Industry super funds generally have a limited range of investment options. If you are interested to own a residential or commercial property directly in your super fund, then the SMSF is the only structure that legally allows you to do so. The same is also true for more {`'alternative'`} assets like gold bullion, art work, collectables, Bitcoin and crypto assets. These can only be held directly in a SMSF.</li>
          </ol>

          <p>Ultimately, the decision of whether to choose an SMSF or industry super fund will depend on your individual circumstances and financial goals. {`It's`} important to carefully consider your options and seek professional advice before making a decision.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTen;