import { NavLink } from "react-router-dom"


import React from 'react'
// import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ user }) => {
  let userNav;
  if (!user.id) {
    userNav =
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
  } else {
    userNav = <ul>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  }


  return (
    <nav className="glass">
      <ul>
        <li>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/todo">Todo</NavLink>
            </li>
          </ul>
        </li>
        <li>
          {userNav}
        </li>
      </ul>
    </nav>
  )
}

// Header.propTypes = {}

export default Header



