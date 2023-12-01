import { useEffect } from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const PrivacyPolicy = () => {
  // Set the page's title
  document.title = "Privacy Policy | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content privacy-policy">
        <h1>Privacy Policy</h1>
        <div className="divider"></div>

        <h2 className="policy-heading">1. Purpose of the privacy policy</h2>
        <p>KL Accountants Pty Ltd (hereafter referred to as KLA) is committed to protecting the privacy of personal information obtained through our operations as a professional services firm. Due to the nature of our business we collect and hold confidential personal and commerical information.</p>

        <p>KLA is bound by the Privacy Act 1988 (Cth) (Privacy Act), including the Australian Privacy Principles (APPs) and any relevant privacy code registered under the Privacy Act.</p>

        <p>The General Data Protection Regulations (GDPR) regulations applicable to certain types of personal information of individuals residing in EU countries does not apply to us because we do not have an office in the EU and we do not conduct business or offer services in any EU country.</p>

        <p>Where KLA has EU-resident clients with business interests in Australia that directly or indirectly make them identifiable in our records as a natural person, please be advised our existing Privacy Policy applies.</p>

        <h2 className="policy-heading">2. Policy statement</h2>
        <p>The Australian Privacy Principles apply to personal information, that is, information or an opinion (whether true or not) relating to an identified individual or which can be used to identify that individual. Note that company information is not personal information. The principles, however, will apply to an individual who is carrying on a business as a sole trader.</p>

        <h2 className="policy-heading">3. The kinds of personal information we collect and hold</h2>
        <p>KLA collects personal information that is reasonably necessary for, or directly related to, its functions or activities, e.g. taxation advice and services, financial planning and similar business activities.</p>

        <p>The specific types of personal information KLA may collect and hold includes the following:</p>
        <ul>
          <li>Name, address, contact details and job titles</li>
          <li>Date of birth</li>
          <li>Tax File Number</li>
          <li>Australian Company Numbers and Australian Business Numbers</li>
          <li>Bank account details</li>
          <li>Certified photo identification as per 100 Point Check criteria</li>
          <li>Details of your income, expenses, assets and liabilities</li>
          <li>Nature of business</li>
          <li>Where relevant, family relationships and other business-related connections</li>
          <li>Financial records.</li>
        </ul>

        <p>KLA will collect personal information only by lawful and fair means. We do not collect any personal information other than information reasonably necessary for engagement in our primary activities.</p>

        <p>KLA may also use the information to send newsletters concerning various financial and taxation matters, invite you to seminars or events, and to inform you of developments at the firm. If you would like to opt out of receiving this type of information, please contact us. Our contact details are listed at the end of this document.</p>

        <p>We will never sell, rent or trade any of your personal information to a third party.</p>

        <h2 className="policy-heading">4. Third parties</h2>
        <p>We will only collect personal information from a third party if you have consented to such collection or you would reasonably expect us to collect the personal information in this way.</p>

        <p>Please be aware that KLA may have to disclose information to the following third parties: the Australian Taxation Office, ASIC, Centrelink, your solicitors, your bank and financial institutions, any related corporations or affiliate practices and any other organisations to which you normally disclose information of this kind.</p>

        <p>In addition to the above-named parties, there are other third parties which may, on occasion, have access to your personal information, such as IT technicians working onsite, or potential buyers carrying out due diligence on our practice.</p>

        <p>Should it be necessary for KLA to forward personal information to third parties outside the firm, we will make every effort to ensure that the confidentiality of the information is protected.</p>

        <h2 className="policy-heading">5. Securing your personal information</h2>
        <p>KLA is committed to maintaining the security and confidentiality of the data you provide us and we will take all reasonable precautions to protect your personal information from misuse or alteration.</p>

        <p>Your personal information will be held either physically in our offices or electronically. Our computers use firewalls and anti-virus protection. Also your personal information may be stored in Australia or overseas with the cloud service providers we use, including: Xero Australia Pty Ltd, Intuit Australia Pty Ltd (QuickBooks Online) and BGL Corporate Solutions Pty Ltd (for SMSFs).</p>

        <p>There are inherent risks in transmitting information across the internet and we do not have the ability to control the security of information collected and stored on third party platforms.</p>

        <h2 className="policy-heading">6. Accuracy of personal information</h2>
        <p>Our aim is to ensure that at all times your personal information is accurate, complete and current. If you discover any inaccurate or incomplete information, please contact us so that we can correct the information.</p>

        <h2 className="policy-heading">7. Discarding your personal information</h2>
        <p>KLA will hold any personal information used in the provision of your services for up to seven (7) years after completion of those services, after which all physical files will be destroyed. Digital data will be retained for a period of time.</p>

        <h2 className="policy-heading">8. Access to personal information</h2>
        <p>Under the Australian Privacy Principles, you have the right to request access to any personal information that we may hold about you and to advise us if the information should be corrected. The Australian Privacy Principles set out the circumstances when we can refuse those requests.</p>

        <p>Our policy is to provide written acknowledgement of our receipt of any request for access to personal information or a request for correction of personal information within 7 days of the request being received. We will then provide a written response within 30 days of our receipt of the request.</p>

        <h2 className="policy-heading">9. Contract personnel and trans-border data</h2>
        <p>From time to time, KLA may engage various staff and/or contract personnel who we consider appropriate for the completion of your work. This personnel will have access to your accounting and taxation records only for the purpose of completing the engagements agreed.</p>

        <h2 className="policy-heading">10. Privacy enquiries</h2>
        <p>If you would like to contact us with requests for access, or questions or complaints about our privacy policy, please write to us at:</p>
        <p className="address">Privacy Officer</p>
        <p className="address">KL Accountants Pty Ltd</p>
        <p className="address">Ground Floor,</p>
        <p className="address">470 St Kilda Road,</p>
        <p className="address">Melbourne VIC 3004</p>

        <p>We will respond to each request within a reasonable time.</p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;