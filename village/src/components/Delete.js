import React, { Component } from 'react';
import DeleteSmurf from './DeleteSmurf';
import axios from 'axios';



class Delete extends Component {

  smurfDeleter(id) {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Delete a smurf</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <DeleteSmurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurfDeleter={this.smurfDeleter}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

DeleteSmurf.defaultProps = {
 smurfs: [],
};

export default Delete;
