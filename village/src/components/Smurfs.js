import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  
  handleDelete = (id) => {
    console.log("handleDelete:", id)
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          this.props.updateSmurfsState(response.data)
        })
        .catch(err => {
          console.log("delete error:",err)
        })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              // <Link to={`/smurfs/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  delete={this.handleDelete}
                />
              // </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
