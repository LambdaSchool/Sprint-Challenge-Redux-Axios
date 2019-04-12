import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      })
      .then(response => {
        this.props.updateSmurfs(response.data);
      })
      .then(() => {
        this.setState({
          name: '',
          age: '',
          height: '',
        });
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editSmurf = e => {
    e.preventDefault();
    const id = this.props.id;
    this.props.editSmurf(id, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
    this.setState({
      name: '',
      age: '',
      height: '',
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="SmurfForm">
        <form
          onSubmit={
            this.props.location.pathname === '/smurf-form'
              ? this.addSmurf
              : this.editSmurf
          }
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="text"
          />
          {/* Adding a smurf:
          User will be unable to submit form unless all input fields are 
          populated. This prevents a 422 Unprocessable Entity error.*/}
          {/* Editing a smurf:
          User will be unable to submit form unless 1 or more input fields are 
          populated. */}
          <button
            disabled={
              this.props.location.pathname === '/smurf-form'
                ? !this.state.name || !this.state.age || !this.state.height
                : !this.state.name && !this.state.age && !this.state.height
            }
            type="submit"
          >
            {this.props.location.pathname === '/smurf-form'
              ? `Add to the village`
              : `Edit Smurf`}
          </button>
        </form>
      </div>
    );
  }
}

// withRouter is needed here to be able to use Route props, namely the history object, location object, and match object.

export default withRouter(SmurfForm);
