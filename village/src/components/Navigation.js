import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to='/'><p>Home</p></Link>
      <Link to='/smurfs'><p>Smurfs</p></Link>
      <Link to='/add'><p>Add a Smurf</p></Link>
      <Link to='/update'><p>Update a Smurf</p></Link>
      <Link to='/delete'><p>Kill a Smurf</p></Link>
    </div>
  );
};

export default Navigation;
