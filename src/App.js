import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Pages/Shared/Footer/Footer";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/detailsservice/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
