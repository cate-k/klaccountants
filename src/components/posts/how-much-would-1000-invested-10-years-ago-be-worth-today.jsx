import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostThirtyOne = () => {
  // Set the page's title
  document.title = "How Much Would $1,000 Invested 10 Years Ago be Worth Today in Bitcoin, Gold, Stocks and Property? | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-thirty-one">
          <h1>How Much Would $1,000 Invested 10 Years Ago be Worth Today in Bitcoin, Gold, Stocks and Property?</h1>
          <p className="date">December 4, 2024</p>
        </div>

        <div className="blog-content">
          <p>If you had invested $1,000 ten years ago in growth assets, the tables below show you how much that USD $1,000 or AUD $1,000 would be worth today (in the yellow column).</p>

          <p>The tables below do not take into account dividend reinvestments, stock splits, and other corporate actions, nor the use of borrowings to magnify gains. This is just a buy and hold strategy and involves no trading.</p>

          <p>The standout winners are Bitcoin and Nvidia stock, if you had the foresight to invest in any of them during the past 10 years. (Note this is not financial advice to buy any of these assets, and past returns is no indication of future performance).</p>
          <p className="new-line"><br /></p>

          <table className="blog-post-table centred">
            <tr>
              <th>In USD Dollars</th>
              <th>Price on 30 Nov 2014 in USD (10 years ago)</th>
              <th>Price on 30 Nov 2024 in USD</th>
              <th>Percentage Increase %</th>
              <th className="row-orange-bg">30/11/2024 Value of USD $1,000 invested 10 years ago</th>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>320.00</td>
              <td>96,833.00</td>
              <td>30,160.31</td>
              <td className="row-orange-bg">302,603.13</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>1,184.50</td>
              <td>2,650.25</td>
              <td>123.74</td>
              <td className="row-orange-bg">2,237.44</td>
            </tr>
            <tr>
              <td>S&P 500 (US Stocks)</td>
              <td>2,084.96</td>
              <td>6032.39</td>
              <td>189.33</td>
              <td className="row-orange-bg">2,893.29</td>
            </tr>
            <tr>
              <td>Nasdaq (US Tech Stocks)</td>
              <td>4,156.56</td>
              <td>20,930.37</td>
              <td>403.55</td>
              <td className="row-orange-bg">5,035.50</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="row-orange-bg"></td>
            </tr>
            <tr>
              <th>Top 7 US stocks by market capitalisation:</th>
              <th></th>
              <th></th>
              <th></th>
              <th className="row-orange-bg"></th>
            </tr>
            <tr>
              <td>Apple</td>
              <td>26.48</td>
              <td>237.33</td>
              <td>796.26</td>
              <td className="row-orange-bg">8,962.61</td>
            </tr>
            <tr>
              <td>Nvidia</td>
              <td>0.52</td>
              <td>138.25</td>
              <td>26,486.54</td>
              <td className="row-orange-bg">265,865.38</td>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>47.81</td>
              <td>432.46</td>
              <td>804.54</td>
              <td className="row-orange-bg">9,045.39</td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td>16.93</td>
              <td>207.89</td>
              <td>1,127.94</td>
              <td className="row-orange-bg">12,279.39</td>
            </tr>
            <tr>
              <td>Alphabet (Google)</td>
              <td>27.02</td>
              <td>170.49</td>
              <td>530.98</td>
              <td className="row-orange-bg">6,309.77</td>
            </tr>
            <tr>
              <td>Meta (Facebook)</td>
              <td>77.70</td>
              <td>574.32</td>
              <td>639.15</td>
              <td className="row-orange-bg">7,391.51</td>
            </tr>
            <tr>
              <td>Tesla</td>
              <td>16.30</td>
              <td>345.16</td>
              <td>2,017.55</td>
              <td className="row-orange-bg">21,175.46</td>
            </tr>
          </table>
          <p className="new-line"><br /></p>
          <p className="new-line"><br /></p>

          <table className="blog-post-table centred">
            <tr>
              <th>In Australian Dollars</th>
              <th>Price on 30 Nov 2014 in AUD (10 years ago)</th>
              <th>Price on 30 Nov 2024 in USD</th>
              <th>Percentage Increase %</th>
              <th className="row-orange-bg">30/11/2024 Value of AUD $1,000 invested 10 years ago</th>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>375.92</td>
              <td>148,395.20</td>
              <td>39,375.21</td>
              <td className="row-orange-bg">394,752.07</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>1,385.00</td>
              <td>4,090.20</td>
              <td>195.32</td>
              <td className="row-orange-bg">2,953.21</td>
            </tr>
            <tr>
              <td>Aust All Ordinaries Share Index</td>
              <td>5,286.50</td>
              <td>8,699.10</td>
              <td>64.55</td>
              <td className="row-orange-bg">1,645.53</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="row-orange-bg"></td>
            </tr>
            <tr>
              <th>Top 4 Australian shares by market capitalisation:</th>
              <th></th>
              <th></th>
              <th></th>
              <th className="row-orange-bg"></th>
            </tr>
            <tr>
              <td>Commonwealth Bank of Aust</td>
              <td>79.92</td>
              <td>158.58</td>
              <td>98.42</td>
              <td className="row-orange-bg">1,984.23</td>
            </tr>
            <tr>
              <td>BHP Group</td>
              <td>24.71</td>
              <td>40.57</td>
              <td>64.18</td>
              <td className="row-orange-bg">1,641.85</td>
            </tr>
            <tr>
              <td>CSL</td>
              <td>79.68</td>
              <td>282.22</td>
              <td>254.19</td>
              <td className="row-orange-bg">3,541.92</td>
            </tr>
            <tr>
              <td>National Aust Bank</td>
              <td>30.91</td>
              <td>39.10</td>
              <td>26.50</td>
              <td className="row-orange-bg">1,264.96</td>
            </tr>
          </table>
          <p className="new-line"><br /></p>
          <p className="new-line"><br /></p>

          <table className="blog-post-table centred">
            <tr>
              <th></th>
              <th>Price in March 2014 in AUD</th>
              <th>Price in June 2024 in AUD</th>
              <th>Percentage Increase %</th>
            </tr>
            <tr>
              <td>Melbourne house price growth</td>
              <td>634,921.00</td>
              <td>1,261,070.00</td>
              <td>98.62</td>
            </tr>
            <tr>
              <td>Average Sydney property price</td>
              <td>962,965.00</td>
              <td>1,924,710.00</td>
              <td>99.87</td>
            </tr>
            <tr>
              <td>Source: <a
                  href="https://propertyupdate.com.au/house-prices-in-australia-over-the-last-10-years/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://propertyupdate.com.au/house-prices-in-australia-over-the-last-10-years/
                </a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostThirtyOne;