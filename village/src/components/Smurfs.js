import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // I needed props, so made a constructor. But the useless constructor msg was annoying me so I put empty state here. 
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteHandler={this.props.deleteHandler}
                /> 
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