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
    const { email, password } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui teal image header">Login</h1>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
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
                <button className="ui fluid large teal submit button">
                  Login
                </button>
              </div>
            </div>
          </form>
          <div class="ui message">
            New to us? <a href="#">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
