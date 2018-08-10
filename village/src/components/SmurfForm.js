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

  updateVillage(props){
    console.log('hi')
    console.log(props)
    props.updateVillage(this.state.smurfs)
  }


  addSmurf = (event, props) => {
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', {
       name: this.state.name,
	     age: this.state.age,
	     height: this.state.height
    }).then(res => {
      axios.get('http://localhost:3333/smurfs')
      .then(res => {
        // this.setState({
        //   smurfs: res.data,
        // })
        console.log(this)
        this.props.updateVillage(res.data);
      })
      .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
