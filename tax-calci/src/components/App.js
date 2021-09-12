import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalculatorForm from "./CalculatorForm";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/calculate" component={CalculatorForm} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
