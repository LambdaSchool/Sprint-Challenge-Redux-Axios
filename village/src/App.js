import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => console.log(err))
  }

  createSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  updateSmurf = (smurf, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
          <NavLink to="/smurf-form" activeClassName="selected">Add Smurf</NavLink>
        </div>
        <Route path="/smurf-form"
          render={props => (
            <SmurfForm createSmurf={this.createSmurf} />
          )}
        />
        <Route 
          exact path="/"
          render={props => (
            <Smurfs 
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf} 
            /> 
          )}
        />
        <Route path="/update-form/:id"
          render={props => (
            <SmurfForm 
              update 
              updateSmurf={this.updateSmurf}
              {...props}
             />
          )}  
        />
      </div>
    );
  }
}

export default App;
