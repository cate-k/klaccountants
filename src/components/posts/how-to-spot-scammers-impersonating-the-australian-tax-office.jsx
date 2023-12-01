import { useEffect } from "react";

import Navigation from "../sub-components/navigation";
import Footer from "../sub-components/footer";

const BlogPostTwenty = () => {
  // Set the page's title
  document.title = "How to Spot Scammers Impersonating the Australian Tax Office | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content">
        <div className="blog-post-bg-img blog-post-twenty">
          <h1>How to Spot Scammers Impersonating the Australian Tax Office</h1>
          <p className="date">June 28, 2023</p>
        </div>

        <div className="blog-content">
          <p>Nowadays, especially at the end of financial year, many scammers try to impersonate the ATO. {`Here's`} some tips to spot them and protect yourself from being scammed.</p>
          <ol>
            <li><span className="bold">Be careful of phishing links through unsolicited emails, text messages or social media messages.</span> Check the source whether it is from a verified ATO account. The ATO never sends you a link to login to their online services. Scammers send these fake links to you to steal your myGov login details. You need to access ATO services directly via <a
              href="https://ato.gov.au"
              target="_blank"
              rel="noreferrer"
            >
              ato.gov.au
            </a> or <a
              href="https://ato.gov.au"
              target="_blank"
              rel="noreferrer"
            >
              my.gov.au
            </a> or through the ATO app.</li>
            <li><span className="bold">Beware of phone calls from people impersonating the ATO.</span> They will try to collect as much personal information as they can over the phone. Instead, call the ATO directly using the official phone number listed on their <a
              href="https://ato.gov.au"
              target="_blank"
              rel="noreferrer"
            >
              ato.gov.au
            </a> website.</li>
            <li><span className="bold">Beware of threats and urgent legal demands.</span> The ATO does not demand instant payment and payment details over the phone or email, nor threaten suspension of services or legal action unless the debt is paid now. Scammers try to create a sense of urgency for you to give them your payment details now.</li>
            <li><span className="bold">Protect your personal identification and financial information:</span> tax file number, bank or credit card details. The ATO will not ask you for this information over the phone, email or text message.</li>
            <li><span className="bold">Check for inconsistencies or grammatical errors in their ATO branding on emails or website design.</span> It is most likely a scam.</li>
            <li><span className="bold">Report suspicious activity to the ATO through their official website.</span></li>
          </ol>

          <p>Talk to your tax agent or ATO directly if you have any doubts. {`It's`} better to be cautious than to be scammed.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostTwenty;