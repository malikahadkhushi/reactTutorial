import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function About() {
  const {user} = useContext(UserContext);
  return (
    <div>
        <h1>About Us</h1>
        <h2>Email : {user.email}</h2>
        <h2>Password : {user.password}</h2>
    </div>
  )
}

export default About