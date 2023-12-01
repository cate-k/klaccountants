import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { X, DollarSign, Clock, Book, Database, TrendingUp, Cloud, Check, Home as House, Send, BookOpen } from "react-feather";
import emailjs from "emailjs-com";

import Navigation from "./sub-components/navigation";
import Footer from "./sub-components/footer";

const Home = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isPopUpClosed, setPopUpClosed] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const form = useRef();

  // Set the page's title
  document.title = "Home | KLAccountants";

  useEffect(() => {
    let slideIndex = 0;

    const init = async () => {
      // Automatically scroll to top on page load
      window.scrollTo(0, 0);

      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
          slideIndex = 1
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 6500);
      }

      // Automatic pop-up
      let closeBtn = document.getElementById("close-btn");

      // The pop-up opens after 3 seconds
      setTimeout(() => {
        setPopUpOpen(true);
      }, 3000);

      // Close the pop-up
      closeBtn.addEventListener("click", () => {
        setPopUpOpen(false);
        setPopUpClosed(true);
      });
    };

    init();
  });

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(() => {
      setHasJoined(true);
    }, (err) => {
      console.log(err.text);
    });
  };

  return (
    <div className="page">
      <Navigation />

      <div className="content home">
        <div className={"pop-up " + (isPopUpOpen ? "pop-up-open" : "") + (isPopUpClosed ? "pop-up-hide" : "")}>
          <div className="pop-up-card">
            <button id="close-btn">
              <X />
            </button>

            <div className="pop-up-content">
              <div className={(hasJoined ? "pop-up-hide" : "")}>
                <h3>Join Our Newsletter</h3>
                <p>Enter your name and email address below, and we will email our free, concise list of deductions that you can claim to reduce your tax. Plus we will email our regular newsletter to you to keep you up to date.</p>

                <form ref={form} onSubmit={sendEmail}>
                  <input
                    className="name-field"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    className="email-field"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />

                  <input className="submit-email" type="submit" value="Subscribe" />

                  <p className="pop-up-disclaimer">We {`won't`} spam! You can unsubscribe at any time.</p>
                </form>
              </div>

              <div className={(hasJoined ? "" : "pop-up-hide")}>
                <h3>Thank you for joining!</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-img">
          <h1>Your Trusted Tax Accountants & Business Advisers</h1>
        </div>

        <h2 className="home-heading">{`WE'RE`} TAXATION ACCOUNTANTS & BUSINESS CFOs</h2>
        <h3 className="home-sub-heading">{`We're`} Here to Help You with Your Tax Returns and Tax Advice</h3>
        <p>You get an experienced professional personally dedicated to you - your tax and business needs. {`We're`} passionate to build an ongoing, long term relationship with you, plus {`you'll`} receive prompt responses to your phone calls and emails. Even with complex work, we will get you results in a timely and professional way.</p>

        <p>For SME businesses, we offer a <Link to="/virtual-cfo-and-outsourced-accountant-plans">Virtual CFO package</Link> so that your business can have the services of a CFO outsourced at a fraction of the cost.</p>

        <p>Whether {`it's`} for your {`family's`} tax planning, business accounting, or you want to know the tax implications on selling a property, or you want advice on your super and retirement planning - {`we're`} here to help you.</p>

        <div className="info-boxes">
          <div className="info-row">
            <div className="info-box">
              <div className="info-icon-container">
                <DollarSign className="info-icon" />
              </div>
              <h2 className="info-heading">Maximise Your Tax Return</h2>
              <p>{`We'll`} do our utmost to find ways to <Link to="/personal-tax-returns-for-individuals-and-sole-traders">
                save you time and money.
              </Link></p>
            </div>

            <div className="info-box">
              <div className="info-icon-container">
                <Clock className="info-icon" />
              </div>
              <h2 className="info-heading">Affordable, Timely Responses from an Accountant Near You</h2>
              <p>
                <Link to="/about-us">
                  An experienced accountant is constantly on hand to take your call;
                </Link> otherwise we will reply to your message within 24 hours.
              </p>
            </div>

            <div className="info-box">
              <div className="info-icon-container">
                <Book className="info-icon" />
              </div>
              <h2 className="info-heading">Simplify your Business Accounting, BAS, ASIC and ATO Lodgments</h2>
              <p>
                We can streamline your compliance obligations - anything from <Link to="/small-business-accounting-and-tax">
                  business activity statements to ASIC requirements and ATO lodgements.
                </Link>
              </p>
            </div>
          </div>

          <div className="info-row">
            <div className="info-box">
              <div className="info-icon-container">
                <Database className="info-icon" />
              </div>
              <h2 className="info-heading">Company, Trust, Partnership or Sole Trader - Structures to Grow Your Business</h2>
              <p>
                <Link to="/company-structure-and-tax-returns">{`We'll`} give you strong, strategic advice and help you with set up</Link> and ongoing advice.
              </p>
            </div>

            <div className="info-box">
              <div className="info-icon-container">
                <TrendingUp className="info-icon" />
              </div>
              <h2 className="info-heading">Superannuation and Retirement Planning, and Accounting for Your Self-Managed Superannuation Fund (SMSF)</h2>
              <p>
                <Link to="/smsfs-accounting-and-compliance">{`We'll`} keep you updated on changes in the markets and legislation,</Link> and consult with you on your unique needs. {`We'll`} also look after your SMSF tax compliance for you.
              </p>
            </div>

            <div className="info-box">
              <div className="info-icon-container">
                <Cloud className="info-icon" />
              </div>
              <h2 className="info-heading">Outsourced CFO for Your Business</h2>
              <p>
                <Link to="/virtual-cfo-and-outsourced-accountant-plans">Our virtual CFO service helps you streamline your business processes,</Link> provide clear management reporting with KPIs and analytics, increase efficiency with built-in bookkeeping, accounting and tax, plus budget analysis, forecasting and a whole lot more.
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className="parallax-container">
          <div className="testimonials-heading">
            <p>What Clients Say About Us</p>
            <h2>Testimonials</h2>
            <div className="heading-divider"></div>
          </div>

          <div className="slideshow-container">
            <div className="slide fade">
              <p className="slide-text">
                Ken approaches his work in a most professional manner. Not only does he provide accurate, timely and competent advice and feedback, he is also responsive, friendly, caring and patient to the many questions (too many!) that I had. I am extremely pleased with the advice and services provided by Ken and would not hesitate to recommend him to anyone who requires accounting and tax consulting.

                <span className="name">Cheng</span>
                <span className="role">University administrator</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Thanks to Ken and the team for helping us with our tax. It was quick, hassle free and at a reasonable price. Looking forward to having him lodge our next tax return.

                <span className="name">Jesse</span>
                <span className="role">Property investor</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                I have been using Ken as my accountant for the past few years. He is extremely professional and always delivers my tax return within an efficient time frame. His knowledge of the tax system is commendable and I {`wouldn't`} trust anyone else with my personal information!

                <span className="name">Stephanie</span>
                <span className="role">Pharmacist</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                I am very pleased with KL Accountants for providing tax advisory services on my business and personal tax returns. Their advisors are very engaging, friendly, energetic, honest, reliable and professional. I feel my business affairs are in good hands.

                <span className="name">Lap</span>
                <span className="role">Mortgage broker</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Ken has been my accountant since 2013. During this time, apart from the annual tax returns, Ken and his team have helped us to set up family trusts and advised us on our superannuation options. My wife and I have always found Ken to be approachable, friendly, helpful and professional. We would highly recommend KL Accountants to any prospective clients.

                <span className="name">Jason</span>
                <span className="role">Investor</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Ken is someone I can trust and provides trouble free personal advice.

                <span className="name">Yvonne</span>
                <span className="role">Minister of religion</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                We have been with Ken for nearly 10 years now, and over the time {`he's`} been very helpful and resourceful to meet all accounting and taxation needs. We would highly recommend him to anyone.

                <span className="name">Stefanus</span>
                <span className="role">Property developer</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Ken has been my accountant for my SMSF for the last four years. He is very reliable and has always responded to all my queries with comprehensive answers promptly.

                <span className="name">Patrick</span>
                <span className="role">Senior manager</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                KL Accountants have been a blessing to me in the past 8 years! Being a single mum and running a business, I rest assured that all my accounting needs are well taken care of. I highly recommend KL Accountants for all your accounting matters.

                <span className="name">Lisa</span>
                <span className="role">Owner of dry cleaning company</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Thank you for all your advice and help in preparing my SMSF tax returns. Your advice has been very professional and helpful.

                <span className="name">Peter</span>
                <span className="role">Retired with a self managed super fund</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Ken helped me out ten years ago when I was facing a marriage breakup and a potential ruinous financial situation. He came to my rescue and sorted out all of the mess. I have always found Ken to be competent, reliable and a person of unquestionable integrity.

                <span className="name">Siew</span>
                <span className="role">Administrator</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                As a client since 2010, I have found Ken to be very professional, knowledgeable, efficient and approachable. He is always happy to offer prompt, sound advice and excellent support to all my accounting needs including my annual tax returns. I strongly recommend Ken.

                <span className="name">Dolly</span>
                <span className="role">SMSF and trust client</span>
              </p>
            </div>

            <div className="slide fade">
              <p className="slide-text">
                Ken is very professional in his approach and is always ready to answer any queries relating to tax matters.

                <span className="name">Ping</span>
                <span className="role">Retired with SMSF</span>
              </p>
            </div>
          </div>
        </div>

        <div className="why-info-section">
          <h2>Why Choose a Professional Tax Agent</h2>
          <p>We are an established firm with many long standing and newer clients who prefer an ongoing relationship with the same professional accountant or financial adviser. This way we understand your personal and business needs and look forward to grow together with you for many years.</p>

          <p>We are dedicated to provide you with timely, accurate advice - so saving you time and money.</p>

          <p>We are your trusted specialists to help you with tax and advice, including:</p>
          <p>
            <Check className="blue-checkmark" />
            Accounting, Tax Returns, tax planning and advice
          </p>
          <p>
            <Check className="blue-checkmark" />
            Business Structures (sole traders, partnerships, companies and trusts)
          </p>
          <p>
            <Check className="blue-checkmark" />
            Company Registered Agent (for company formation)
          </p>
          <p>
            <Check className="blue-checkmark" />
            Cloud Accounting advice
          </p>
          <p>
            <Check className="blue-checkmark" />
            Superannuation and Self Managed Superannuation Funds
          </p>
          <p>
            <Check className="blue-checkmark" />
            Tax on Bitcoin and Cryptoassets
          </p>
          <p>
            <Check className="blue-checkmark" />
            <Link to="/life-insurance-and-income-protection-insurance">Insurance protection to grow and protect your wealth</Link>
          </p>
          <p>
            <Check className="blue-checkmark" />
            Retirement and Estate planning to achieve your long term goals for you and your family.
          </p>
        </div>

        <div className="financial-services-section">
          <h2>We and our network of partners can help you with services from Life Insurance to Home Loans</h2>
          <div className="heading-divider"></div>

          <div className="info-squares">
            <div className="info-square">
              <House className="info-square-icon first" />
              <p>Home Loans & Property Purchases</p>
            </div>

            <div className="info-square">
              <Database className="info-square-icon second" />
              <p>Business Loans, Motor Vehicle & Asset Finance</p>
            </div>

            <div className="info-square">
              <Send className="info-square-icon third" />
              <p>Life & Income Protection Insurance</p>
            </div>

            <div className="info-square">
              <BookOpen className="info-square-icon fourth" />
              <p>Wills & Estate Planning</p>
            </div>
          </div>

          <p>We have years of industry experience across a wide variety of financial services. Plus we work alongside other financial professionals from different disciplines, such as mortgage brokers and lawyers.</p>

          <Link className="contact-link" to="/contact-us">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;