import React, {useState} from 'react'
import './Login.css'

const Login = ({loggedIn, setLoggedIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === 'email' && password === 'password') {
            setLoggedIn(true)
            setSuccess('You are logged in')
        } else {
            setError('Wrong email or password')
        }
    }
  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit}>
           <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='login-btn'  
            style={{backgroundColor: loggedIn ? 'green' : 'blue'}}
            >Login</button>
        </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  )
}

export default Login