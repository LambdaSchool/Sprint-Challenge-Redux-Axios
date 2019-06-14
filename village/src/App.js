import React, { Component } from 'react'
import axios from 'axios'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdating: false,
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  postSmurf = (newSmurf) => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => this.setState({ smurfs: res.data }, this.props.history.push("/")))
  }

  goToUpdateForm = (id) => {
    const smurfToUpdate = this.state.smurfs.find(smurf => smurf.id === id);
    this.setState({ isUpdating: true, smurf: smurfToUpdate }, () => this.props.history.push('/smurf-form'));
  }

  putSmurf = (smurf) => {
    const blankFormValues = {
      name: '',
      age: '',
      height: '',
      id: ''
    }
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          smurfs: res.data, 
          isUpdating: false,
          smurf: blankFormValues,
        });
        this.props.history.push('/');
      });
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }, this.props.history.push('/')))
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} goToUpdateForm={this.goToUpdateForm} deleteSmurf={this.deleteSmurf} />} />
        <Route path="/smurf-form" render={() => <SmurfForm {...this.state} postSmurf={this.postSmurf} putSmurf={this.putSmurf} smurf={this.state.smurf} />} />
      </div>
    )
  }
}

export default withRouter(App)
