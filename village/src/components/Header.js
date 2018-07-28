import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>You are a welcome guest to the smurf village</h2>
      <Link to="/smurfs">
        Take me to Smurfs!
      </Link>
    </div>
  )
}
 
export default Header;