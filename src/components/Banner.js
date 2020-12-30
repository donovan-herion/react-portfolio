import React from "react";
import Flip from "react-reveal/Flip";

function Banner({ title }) {
  return (
    <div className="banner" id="banner-id">
      <div className="container">
        <Flip left>
          <h2>{title}</h2>
        </Flip>
      </div>
    </div>
  );
}

export default Banner;
