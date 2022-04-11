import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container'>
      <div className='form glass'>
        <h1>Login</h1>
        <div className="input-container">
          <div className='input-section'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='input-section'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="actions-container">
          <button className='primary-action'>Login</button>
          <Link to="/register">
            <button className='secondary-action'>Register</button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Login