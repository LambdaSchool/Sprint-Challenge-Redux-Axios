import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => console.log(error));
  }

  addSmurf = event => {
    event.preventDefault();
    axios
    .post("http://localhost:3333/smurfs", this.state.smurf)
    .then(response =>this.setState({
      smurfs: response.data,
      smurf: {
        name: "",
        age: "",
        height: "",
      }
    })
    );
    
  };

  handleInputChange = e => {
    this.setState({ 
      smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value 
      }
    });

  };

  render() {
    return (
      <div className="App">
        <header className="navBar">
          <NavLink className="navLinks" to="/" exact>
            Village
          </NavLink>
          <NavLink className="navLinks" to="/smurf-form">
            Birth a Smurf
          </NavLink>
        </header>

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurf={this.state.smurf}
              addSmurf={this.addSmurf}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
