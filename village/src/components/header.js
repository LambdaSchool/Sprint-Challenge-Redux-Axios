import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/smurf-form">Form</NavLink>
    <NavLink to="/smurf-edit-form">Edit</NavLink>
  </header>
);

export default Header;
