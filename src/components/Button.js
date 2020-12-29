import React from "react";

function Button({ url, text, color }) {
  {
    if (color == "primary") {
      return (
        <a href={url} className="filled-button-primary">
          {text}
        </a>
      );
    } else {
      return (
        <a href={url} className="filled-button-white">
          {text}
        </a>
      );
    }
  }
}

export default Button;
