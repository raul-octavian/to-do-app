import { useState } from 'react'
import { Link } from 'react-router-dom'
import { uri } from '../../Utils/Uri'

const Register = () => {

  const [email, setEmail] = useState('react01@test.com');
  const [name, setName] = useState('react01');
  const [password, setPassword] = useState('1234567890');
  let error = ''

  const registerUser = async () => {
    if (email && name && password) {
      try {
        console.log("start register")
        const response = await fetch(
          `${uri}user/register`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
              name,
              password
            })
          }
          // requestOptions
        )
        const data = await response.json()
        console.log('data', data)

        // destructure the user info for login

        if (data.email) {
          //   // login with user info
          //   login({ email, password })
          // } else {
          //   fetchError.value = data.error
          // }

          // if we have data push to home
          // if (data.email) {
          //   router.push('/')
          // }
        } else {
          error = data.error
        }

      } catch (err) {
        error = err.message
      }
    }

  }

  let errorEl;

  if (error) {
    errorEl = <p>{error}</p>
  }


  return (
    <div className='container'>
      <div className='form glass'>
        <h1>Register</h1>
        {errorEl}
        <div className="input-container">
          <div className='input-section'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='input-section'>
            <label htmlFor="name">name:</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='input-section'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="actions-container">
          <button className='primary-action' onClick={registerUser}>Register</button>
          <Link to="/login">
            <button className='secondary-action'>Login</button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Register

