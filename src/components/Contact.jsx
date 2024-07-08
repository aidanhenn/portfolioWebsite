import React from "react";
import "./Contact.css";

function Contact() {
    

  return (
    <>
      <h1 className="contact-me">CONTACT ME</h1>
      <div className="contact-form">
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <div className="input-field">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="input-field">
            <input type="text" placeholder="E-mail" name="email" required />
          </div>
          <div className="input-field">
            <textarea
              className="messageBox"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <button className="sendButton" type="submit">
            Send
          </button>
        </form>
      </div>
      <></>
    </>
  );
}

export default Contact;
