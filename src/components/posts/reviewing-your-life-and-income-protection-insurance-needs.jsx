import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostEleven = () => {
  // Set the page's title
  document.title = "Reviewing your Life and Income Protection Insurance Needs for the New Year | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-eleven">
          <h1>Reviewing your Life and Income Protection Insurance Needs for the New Year</h1>
          <p className="date">January 10, 2023</p>
        </div>

        <div className="blog-content">
          <p><span className="bold">Life insurance</span> is a type of insurance that provides financial protection to the {`policyholder's`} beneficiaries in the event of the {`policyholder's`} death. It can be used to cover expenses such as funeral costs, outstanding debts, and future financial needs.</p>

          <p><span className="bold">Total and permanent disability (TPD) insurance</span> is a type of insurance that provides financial protection to the policyholder in the event that they become permanently disabled and are unable to work. It can be used to cover expenses such as medical bills, rehabilitation costs, and ongoing living expenses.</p>

          <p><span className="bold">Income protection insurance</span> is a type of insurance that provides financial protection to the policyholder in the event that they are unable to work due to illness or injury. It can provide a replacement income to cover expenses such as mortgage payments, rent, and living expenses.</p>

          <p><span className="bold">Critical illness insurance</span> is a type of insurance that provides financial protection to the policyholder in the event that they are diagnosed with a specific critical illness, such as cancer or heart attack. It can be used to cover expenses such as medical bills, rehabilitation costs, and ongoing living expenses.</p>

          <p>For life, TPD and critical illness insurance, a lump sum tax free amount is paid out on a successful claim. For income protection insurance, a taxable income stream is paid each month after the waiting period.</p>

          <p>It is important to carefully consider your insurance needs and to seek professional advice before purchasing any insurance policy. It is also important to carefully review the terms and conditions of a policy to understand what is and is not covered.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostEleven;