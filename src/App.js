import React, { useState } from "react";

import axios from "axios";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    socialMedia: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare email message
    const emailData = {
      subject: formData.subject,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nSocial Media Link: ${formData.socialMedia}\nMessage: ${formData.message}`,
    };

    try {
      setLoading(true);
      // Send email
      await axios.post(
        "https://contact-form-tr42.onrender.com/send-email",
        emailData
      );
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "",
        socialMedia: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      setLoading(false);

      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            {/* <h2 className="heading-section">Contact Us</h2> */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-7 d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form name="contactForm" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              onChange={handleChange}
                              value={formData.name}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              onChange={handleChange}
                              value={formData.email}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="url"
                              className="form-control"
                              name="socialMedia"
                              placeholder="Social Media Link (http://xyz.com/)"
                              onChange={handleChange}
                              value={formData.socialMedia}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              onChange={handleChange}
                              value={formData.subject}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
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
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              disabled={loading}
                              value={
                                loading ? "Please Wait..." : "Send Message"
                              }
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                    <h3 className="mb-4 mt-md-4">Contact us</h3>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:cheemaaman1992@gmail.com">
                            cheemaaman1992@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div> */}
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
