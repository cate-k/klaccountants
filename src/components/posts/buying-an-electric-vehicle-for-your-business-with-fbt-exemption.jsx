import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwentySix = () => {
  // Set the page's title
  document.title = "Buying an Electric Vehicle for Your Business, with FBT Exemption | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty-six">
          <h1>Buying an Electric Vehicle for Your Business, with FBT Exemption</h1>
          <p className="date">June 10, 2024</p>
        </div>

        <div className="blog-content">
          <p>Normally if you buy a vehicle under your company name, primarily for your private use, then fringe benefits tax (FBT) will apply. The government has provided an exemption on FBT for electric vehicles (EVs) and their running costs. This is an ongoing scheme for now, with a government review expected in mid 2027.</p>

          <p>To be eligible, the car must be:</p>
          <ul>
            <li>a zero or low emissions vehicle.</li>
            <li>the first time the car is both held and is used on or after 1 July 2022.</li>
            <li>luxury car tax has not been paid before on the car. Currently the luxury car tax limit for EVs is $91,387 (inc GST) for 2024-2025.</li>
          </ul>

          <p>The following associated costs of running the car are also exempt from FBT:</p>
          <ul>
            <li>registration</li>
            <li>insurance</li>
            <li>repairs and maintenance</li>
            <li>fuel, including the electricity to charge EVs.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwentySix;