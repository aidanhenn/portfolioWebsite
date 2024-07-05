import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className="sign-up">CONTACT ME</h1>;
  <form action="POST" data-netlify="true">
  <div class="contact-boxes">
    <div class="contact-boxes">
      <input type="text" placeholder="Name" name="name" required />
    </div>
    <div class="contact-boxes">
      <input type="text" placeholder="E-mail" name="email" required />
    </div>
    <div>
      <textarea
        type="text"
        class="messageBox"
        placeholder="Message"
        name="message"
        required
      ></textarea>
    </div>
    <button class="sendButton" type="submit">Send</button>
  </div>
</form>
    </div>
  )
}

export default Contact
