import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function ContactForm({ english }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitText, setSubmitText] = useState(null);

  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    if (!submitText) {
      setSubmitText("...");
      const formElements = [...event.currentTarget.elements];
      const filledOutElements = formElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setSubmitText("Parfait !");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        })
        .catch(_ => {
          setSubmitText("error");
        });
    }
  };

  return (
    <div className="contact-form">
      <div>
        <div className="top">
          <Link to="/">
            <FontAwesomeIcon size="3x" color="#17bebb" icon={faTimes} />
          </Link>
        </div>
      </div>
      <Fade bottom>
        <div>
          <div className="centered-image">
            <p dangerouslySetInnerHTML={{ __html: "< / >" }} />
          </div>
          <h2 className="contact-form-title">
            {submitText
              ? english
                ? "Thank you for your message. I'll get in touch very soon."
                : "Merci pour votre message. Je vous recontacterai au plus vite."
              : english
              ? "Welcome to my contact page. How can I help you ?"
              : "Bienvenue sur ma page de contact. Comment puis-je vous aider ?"}
          </h2>
          <form
            method="POST"
            name="contact"
            className="contact-form-form"
            onSubmit={e => onSubmit(e, setSubmitText)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="name-email">
              <div className="name">
                <label htmlFor="name">{english ? "Name :" : "Nom :"}</label>
                <input required type="text" name="name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email :</label>
                <input required type="email" name="email" />
              </div>
            </div>
            <div className="message">
              <label htmlFor="message">Message :</label>
              <textarea required name="message"></textarea>
            </div>
            <button className="btn" type="submit">
              {submitText
                ? submitText
                : english
                ? "Let's do it !"
                : "C'est parti !"}
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default ContactForm;
