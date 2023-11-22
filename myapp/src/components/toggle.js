import React, { useState } from 'react'

function Toggle() {
    const [status , setStatus] = useState(false);
  return (
    <div>
       {
        status  ?
        <p>Hello, This is Malik Ahad</p>
        : null
       }
       <button onClick={()=>{setStatus(!status)}}>Toggle Button</button>
    </div>
  )
}

export default Toggle;