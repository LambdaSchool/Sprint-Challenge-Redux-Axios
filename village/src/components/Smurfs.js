import React, { Component } from "react";
import styled from "styled-components";
import Smurf from "./Smurf";
import PropTypes from "prop-types";

// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const StyledH1 = styled.h1`
  color: blue;
  margin-top: -20px;
  padding: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 30px;
  border-bottom: 1px solid blue;
  background: white;
`;

// ===========================
// ====     COMPONENT     ====
// ===========================
class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <StyledH1>Smurf Village</StyledH1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

Smurfs.propTypes = {
  deleteSmurf: PropTypes.func.isRequired,
  smurfs: PropTypes.array.isRequired
};

export default Smurfs;
