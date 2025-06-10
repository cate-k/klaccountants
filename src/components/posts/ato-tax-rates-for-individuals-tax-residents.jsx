import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtySix = () => {
  // Set the page's title
  document.title = "ATO Tax Rates for Individuals (Tax Residents) | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-six">
          <h1>ATO Tax Rates for Individuals (Tax Residents)</h1>
          <p className="date">June 10, 2025</p>
        </div>

        <div className="blog-content">
          <h3>Tax Rates 2025-2026 Year</h3>
          <p>The 2026 financial year starts on 1 July 2025 and ends on 30 June 2026.</p>

          <h4>Tax Scale 2025-26 (per Stage 3 tax cuts as adjusted)</h4>
          <table className="blog-post-table centred">
            <tr>
              <th>Taxable Income</th>
              <th>Tax On This Income</th>
            </tr>
            <tr>
              <td>0 to $18,200</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>$18,201 to $45,000</td>
              <td>16c for each $1 over $18,200</td>
            </tr>
            <tr>
              <td>$45,000 to $135,000</td>
              <td>$4,288 plus 30c for each $1 over $45,000</td>
            </tr>
            <tr>
              <td>$135,000 to $190,000</td>
              <td>$31,288 plus 37% for each $1 over $135,000</td>
            </tr>
            <tr>
              <td>Over $190,000</td>
              <td>$51,638 plus 45% for each $1 over $190,000</td>
            </tr>
          </table>
          <p className="new-line"><br /></p>
          <p className="new-line"><br /></p>

          <h3>Tax Rates 2024-2025 Year (Residents)</h3>
          <p>The 2025 financial year starts on 1 July 2024 and ends on 30 June 2025. The financial year for tax purposes for individuals starts on 1st July and ends on 30 June of the following year.</p>

          <h4>Tax Scale 2024-25 (Stage 3 tax cuts as adjusted)</h4>
          <table className="blog-post-table centred">
            <tr>
              <th>Taxable Income</th>
              <th>MTR 2025 and Tax On Income</th>
            </tr>
            <tr>
              <td>0 to $18,200</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>$18,201 to $45,000</td>
              <td>16c for each $1 over $18,200</td>
            </tr>
            <tr>
              <td>$45,000 to $135,000</td>
              <td>$4,288 plus 30c for each $1 over $45,000</td>
            </tr>
            <tr>
              <td>$135,000 to $190,000</td>
              <td>$31,288 plus 37% for each $1 over $135,000</td>
            </tr>
            <tr>
              <td>Over $190,000</td>
              <td>$51,638 plus 45% for each $1 over $190,000</td>
            </tr>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtySix;