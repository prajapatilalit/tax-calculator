import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div class="ui secondary pointing menu">
      <Link to="/" class="active item">
        Home
      </Link>
      <Link to="/calculate" class="item">
        Calculate Tax
      </Link>
      <Link to="/login" class="item">
        Login
      </Link>
      <Link to="/register" class="item">
        Register
      </Link>
      <div class="right menu">
        <Link to="#" class="ui item">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
