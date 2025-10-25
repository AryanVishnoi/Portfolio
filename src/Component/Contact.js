import React, {
  useRef
} from "react";
import "./Contact.css";
import earth from "./earth.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import facebook from "./facebook.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    // ✅ Use environment variables for security
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // 1️⃣ Send notification to yourself
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log("Notification sent:", result.text);

          // 2️⃣ Send auto-reply to user
          emailjs
            .send(
              serviceId,
              templateId, {
                first_name: form.current.first_name.value,
                email: form.current.email.value,
              },
              publicKey
            )
            .then(() => {
              alert("✅ Message sent successfully!");
              form.current.reset();
            })
            .catch((err) => console.log("Auto-reply error:", err));
        },
        (error) => {
          console.log("Notification error:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return ( <
    >
    <
    section id = "contact" >
    <
    h1 > CONTACT < /h1> <
    p >
    Email: < a href = "mailto:aryanvhere@gmail.com" > aryanvhere @gmail.com < /a> < /
    p > <
    div className = "contactbox" >
    <
    div className = "card form" >
    <
    div className = "card-body" >
    <
    form ref = {
      form
    }
    onSubmit = {
      onSubmit
    } >
    <
    div className = "row" >
    <
    div className = "col" >
    <
    input type = "text"
    name = "first_name"
    className = "form-control"
    placeholder = "First name"
    required /
    >
    <
    /div> <
    div className = "col" >
    <
    input type = "text"
    name = "last_name"
    className = "form-control"
    placeholder = "Last name"
    required /
    >
    <
    /div> < /
    div > <
    div className = "mb-3" >
    <
    label htmlFor = "email"
    className = "form-label" >
    Email address <
    /label> <
    input type = "email"
    name = "email"
    className = "form-control"
    id = "email"
    placeholder = "name@example.com"
    required /
    >
    <
    /div> <
    div className = "mb-3" >
    <
    label htmlFor = "number"
    className = "form-label" >
    Phone No. <
    /label> <
    input type = "number"
    name = "phone"
    className = "form-control"
    id = "number"
    placeholder = "**********"
    required /
    >
    <
    /div> <
    div className = "mb-3" >
    <
    label htmlFor = "message"
    className = "form-label" >
    Your Message <
    /label> <
    textarea name = "message"
    className = "form-control"
    id = "message"
    rows = "3"
    placeholder = "Write your message here..."
    required >
    <
    /textarea> < /
    div > <
    button type = "submit"
    className = "btn btn-primary" >
    Send <
    /button> < /
    form > <
    /div> < /
    div > <
    div className = "earthimage" >
    <
    img src = {
      earth
    }
    alt = "Earth Illustration" / >
    <
    /div> < /
    div > <
    /section>

    <
    footer id = "footer" >
    <
    div className = "social-icons" >
    <
    div className = "pair" >
    <
    a href = "https://www.instagram.com/yourusername"
    target = "_blank"
    rel = "noopener noreferrer" >
    <
    img className = "insta"
    src = {
      instagram
    }
    alt = "Instagram" / >
    Instagram <
    /a> <
    a href = "https://www.linkedin.com/in/aryan-vishnoi-4188692a9/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <
    img src = {
      linkedin
    }
    alt = "LinkedIn" / >
    LinkedIn <
    /a> < /
    div > <
    div className = "pair" >
    <
    a href = "mailto:youremail@example.com" >
    <
    img src = {
      mail
    }
    alt = "Mail" / >
    Mail <
    /a> <
    a href = "https://twitter.com/yourusername"
    target = "_blank"
    rel = "noopener noreferrer" >
    <
    img src = {
      twitter
    }
    alt = "Twitter" / >
    Twitter <
    /a> < /
    div > <
    div className = "pair" >
    <
    a href = "https://wa.me/yourwhatsappnumber"
    target = "_blank"
    rel = "noopener noreferrer" >
    <
    img src = {
      whatsapp
    }
    alt = "WhatsApp" / >
    WhatsApp <
    /a> <
    a href = "https://www.facebook.com/yourusername"
    target = "_blank"
    rel = "noopener noreferrer" >
    <
    img src = {
      facebook
    }
    alt = "Facebook" / >
    Facebook <
    /a> < /
    div > <
    /div> < /
    footer > <
    />
  );
}