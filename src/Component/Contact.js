import React, { useState } from "react";
import "./Contact.css";
import earth from "./earth.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import facebook from "./facebook.png";

export default function Contact() {
  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(event.target[0]);
    console.log(event.target[1]);
    console.log(event.target[2]);
  }
  return (
    <>
      <section id="contact">
        <h1>CONTACT</h1>
        <p>Email: amanvishnoi1289@gmail.com</p>
        <div className="contactbox">
          <div className="card form">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="earthimage">
            <img src={earth} alt="Earth Illustration" />
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="social-icons">
          <div className="pair">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="insta" src={instagram} alt="Instagram" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-vishnoi-4188692a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
              LinkedIn
            </a>
          </div>
          <div className="pair">
            <a href="mailto:youremail@example.com">
              <img src={mail} alt="Mail" />
              Mail
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
              Twitter
            </a>
          </div>
          <div className="pair">
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
