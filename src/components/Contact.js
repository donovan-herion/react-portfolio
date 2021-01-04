import React from "react";
import Button from "./Button";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <Flip top cascade>
          <h2>CONTACT</h2>
          <p>Envie de collaborer ? Parfait !</p>
          <Link to="/contact" style={{textDecoration: "none"}}>
          <Flip top delay={1000}>
            <Button url={"#"} text={"Parlons-en"} color={"primary"} />
          </Flip>
          </Link>
        </Flip>
      </div>
    </div>
  );
}

export default Contact;
