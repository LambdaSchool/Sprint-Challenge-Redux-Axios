import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    if(this.props.update) {
      axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
          let smurf = response.data.find(data => data.id === Number(this.props.match.params.id))
          this.setState({...smurf})
        })
        .catch(err => console.log(err));
    }
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.createSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  putSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state, this.props.match.params.id)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.goBack();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          
          {this.props.update ? 
            <button onClick={this.putSmurf}>Update Smurf</button> : 
            <button onClick={this.addSmurf} type="submit">Add to the village</button>
          }
          
        </form>
      </div>
    );
  }
}

export default SmurfForm;
