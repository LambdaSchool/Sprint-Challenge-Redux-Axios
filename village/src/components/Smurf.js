import React from 'react';

import Delete from '../assets/svgs/delete';
import './smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf-card">
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <p>id: {props.id}</p>
      </div>
      <Delete id={props.id} deleteSmurf={props.deleteSmurf} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
