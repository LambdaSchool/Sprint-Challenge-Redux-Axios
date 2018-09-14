import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
    axios.get('http://localhost:3333/smurfs', this.state.smurfs)
    .then(response => this.setState({smurfs: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to the Smurf Village!</h1>
          <h3>Please come in and visit the Smurfs here:</h3>
          <Link to='/smurfs'>Smurf Village</Link>
          <h3>Or if you would like to join the Smurfs village go here:</h3>
          <Link to='/smurfform'>New Smurf</Link>
        </header>

        <Route path='/smurfform' component={SmurfForm} /> 
        <Route path='/smurfs' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
