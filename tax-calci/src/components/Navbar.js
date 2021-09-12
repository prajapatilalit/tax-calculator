import React from "react";

function Navbar(props) {
  return (
    <div class="ui secondary pointing menu">
      <a class="active item">Home</a>
      <a class="item">Register</a>
      <a class="item">About</a>
      <div class="right menu">
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
}

export default Navbar;
