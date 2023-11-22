import React, { useState } from 'react'

function InputBox() {
    const [value , setValue] = useState('');
    const [status , setStatus] = useState(false);
    function getValue(e){
        setValue(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Enter Your String......'  onChange={getValue}/>
        <button onClick={()=>{setStatus(true)}}>Click Me</button>

        {status ? <h1>{value}</h1>:null}
    </div>
  )
}

export default InputBox