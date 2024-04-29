import React, { useState } from "react";

import axios from "axios";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare email message
    const emailData = {
      subject: formData.subject,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    try {
      // Send email
      await axios.post("http://localhost:5004/send-email", emailData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        subject:""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            {/* <h2 class="heading-section">Contact Us</h2> */}
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-md-7 d-flex align-items-stretch">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Get in touch</h3>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form name="contactForm" onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              onChange={handleChange}
                              value={formData.name}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              onChange={handleChange}
                              value={formData.email}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              onChange={handleChange}
                              value={formData.subject}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="7"
                              placeholder="Message"
                              onChange={handleChange}
                              value={formData.message}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
                    <h3 class="mb-4 mt-md-4">Contact us</h3>
                    <div class="dbox w-100 d-flex align-items-start">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-map-marker"></span>
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-paper-plane"></span>
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-globe"></span>
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
