import { NavLink } from "react-router-dom"


import React from 'react'
// import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
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
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>

          </ul>
        </li>
      </ul>
    </nav>
  )
}

// Header.propTypes = {}

export default Header



