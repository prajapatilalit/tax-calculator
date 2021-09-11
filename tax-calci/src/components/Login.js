import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
