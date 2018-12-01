import React, { Component, Fragment } from "react";
import axios from "axios";
import styled, { createGlobalStyle, css } from "styled-components";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import SingleSmurf from "./components/SingleSmurf";

// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #ba9677;
  }

  button {
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    background: blue;
    box-shadow: 0 4px lightblue;
    border: 2px solid lightblue;
    position: relative;
    outline: none;

    &:hover {
      top: 2px;
      box-shadow: 0 2px lightblue;
    }

    &:active {
      top: 4px;
      box-shadow: 0 0 lightblue;
    }
  }

  input {
    padding: 10px;
    margin: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid blue;
    width: 50%;
    margin: 0 auto 20px;
    display: block;
    background: #d6bca5;

    &:nth-child(3) {
      margin-bottom: 50px;
    }

    &:placeholder-shown {
      text-transform: uppercase;
    }
  }
`;

const StyledNav = styled.nav`
  padding: 40px 5px 45px;
  border-bottom: 1px solid blue;
  margin-bottom: 20px;
  background: aqua;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  margin: 0 35px;
  outline: none;

  &.active > button {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: 20px;
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  resetVillage = data => {
    this.setState({
      smurfs: data
    });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="App">
          <StyledNav>
            <StyledNavLink exact to="/">
              <Button rounded>Village</Button>
            </StyledNavLink>
            <StyledNavLink to="/smurf-form">
              <Button rounded>Add a Smurf</Button>
            </StyledNavLink>
          </StyledNav>
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                {...props}
                deleteSmurf={this.deleteSmurf}
                smurfs={this.state.smurfs}
              />
            )}
          />
          <Route
            exact
            path="/smurf-form"
            render={props => (
              <SmurfForm {...props} resetVillage={this.resetVillage} />
            )}
          />
          <Route
            path="/smurfs/:id"
            render={props => (
              <SingleSmurf {...props} resetVillage={this.resetVillage} />
            )}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
