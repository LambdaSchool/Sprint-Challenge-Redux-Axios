import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
// import Smurf from './components/Smurf';
import Header from './components/Header';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
        .then(response => {
          this.setState(() => ({ smurfs: response.data }));
        })
        .catch(err => {console.log("error on get:", err)})
  }

  updateSmurfsState = (smurfsUpdate) => {
    console.log("on update:", smurfsUpdate)
    this.setState(() => ({ smurfs: smurfsUpdate }));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/"component={Header}/>
        <Route path="/smurfs" render={() => <SmurfForm updateSmurfsState={this.updateSmurfsState}/> }/> 
        <Route exact path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} updateSmurfsState={this.updateSmurfsState}/> }/>
        {/* <Route path="/smurfs/:id" render={(props) => <Smurfs {...props} props={this.state.smurfs}/>} /> */}
      </div>
    );
  }
}

export default App; 
