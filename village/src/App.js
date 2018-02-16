import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  }
  
  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => 
        {console.log("Error", error)
      });
  }


  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
