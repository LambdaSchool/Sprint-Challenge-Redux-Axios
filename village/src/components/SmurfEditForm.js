import React, { Component } from 'react';
import axios from 'axios';

class SmurfEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', age: '', height: '' };
  }

  editSmurf = e => {
    e.preventDefault();
    axios
      .put(`${this.props.URL}/${this.state.id}`, {
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        height: this.state.height
      })
      .then(() => {
        this.props.updateSmurfs(this.props.URL);
        this.setState({ id: '', name: '', age: '', height: '' });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfEdit">
        <form onSubmit={this.editSmurf}>
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="id"
            value={this.state.id}
            name="id"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Edit Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfEditForm;
