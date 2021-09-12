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
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui teal image header">Register</h1>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="envelope icon"></i>
                  <input
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                    value={confirmPassword}
                  />
                </div>
              </div>

              <div className="ui fluid large teal submit button">Register</div>
            </div>
          </form>
          <div class="ui message">
            If you already have an account <a href="#">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
