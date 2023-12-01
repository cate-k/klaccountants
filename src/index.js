import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import TagManager from "react-gtm-module";
import "./index.scss";

import Home from "./components/home";
import AboutUs from "./components/about-us";
import Blog from "./components/blog";
import Services from "./components/services";
import FAQs from "./components/faqs";
import FreeResources from "./components/free-resources";
import ContactUs from "./components/contact-us";
import PrivacyPolicy from "./components/privacy-policy";

import ServicesOne from "./components/services-info/personal-tax-returns-for-individuals-and-sole-traders";
import ServicesTwo from "./components/services-info/small-business-accounting-and-tax";
import ServicesThree from "./components/services-info/company-structure-and-tax-returns";
import ServicesFour from "./components/services-info/trust-tax-returns";
import ServicesFive from "./components/services-info/smsfs-accounting-and-compliance";
import ServicesSix from "./components/services-info/life-insurance-and-income-protection-insurance";
import ServicesSeven from "./components/services-info/virtual-cfo-and-outsourced-accountant-plans";

import BlogPostOne from "./components/posts/a-reminder-on-superannuation-contributions-cap-for-2021-2022";
import BlogPostTwo from "./components/posts/single-touch-payroll-stp-phase-2-for-businesses-with-employees";
import BlogPostThree from "./components/posts/financial-resolutions-for-the-new-year";
import BlogPostFour from "./components/posts/company-directors-need-to-apply-for-a-new-director-id";
import BlogPostFive from "./components/posts/end-of-financial-year-2022-reminders";
import BlogPostSix from "./components/posts/some-considerations-from-1-july-2022";
import BlogPostSeven from "./components/posts/how-bad-can-it-get-managing-risk-in-a-bear-market";
import BlogPostEight from "./components/posts/downsizer-superannuation-contributions-changes";
import BlogPostNine from "./components/posts/most-common-tax-deductions-for-wage-employees";
import BlogPostTen from "./components/posts/self-managed-superannuation-funds-vs-industry-superannuation-funds";
import BlogPostEleven from "./components/posts/reviewing-your-life-and-income-protection-insurance-needs";
import BlogPostTwelve from "./components/posts/revised-fixed-rate-method-for-calculating-work-from-home-deductions";
import BlogPostThirteen from "./components/posts/small-business-owners-get-instant-asset-write-off-before-30-june-2023";
import BlogPostFourteen from "./components/posts/proposed-government-changes-to-superannuation-for-balances-over-3-million";
import BlogPostFifteen from "./components/posts/end-of-financial-year-tax-planning";
import BlogPostSixteen from "./components/posts/some-key-takeaways-from-the-federal-budget-of-9-may-2023";
import BlogPostSeventeen from "./components/posts/10-reasons-owning-your-home-beats-super";
import BlogPostEighteen from "./components/posts/why-do-60-of-small-businesses-fail-in-their-first-three-years";
import BlogPostNineteen from "./components/posts/when-should-you-change-your-business-from-a-sole-trader-to-a-company-structure";
import BlogPostTwenty from "./components/posts/how-to-spot-scammers-impersonating-the-australian-tax-office";
import BlogPostTwentyOne from "./components/posts/property-investors-take-note";
import BlogPostTwentyTwo from "./components/posts/setting-up-a-foreign-company-in-a-low-tax-country";
import BlogPostTwentyThree from "./components/posts/proposed-tax-on-super-balances-over-3m";
import BlogPostTwentyFour from "./components/posts/small-business-20k-instant-asset-write-off-until-30-june-2024";

const tagManagerArgs = {
  // Add GTM container ID
  gtmId: process.env.REACT_APP_GTM_ID
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename="/">
    <Switch>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/blog" render={(props) => <Blog {...props} />} />
      <Route path="/services" render={(props) => <Services {...props} />} />
      <Route path="/faqs" render={(props) => <FAQs {...props} />} />
      <Route path="/free-resources" render={(props) => <FreeResources {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/privacy-policy" render={(props) => <PrivacyPolicy {...props} />} />

      <Route path="/personal-tax-returns-for-individuals-and-sole-traders" render={(props) => <ServicesOne {...props} />} />
      <Route path="/small-business-accounting-and-tax" render={(props) => <ServicesTwo {...props} />} />
      <Route path="/company-structure-and-tax-returns" render={(props) => <ServicesThree {...props} />} />
      <Route path="/trust-tax-returns" render={(props) => <ServicesFour {...props} />} />
      <Route path="/smsfs-accounting-and-compliance" render={(props) => <ServicesFive {...props} />} />
      <Route path="/life-insurance-and-income-protection-insurance" render={(props) => <ServicesSix {...props} />} />
      <Route path="/virtual-cfo-and-outsourced-accountant-plans" render={(props) => <ServicesSeven {...props} />} />

      <Route path="/a-reminder-on-superannuation-contributions-cap-for-2021-2022" render={(props) => <BlogPostOne {...props} />} />
      <Route path="/single-touch-payroll-stp-phase-2-for-businesses-with-employees" render={(props) => <BlogPostTwo {...props} />} />
      <Route path="/financial-resolutions-for-the-new-year" render={(props) => <BlogPostThree {...props} />} />
      <Route path="/company-directors-need-to-apply-for-a-new-director-id" render={(props) => <BlogPostFour {...props} />} />
      <Route path="/end-of-financial-year-2022-reminders" render={(props) => <BlogPostFive {...props} />} />
      <Route path="/some-considerations-from-1-july-2022" render={(props) => <BlogPostSix {...props} />} />
      <Route path="/how-bad-can-it-get-managing-risk-in-a-bear-market" render={(props) => <BlogPostSeven {...props} />} />
      <Route path="/downsizer-superannuation-contributions-changes" render={(props) => <BlogPostEight {...props} />} />
      <Route path="/most-common-tax-deductions-for-wage-employees" render={(props) => <BlogPostNine {...props} />} />
      <Route path="/self-managed-superannuation-funds-vs-industry-superannuation-funds" render={(props) => <BlogPostTen {...props} />} />
      <Route path="/reviewing-your-life-and-income-protection-insurance-needs" render={(props) => <BlogPostEleven {...props} />} />
      <Route path="/revised-fixed-rate-method-for-calculating-work-from-home-deductions" render={(props) => <BlogPostTwelve {...props} />} />
      <Route path="/small-business-owners-get-instant-asset-write-off-before-30-june-2023" render={(props) => <BlogPostThirteen {...props} />} />
      <Route path="/proposed-government-changes-to-superannuation-for-balances-over-3-million" render={(props) => <BlogPostFourteen {...props} />} />
      <Route path="/end-of-financial-year-tax-planning" render={(props) => <BlogPostFifteen {...props} />} />
      <Route path="/some-key-takeaways-from-the-federal-budget-of-9-may-2023" render={(props) => <BlogPostSixteen {...props} />} />
      <Route path="/10-reasons-owning-your-home-beats-super" render={(props) => <BlogPostSeventeen {...props} />} />
      <Route path="/why-do-60-of-small-businesses-fail-in-their-first-three-years" render={(props) => <BlogPostEighteen {...props} />} />
      <Route path="/when-should-you-change-your-business-from-a-sole-trader-to-a-company-structure" render={(props) => <BlogPostNineteen {...props} />} />
      <Route path="/how-to-spot-scammers-impersonating-the-australian-tax-office" render={(props) => <BlogPostTwenty {...props} />} />
      <Route path="/property-investors-take-note" render={(props) => <BlogPostTwentyOne {...props} />} />
      <Route path="/setting-up-a-foreign-company-in-a-low-tax-country" render={(props) => <BlogPostTwentyTwo {...props} />} />
      <Route path="/proposed-tax-on-super-balances-over-3m" render={(props) => <BlogPostTwentyThree {...props} />} />
      <Route path="/small-business-20k-instant-asset-write-off-until-30-june-2024" render={(props) => <BlogPostTwentyFour {...props} />} />

      <Redirect to="/home" />
    </Switch>
  </HashRouter>
);