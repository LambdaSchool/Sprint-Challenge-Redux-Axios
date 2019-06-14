import React, { Component } from 'react'

class SmurfForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    if (this.props.isUpdating) {
      this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height,
        id: this.props.smurf.id
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.props.isUpdating) {
      const updatedSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        id: this.state.id
      }
      this.props.putSmurf(updatedSmurf)
    }
    else {
      this.addSmurf(e)
    }
  }

  addSmurf = event => {
    event.preventDefault()
    // add code to create the smurf using the api

    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }

    this.props.postSmurf(newSmurf)

    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="SmurfForm">
        <h2>{this.props.isUpdating ? 'Update Smurf' : 'Add New Smurf'}</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default SmurfForm
