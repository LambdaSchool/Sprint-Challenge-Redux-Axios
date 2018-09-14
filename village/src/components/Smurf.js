import React from 'react';

const Smurf = props => {
  
  function handleDelete() {
    props.deleteSmurf(props.id);
  }

  return (
    <div className="Smurf">
      <button onClick={handleDelete}>X</button>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

