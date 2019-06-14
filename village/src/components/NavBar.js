import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
        <NavLink
          exact to="/"
          activeStyle={{
            border: '1px solid black',
            borderRadius: '3px',
            color: 'white',
            background: 'blue',
            textDecoration: 'none',
          }}
        >
          Smurfs
        </NavLink>
      <NavLink
        to="/smurf-form"
        activeStyle={{
          border: '1px solid black',
          borderRadius: '3px',
          color: 'white',
          background: 'blue',
          textDecoration: 'none',
        }}
      >
        Add Smurf
      </NavLink>
    </div>
  )
}

export default NavBar;