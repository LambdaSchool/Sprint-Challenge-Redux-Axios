import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

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

const Span = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  color: red;
  font-weight: bolder;
  cursor: pointer;

  &:hover,
  &:active {
    transform: scale(1.5);
  }
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

const Update = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px;
  background: blue;
  box-shadow: 0 4px lightblue;
  border: 2px solid lightblue;
  position: relative;

  &:hover {
    top: 2px;
    box-shadow: 0 2px lightblue;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0 lightblue;
  }
`;

// ===========================
// ====     COMPONENT     ====
// ===========================
class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }

  render() {
    return (
      <SmurfDiv className="Smurf">
        <StyledH3>{this.props.name}</StyledH3>
        <Span onClick={() => this.props.deleteSmurf(this.props.id)}>X</Span>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <Update to={`/smurfs/${this.props.id}`}>Edit Smurf Data</Update>
      </SmurfDiv>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  age: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  deleteSmurf: PropTypes.func.isRequired
};

export default Smurf;
