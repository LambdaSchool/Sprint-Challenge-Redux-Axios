import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const StyledH3 = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: blue;
  border-bottom: 1px dashed blue;
  width: 100%;
  padding: 20px 0;
`;

const SmurfDiv = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid blue;
  width: 50%;
  margin: 0 auto 30px;
  padding-bottom: 20px;
  background: aqua;
  box-shadow: -2px 2px 8px rgb(0, 0, 0, 0.3);
`;

const Button = styled.button`
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

class SingleSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: null,
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        const smurf = res.data.find(
          smurf => smurf.id.toString() === this.props.match.params.id
        );
        this.setState({
          smurfs: res.data,
          smurf: smurf,
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          id: this.props.match.params.id
        });
      })
      .catch(err => console.log(err));
  };

  editSmurf = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: parseInt(this.state.id, 10)
    };
    axios
      .put(`http://localhost:3333/smurfs/${data.id}`, data)
      .then(res => {
        this.props.resetVillage(res.data);
        this.setState({
          id: "",
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.smurf) {
      return (
        <Fragment>
          <SmurfDiv className="Smurf">
            <StyledH3>{this.state.name}</StyledH3>
            <strong>{this.state.height} tall</strong>
            <p>{this.state.age} smurf years old</p>
          </SmurfDiv>
          <form onSubmit={this.editSmurf}>
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              value={this.state.height}
              name="height"
            />
            <Button rounded type="submit" onClick={this.editSmurf}>
              Update Smurf Data
            </Button>
          </form>
        </Fragment>
      );
    }
    return null;
  }
}

SingleSmurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

SingleSmurf.propTypes = {
  resetVillage: PropTypes.func.isRequired
};

export default SingleSmurf;
