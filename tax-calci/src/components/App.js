import React from "react";
import CalculatorForm from "./CalculatorForm";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
      <CalculatorForm />
    </div>
  );
}

export default App;
