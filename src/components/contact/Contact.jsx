import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
   // Defining state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    const { name, email, subject } = formData;
    if (name && email && subject) {
      alert(
        `Request sent!\nWe will contact you as soon as possible.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}`
      );
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us!" title="Get Helps & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Fill The Form</h4> <br />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
