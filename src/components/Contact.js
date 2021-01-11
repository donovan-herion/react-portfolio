import React from "react";
import Button from "./Button";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

function Contact({ english }) {
  return (
    <div className="contact">
      <div className="container">
        <Flip top cascade>
          <h2>CONTACT</h2>
          <p>
            {english ? "Willing to collaborate ? " : "Envie de collaborer ? "}
            <span className="perfect">
              {english ? "Perfect !" : "Parfait !"}
            </span>
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Flip top delay={1000}>
              <Button
                text={english ? "Let's talk" : "Parlons-en"}
                color={"primary"}
              />
            </Flip>
          </Link>
        </Flip>
      </div>
    </div>
  );
}

export default Contact;
