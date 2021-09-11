import React, { Component } from "react";

class CalculatorForm extends Component {
  state = {
    basic: "",
    lta: "",
    hra: "",
    foodAllowence: "",
    investment: "",
    rent: "",
    cityType: "",
    mediclaim: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      basic,
      lta,
      hra,
      foodAllowence,
      investment,
      rent,
      cityType,
      mediclaim,
    } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui teal image header">Tax Calculate Here</h1>
          <form className="ui form">
            <div className="ui stacked segment">
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="basic"
                  placeholder="Enter basic"
                  value={basic}
                />
              </div>
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="lta"
                  placeholder="Enter lta"
                  value={lta}
                />
              </div>
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="hra"
                  placeholder="Enter hra"
                  value={hra}
                />
              </div>
              <div className="field">
                {" "}
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="foodAllowence"
                  placeholder="Enter Food Allowence"
                  value={foodAllowence}
                />
              </div>
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="investment"
                  placeholder="Enter investment"
                  value={investment}
                />
              </div>
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="rent"
                  placeholder="Enter rent"
                  value={rent}
                />
              </div>
              <div className="field">
                <select onChange={cityType}>
                  <option value="metro">Metro</option>
                  <option value="non-metro">Not-Metro</option>
                </select>
              </div>
              <div className="field">
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="mediclaim"
                  placeholder="Enter Mediclaim"
                  value={mediclaim}
                />
              </div>
              <div className="field">
                <button class="ui fluid large teal submit button">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CalculatorForm;
