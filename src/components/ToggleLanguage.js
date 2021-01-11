import React from "react";

function ToggleLanguage({ english, setEnglish }) {
  return (
    <div class="on-off-toggle">
      <input
        class="on-off-toggle__input"
        type="checkbox"
        id="bopis"
        onClick={() => setEnglish(!english)}
      />
      <label for="bopis" class="on-off-toggle__slider"></label>
    </div>
  );
}

export default ToggleLanguage;
