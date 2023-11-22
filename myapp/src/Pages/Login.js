import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext)

  const getUser = (e) => {
    e.preventDefault()
    console.log({ email, password })
    if (email.length !== 0 && password.length !== 0) {
      setUser({ email, password })
      navigate('/home')

    }
  }
  return (
    <div>
      <form >
        <input type="email" required minLength={'15'} placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" required min={'6'} placeholder='Enter Your Password' onChange={(e) => { setPassword(e.target.value) }} />
        <button onClick={getUser}>Submit</button>
      </form>
    </div>
  )
}

export default Login;