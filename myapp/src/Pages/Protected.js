import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Protected(props) {

  const {user} = useContext(UserContext)
  console.log(user)
    const {Comp} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        !user && navigate('/') ;
    })
  return (
    <div>
        <Comp/>
    </div>
  )
}

export default Protected;