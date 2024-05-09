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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare email message
    const emailData = {
      subject: formData.subject,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
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
                        AMANDEEP KAUR
                        </p>
                        <p>
                        <b>BROKER</b>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> 1550 Enterprise Rd #305,
Mississauga, ON L4W 4P4
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Mobile:</span>{" "}
                          <a href="tel://+1437.779.9980">+ 1437.779.9980</a>
                        </p>
                        <p>
                          <span>Mississauga Office:</span>{" "}
                          <a href="tel://+1905-459-7900">+1 905-459-7900</a>
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
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website: </span> <a target="_blank" href="https://amandeep.kaur.savemaxrealty.ca/">savemax.com</a>
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
