import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container'>
      <div className='form glass'>
        <h1>Register</h1>
        <div className="input-container">
          <div className='input-section'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='input-section'>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className='input-section'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="actions-container">
          <button className='primary-action'>Register</button>
          <Link to="/login">
            <button className='secondary-action'>Login</button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Register

