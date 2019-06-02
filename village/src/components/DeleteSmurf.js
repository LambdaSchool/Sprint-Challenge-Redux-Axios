import React from 'react';
import {Link} from 'react-router-dom';

const DeleteSmurf = props => {
  return (
    <div className="DeleteSmurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link to="/smurfs" ><button onClick={() => props.smurfDeleter(props.id)} >Delete</button></Link>
    </div>
  );
};

DeleteSmurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default DeleteSmurf;
