import { useEffect } from "react";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const FAQs = () => {
  // Set the page's title
  document.title = "FAQs | KLAccountants";

  useEffect(() => {
    // Automatically scroll to top on page load
    window.scrollTo(0, 0);
  });

  return (
    <div className="page">
      <Navigation />

      <div className="content privacy-policy">
        <h1>Frequently Asked Questions</h1>
        <div className="divider"></div>

        <h1 className="policy-heading">Questions on filing tax returns</h1>
        <h2 className="policy-heading">Who needs to file an individual tax return in Australia? </h2>
        <p>If you earned income during the financial year (1 July to 30 June) in Australia, you are likely required to file an individual tax return if your income is above the tax free threshold (currently $18,200). This includes residents, temporary residents and non-residents who own investment property in Australia.</p>

        <h2 className="policy-heading">When is the deadline to file a tax return in Australia?</h2>
        <p>If you are lodging your own tax return yourself, the deadline is 31 October following the 30 June end of financial year. If you are using a registered tax agent, the deadline is normally 15 May of the following year.</p>

        <h2 className="policy-heading">How long does it take to receive my tax refund after filing my tax return?</h2>
        <p>The processing time varies, but it usually takes around two weeks to receive your tax refund after your return has been lodged electronically.</p>

        <h2 className="policy-heading">What happens if I {`don't`} file my tax return?</h2>
        <p>Failure to lodge your tax return by the deadline can result in penalties and interest charges. In some cases, the ATO may also take legal action to recover any outstanding tax debt.</p>

        <h2 className="policy-heading">What if I made a mistake on my tax return?</h2>
        <p>If you make a mistake we can lodge an amended tax return with the ATO. Normally you have two years from the original notice of assessment to lodge your amended tax return.</p>

        <h2 className="policy-heading">How many years do I have to keep my tax records for?</h2>
        <p>Normally, you need to keep your tax information (bank statements, invoices, receipts, documentation, worksheets) for 5 years from the date you lodged your tax return.</p>

        <h2 className="policy-heading">What deductions can I claim on my individual tax return?</h2>
        <p>You can claim deductions that directly relate to earning your income. This includes work-related expenses such as subscriptions, tools, home office expenses, uniforms, travel expenses. You can also claim charitable donations and investment expenses on your shares, property or other investment assets. Please email us for a concise, comprehensive list of deductions that you can claim: <span className="number">mail@klaccountants.com.au</span></p>
        <br />

        <h1 className="policy-heading">Questions about accountants and tax agents</h1>
        <h2 className="policy-heading">How can a tax agent help me save money on taxes?</h2>
        <p>If {`you're`} an individual or business, a tax accountant can help you save money by providing advice on deductions and credits that you may be eligible for. We make sure you are complying with all tax laws and keep you updated with changes in government policy and laws. We also develop tax planning strategies that minimize your tax liability, taking into account your family or business group.</p>

        <h2 className="policy-heading">How much does it cost to hire an accountant firm in Australia?</h2>
        <p>The fees vary depending on the scope of services required and the complexity of your situation. Many firms offer different pricing models, including hourly rates or fixed fees.</p>

        <h2 className="policy-heading">How often should I speak with my tax accountant?</h2>
        <p>The frequency of contact depends on your particular situation and its complexity. Typically, it is recommended to meet with your accountant at least once a year so that you are updated as to relevant laws and get advice on tax planning strategies. Nowadays a lot of catch ups are done online or over the phone. Our regular newsletter keeps you updated on particular topics related to tax, finance, investments, insurance, or retirement.</p>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;