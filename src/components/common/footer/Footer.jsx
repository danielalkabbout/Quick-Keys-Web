import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing! \nEmail: ${email}`);
      setEmail(""); // Clear the input after subscribing
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <a
              className="btn5"
              href="https://wa.me/96171649624"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/footerlogo.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>

              <div className="input flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
