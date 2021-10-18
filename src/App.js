import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Pages/Shared/Footer/Footer";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
