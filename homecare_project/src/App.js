import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import BookingPage from "./pages/BookingPage";
import EmployyeePage from "./pages/EmployyeePage";
import Newservice from "./pages/service";
import DetailsCombo from "./pages/detailsCombo";
import DetailsNewService from "./pages/DetailNewService";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/booking" component={BookingPage} exact />
          <Route path="/employyee" component={EmployyeePage} exact />
          <Route path="/newservice" component={Newservice} exact/>
          <Route path="/detailsCombo/:id?" component={DetailsCombo} exact /> 
          <Route exact path="/detailsNewsService/:slug.:id" component={DetailsNewService}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
