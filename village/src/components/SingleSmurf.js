import React from 'react';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const SingleSmurf = props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );

  if (!smurf) return null; // this prevents undefined error when using a direct link to a smurf that doesn't exist
  return (
    <div>
      <SmurfForm id={smurf.id} editSmurf={props.editSmurf} />
      <Smurf
        id={smurf.id}
        name={smurf.name}
        age={smurf.age}
        height={smurf.height}
        goodbyeSmurf={props.goodbyeSmurf}
      />
    </div>
  );
};

export default SingleSmurf;
