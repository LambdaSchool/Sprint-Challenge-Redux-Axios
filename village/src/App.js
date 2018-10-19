import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header';
import SmurfForm from './components/SmurfForm';
import SmurfEdit from './components/SmurfEditForm';
import Smurfs from './components/Smurfs';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { smurfs: [] };
    this.url = 'http://localhost:3333/smurfs';
  }

  componentDidMount() {
    this.getSmurfs(this.url);
  }

  getSmurfs = URL => {
    axios
      .get(URL)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`${this.url}/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} updateSmurfs={this.getSmurfs} URL={this.url} />}
        />
        <Route
            path="/smurf-edit-form"
            render={props => <SmurfEdit {...props} updateSmurfs={this.getSmurfs} URL={this.url} />}
        />
      </div>
    );
  }
}

export default App;
