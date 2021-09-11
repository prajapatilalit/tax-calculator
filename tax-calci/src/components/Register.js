import React, { Component } from "react";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
          />
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
          <input
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
