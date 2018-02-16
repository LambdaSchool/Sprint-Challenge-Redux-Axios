import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
    deleted: false
  }
  render() {
    return (
      <div className="App">
        <SmurfForm 
          onCreate={this.gatherSmurfs}
        />
        <Smurfs
         smurfs={this.state.smurfs}
         onDelete={this.nukeSmurfs}
         deleted={this.state.deleted}
         toggleDelete={this.toggleDeleted}
        />
      </div>
    );
  }
  compononentDidMount() {
    this.gatherSmurfs();
  }
  gatherSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        })
      })
      .catch(() => {
        console.log('error getting data')
      });
  };
  nukeSmurfs = (id) => {
    const endpoint = (`http://localhost:3333/smurfs/${id}`)
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ deleted: true })
      })
      .catch(error => {
        console.error('error deleting')
      });
  };
  toggleDeleted = () => {
    this.setState(prevState => {
      return {
        deleted: !prevState.deleted,
      };
  });
  }
}

export default App;
