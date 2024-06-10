import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentyFive = () => {
  // Set the page's title
  document.title = "ATO Tax Rate Changes from 1 July 2024 | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-five">
          <h1>ATO Tax Rate Changes from 1 July 2024</h1>
          <p className="date">June 10, 2024</p>
        </div>

        <div className="blog-content">
          <p>ATO tax rates are changing from 1 July 2024. You can compare the changes from 2024-25 to the current tax rates in 2023-24 in the tables below:</p>

          <h3>Resident Tax Rates 2024-25</h3>
          <table className="blog-post-table">
            <tr>
              <th>Taxable Income</th>
              <th>Tax on this Income</th>
            </tr>
            <tr>
              <td>0 - $18,200</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>$18,201 - $45,000</td>
              <td>16c for each $1 over $18,200</td>
            </tr>
            <tr>
              <td>$45,001 - $135,000</td>
              <td>$4,288 plus 30c for each $1 over $45,000</td>
            </tr>
            <tr>
              <td>$135,001 - $190,000</td>
              <td>$31,288 plus 37c for each $1 over $135,000</td>
            </tr>
            <tr>
              <td>$190,001 and over</td>
              <td>$51,638 plus 45c for each $1 over $190,000</td>
            </tr>
          </table>
          <p>The above rates <span className="bold">do not</span> include the Medicare levy of 2%.</p>
          <p className="new-line"><br /></p>

          <h3>Resident Tax Rates 2023-24</h3>
          <table className="blog-post-table">
            <tr>
              <th>Taxable Income</th>
              <th>Tax on this Income</th>
            </tr>
            <tr>
              <td>0 - $18,200</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>$18,201 - $45,000</td>
              <td>19c for each $1 over $18,200</td>
            </tr>
            <tr>
              <td>$45,001 - $120,000</td>
              <td>$5,092 plus 32.5c for each $1 over $45,000</td>
            </tr>
            <tr>
              <td>$120,001 - $180,000</td>
              <td>$29,467 plus 37c for each $1 over $120,000</td>
            </tr>
            <tr>
              <td>$180,001 and over</td>
              <td>$51,667 plus 45c for each $1 over $180,000</td>
            </tr>
          </table>
          <p>The above rates <span className="bold">do not</span> include the Medicare levy of 2%.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentyFive;