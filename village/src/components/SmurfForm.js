import React, { Component } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const StyledButton = styled.button`
  font-size: 20px;
  background: blue;
  text-transform: uppercase;
  margin: 0 15px;
  letter-spacing: 2px;
  outline: none;

  ${props =>
    props.rounded
      ? css`
          border-radius: 55px;
        `
      : null}
`;

// ===========================
// ====     COMPONENT     ====
// ===========================
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        this.props.resetVillage(res.data);
        this.setState({
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <StyledButton rounded type="submit" onClick={this.addSmurf}>
            Add to the village
          </StyledButton>
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes = {
  resetVillage: PropTypes.func.isRequired
};

export default SmurfForm;
