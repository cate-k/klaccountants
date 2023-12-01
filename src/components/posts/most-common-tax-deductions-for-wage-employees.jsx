import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostNine = () => {
  // Set the page's title
  document.title = "Most Common Tax Deductions for Wage Employees | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-nine">
          <h1>Most Common Tax Deductions for Wage Employees</h1>
          <p className="date">January 10, 2023</p>
        </div>

        <div className="blog-content">
          <p>Employees who are paid wages or salary are the biggest number of tax payers in Australia. Some of the most common deductions that you as an employee can claim include:</p>
          <ol>
            <li><span className="bold">Work-related expenses:</span> You can claim deductions for expenses that are directly related to your work, such as uniforms, subscriptions, mobile phone, tools and equipment, and travel expenses.</li>
            <li><span className="bold">Home office expenses:</span> If you work from home, you may be able to claim deductions for a portion of your home office expenses, such as electricity, stationery, internet and so on.</li>
            <li><span className="bold">Professional development:</span> You can claim for expenses related to professional development, such as webinars, courses and conferences, including travel and accomodation.</li>
            <li><span className="bold">Self-education expenses:</span> If you are studying a course that is directly related to your work, you can claim tuition fees and textbooks.</li>
            <li><span className="bold">Vehicle expenses:</span> If you use your vehicle for work purposes, you may be able to claim expenses such as fuel, depreciation, insurance, interest on the financed amount, repairs and maintenance. You will either need to keep a log book for 12 weeks to show the percentage of work-related kilometres travelled, or you may use the cents per km method (if your travel is under 5,000 km for the year).</li>
            <li><span className="bold">Donations:</span> To a tax-deductible charity or a school/church building fund.</li>
          </ol>

          <p>It is important to keep accurate records and receipts of all work-related expenses to claim deductions on your tax return. It is also advisable to seek professional advice to ensure that you are claiming all the deductions that you are entitled to.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostNine;