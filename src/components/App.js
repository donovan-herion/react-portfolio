import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import ToggleLanguage from "./ToggleLanguage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [english, setEnglish] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactForm english={english} />
        </Route>
        <Route path="/">
          <Landing english={english} />
          <ToggleLanguage english={english} setEnglish={setEnglish} />
          <Projects english={english} />
          <Contact english={english} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
