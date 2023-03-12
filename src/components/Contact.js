import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jb55g7",
        "template_0eezvwa",
        form.current,
        "RdipHa8vO_QGa_MaB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="section-pink">
      <div className="section-cont">
        <h3 className="section-cat-title">Contact</h3>
        <h2 className="section-title">Let's Chat</h2>
        <div className="contact-cont">
          <div className="contact-text">
            <p>Ciao</p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
