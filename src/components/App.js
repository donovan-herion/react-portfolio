import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Projects from "./Projects";
import About from "./About";
import ContactForm from "./ContactForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/contact">
          <ContactForm/>
        </Route>
        <Route path="/">
          <Landing />
          <Projects />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
