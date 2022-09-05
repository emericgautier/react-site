import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.SERVICE_ID, process.env.TEMPLATE_ID, process.env.PUBLIC_KEY);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" autoComplete="off" id="name" required />
        <label>Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          id="email"
          required
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
