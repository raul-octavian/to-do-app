import { useState } from 'react'
import './Login.css'
import { uri } from '../../Utils/Uri'
import { Link } from 'react-router-dom'
import { useOutletContext, useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState('react01@test.com')
  const [password, setPassword] = useState('1234567890')
  const [userInfo, setUserInfo] = useOutletContext()
  let navigate = useNavigate();


  let error = ''

  const loginUser = async () => {
    try {
      const response = await fetch(
        `${uri}user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'

          },
          body: JSON.stringify({
            email,
            password
          })
        }

      )
      const data = await response.json()
      await setUserInfo(data.data)
      navigate('/todo', { replace: true })

    } catch (err) {
      console.log('error', err.message)
      error = err.message
    }
  }

  let errorEl;

  if (error) {
    errorEl = <p>{error}</p>
  }


  return (
    <div className='container'>
      <div className='form glass'>
        <h1>Login</h1>
        {errorEl}
        <div className="input-container">
          <div className='input-section'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='input-section'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="actions-container">
          <button className='primary-action' onClick={loginUser}>Login</button>
          <Link to="/register">
            <button className='secondary-action'>Register</button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Login