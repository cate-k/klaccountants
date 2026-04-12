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

        <p>
          This Privacy Policy outlines how KL Accountants Pty Ltd ACN 618 931
          178 as trustee for KLA Unit Trust ABN 33 196 881 289 (hereafter
          referred to as KLA, {`"we"`}, {`"us"`}, or {`"our"`}) complies with
          its obligations under the Privacy Act 1988 (Cth) (Privacy Act), and
          the Anti-Money Laundering and Counter-Terrorism Financing Act 2006
          (Cth) (AML/CTF Act), particularly in light of the Tranche 2 reforms
          effective from 1 July 2026. As a reporting entity under the AML/CTF
          Act, we are required to comply with the Privacy Act in relation to all
          personal information collected for AML/CTF purposes, regardless of our
          annual turnover.
        </p>

        <p>
          We are committed to protecting the privacy of our clients and ensuring
          that personal information is collected, used, disclosed, stored, and
          destroyed in accordance with the Australian Privacy Principles (APPs)
          and our AML/CTF obligations.
        </p>

        <p>
          The General Data Protection Regulations (GDPR) regulations applicable
          to certain types of personal information of individuals residing in EU
          countries does not apply to us because we do not have an office in the
          EU and we do not conduct business or offer services in any EU country.
        </p>

        <p>
          Where KLA has EU-resident clients with business interests in Australia
          that directly or indirectly make them identifiable in our records as a
          natural person, please be advised our existing Privacy Policy applies.
        </p>

        <h2 className="policy-heading">1. Scope of This Policy</h2>
        <p>
          This policy applies to all personal information collected, held, used,
          and disclosed by KLA in connection with:
        </p>
        <ul>
          <li>Providing designated services under the AML/CTF Act;</li>
          <li>
            Conducting customer due diligence (CDD) and ongoing monitoring;
          </li>
          <li>
            Complying with record-keeping and reporting obligations to AUSTRAC;
          </li>
          <li>Managing our business operations and client relationships.</li>
        </ul>

        <p>
          It covers all clients, prospective clients, beneficial owners, and
          associated persons whose personal information we handle.
        </p>

        <h2 className="policy-heading">
          2. Collection of Personal Information
        </h2>
        <p>We collect personal information that is reasonably necessary to:</p>
        <ul>
          <li>Verify the identity of clients and associated persons;</li>
          <li>
            Assess and manage money laundering and terrorism financing (ML/TF)
            risks;
          </li>
          <li>Comply with our obligations under the AML/CTF Act;</li>
          <li>Provide our professional accounting and advisory services.</li>
        </ul>

        <p className="bold">Types of Information Collected:</p>
        <ul>
          <li>Full name, date of birth, residential address;</li>
          <li>Contact details (email, phone number);</li>
          <li>Tax file number (TFN), Australian Business Number (ABN);</li>
          <li>
            Government-issued identification details (e.g., passport or{" "}
            {`driver's`} licence number, issuing country, expiry date);
          </li>
          <li>Occupation, source of funds, and financial information;</li>
          <li>Beneficial ownership information for corporate clients;</li>
          <li>Biometric verification data (if used, with consent).</li>
        </ul>

        <p>
          We only collect information that a reasonable, properly informed
          person would consider necessary for these purposes (APP 3.2). We do
          not collect full copies of identification documents unless required by
          another law.
        </p>

        <p>
          KLA may also use the information to send newsletters concerning
          various financial and taxation matters, invite you to seminars or
          events, and to inform you of developments at the firm. If you would
          like to opt out of receiving this type of information, please contact
          us. Our contact details are listed at the end of this document.
        </p>

        <p>
          We will never sell, rent or trade any of your personal information to
          a third party.
        </p>

        <h2 className="policy-heading">3. How We Collect Information</h2>
        <p>Personal information is collected:</p>
        <ul>
          <li>
            Directly from individuals during onboarding or service provision;
          </li>
          <li>
            Through secure online portals or verification platforms (e.g.,
            Document Verification Service - DVS);
          </li>
          <li>
            From authorised representatives or third parties (with consent where
            required);
          </li>
          <li>
            Via biometric verification tools, only with explicit and standalone
            consent.
          </li>
        </ul>

        <p>
          We do not collect sensitive information (e.g., biometric data) without
          consent, except where strictly authorised by law. If consent is not
          provided, alternative verification methods will be used.
        </p>

        <h2 className="policy-heading">
          4. Use and Disclosure of Personal Information
        </h2>
        <p>We use personal information for the following purposes:</p>
        <ul>
          <li>
            Performing customer due diligence (CDD) and ongoing monitoring;
          </li>
          <li>Verifying identity and assessing ML/TF risk;</li>
          <li>
            Preparing and lodging reports to AUSTRAC (e.g., Suspicious Matter
            Reports - SMRs);
          </li>
          <li>Managing client accounts and delivering services;</li>
          <li>Complying with legal and regulatory obligations.</li>
        </ul>

        <p className="bold">Disclosure to Third Parties:</p>
        <ul>
          <li>
            <span className="bold">AUSTRAC:</span> We may disclose information
            as required by the AML/CTF Act.
          </li>
          <li>
            <span className="bold">Third-party service providers:</span>{" "}
            Australian Taxation Office, ASIC, your solicitors, your bank and
            financial institutions, cloud storage, IT support, and identity
            verification platforms, subject to contractual privacy and security
            obligations, potential buyers carrying out due diligence on our
            practice, and any other organisations to which you normally disclose
            information of this kind.
          </li>
          <li>
            <span className="bold">Other professional advisors:</span> Only with
            client consent or as permitted by law.
          </li>
        </ul>

        <p>
          Should it be necessary for KLA to forward personal information to
          third parties outside the firm, we will make every effort to ensure
          that the confidentiality of the information is protected.
        </p>

        <p>
          We will only collect personal information from a third party if you
          have consented to such collection or you would reasonably expect us to
          collect the personal information in this way.
        </p>

        <p>
          We do not trade in personal information or disclose it for marketing
          purposes without consent.
        </p>

        <h2 className="policy-heading">5. Tipping-Off Prohibitions</h2>
        <p>
          We are prohibited under the AML/CTF Act from disclosing the existence
          of a Suspicious Matter Report (SMR) or other compliance activity to
          the client ({`"tipping off"`}). Therefore, we may not provide a
          collection notice or respond to access requests if doing so would
          breach these prohibitions.
        </p>

        <h2 className="policy-heading">6. Data Retention and Destruction</h2>
        <p>
          Under the AML/CTF Act, we must retain records for{" "}
          <span className="bold">seven years</span> after the end of the
          business relationship or last transaction. These include:
        </p>
        <ul>
          <li>
            Records of identity verification (e.g., document type, number,
            verification date);
          </li>
          <li>Risk assessments and CDD decisions;</li>
          <li>Transaction records and SMRs.</li>
        </ul>

        <p>
          We{" "}
          <span className="bold">
            do not retain full copies of identification documents
          </span>{" "}
          (e.g., scanned passports or {`driver's`} licences) unless required by
          another law. Instead, we record only the minimum necessary information
          (e.g., name, DOB, document number).
        </p>

        <p>
          After the retention period, all personal information is securely
          destroyed or de-identified in accordance with APP 11.
        </p>

        <h2 className="policy-heading">7. Data Security</h2>
        <p>
          We take reasonable steps to protect personal information from misuse,
          interference, loss, and unauthorised access, modification, or
          disclosure. Measures include:
        </p>
        <ul>
          <li>Secure cloud storage with encryption;</li>
          <li>Password protection;</li>
          <li>Staff training on privacy and AML/CTF obligations.</li>
        </ul>

        <p>
          We comply with the mandatory data breach notification scheme under the
          Privacy Act.
        </p>

        <p>
          Your personal information will be held either physically in our
          offices or electronically. Also your personal information may be
          stored in Australia or overseas with the cloud service providers we
          use, including: Xero Australia Pty Ltd, Intuit Australia Pty Ltd
          (QuickBooks Online), Lodge It Pty Ltd and BGL Corporate Solutions Pty
          Ltd (for SMSFs).
        </p>

        <p>
          There are inherent risks in transmitting information across the
          internet and we do not have the ability to control the security of
          information collected and stored on third party platforms.
        </p>

        <h2 className="policy-heading">8. Access and Correction</h2>
        <p>
          Individuals may request access to or correction of their personal
          information under APP 12 and 13, unless:
        </p>
        <ul>
          <li>The request would disclose a confidential business process;</li>
          <li>Providing access would breach a tipping-off prohibition;</li>
          <li>The information is subject to legal professional privilege.</li>
        </ul>

        <p>
          Requests should be made in writing to our Privacy Officer. We will
          respond within 30 days.
        </p>

        <h2 className="policy-heading">
          9. Contract Personnel and Trans-Border Data
        </h2>
        <p>
          From time to time, KLA may engage various staff and/or contract
          personnel who we consider appropriate for the completion of your work.
          This personnel will have access to your accounting and taxation
          records only for the purpose of completing the engagements agreed.
        </p>

        <h2 className="policy-heading">10. Cross-Border Disclosure</h2>
        <p>
          We do not typically disclose personal information to overseas
          recipients. If required (e.g., for cloud storage), we ensure the
          recipient is bound by equivalent privacy protections or that an
          exception under APP 8 applies.
        </p>

        <h2 className="policy-heading">11. Small Business Exemption</h2>
        <p>
          Although we are a small business, the small business exemption in the
          Privacy Act <span className="bold">does not apply</span> to our
          AML/CTF-related activities. We are fully bound by the APPs for all
          personal information collected for AML/CTF purposes.
        </p>

        <h2 className="policy-heading">12. Changes to This Policy</h2>
        <p>
          This policy will be reviewed annually or when there are changes to
          AML/CTF or privacy laws. Updates will be published on our website.
        </p>

        <h2 className="policy-heading">13. Contact Us</h2>
        <p>
          For privacy-related inquiries, complaints, or access requests, please
          contact:
        </p>

        <p className="address">Privacy Officer</p>
        <p className="address">KL Accountants Pty Ltd</p>
        <p className="address">Ground Floor, 470 St Kilda Road</p>
        <p className="address">Melbourne VIC 3004</p>

        <p>
          <span className="bold">Email:</span> mail@klaccountants.com.au
        </p>

        <p>
          Complaints not resolved internally may be referred to the Office of
          the Australian Information Commissioner (OAIC).
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
