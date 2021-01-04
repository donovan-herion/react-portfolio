import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function ContactForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event, setSubmitText) => {
    event.preventDefault();
    setSubmitText("Submitting ...");
    const formElements = [...event.currentTarget.elements];
    
  
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formElements,
      })
        .then(() => {
          setSubmitText("Successfully submitted!");
        })
        .catch((_) => {
          setSubmitText(
            "There was an error with your submission, please email me using the address above."
          );
        });
    }
  };

  const [submitText, setSubmitText] = useState(null);
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
           {submitText} Bienvenue sur ma page de contact. Comment puis-je vous aider ?
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
                <label htmlFor="name">Nom :</label>
                <input type="text" name="name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" />
              </div>
            </div>
            <div className="message">
              <label htmlFor="message">Message :</label>
              <textarea name="message"></textarea>
            </div>
            <button className="btn" type="submit">
              C'est parti !
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default ContactForm;
