import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Intro from "./components/Intro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs", this.state.smurfs)
      .then(response => {
        setTimeout(() => {
          this.setState({ smurfs: response.data });
        }, 1000);
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = smurfId => {
    console.log(smurfId);
    return axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => this.setState({ smurfs: response.data }));
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="navigation container">
            <h4>Welcome to the Smurf Village!</h4>
            <p>Please come in:</p>
            <NavLink exact to="/" activeClassName="active">
              Smurf Village
            </NavLink>
            <p>Or join the Smurfs village:</p>
            <NavLink to="/smurfform" activeClassName="active">
              New Smurf
            </NavLink>
          </div>
        </header>
        <section className="main-content container">
          {this.state.smurfs.length === 0 ? (
            <Route exact path="/" component={Intro} />
          ) : (
            <Route
              exact
              path="/"
              render={props => (
                <Smurfs
                  {...props}
                  smurfs={this.state.smurfs}
                  deleteSmurf={this.deleteSmurf}
                />
              )}
            />
          )}
          <Route path="/smurfform" component={SmurfForm} />
        </section>
      </div>
    );
  }
}

export default App;
