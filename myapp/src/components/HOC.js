import React, { useState } from 'react'

function HOC() {
    function Counter() {
        const [count, setCount] = useState(0);
        return (
            <>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Counter</button>
            </>
        )
    }
function HighOrderRed(props){
    return <div style={{backgroundColor:'red'}}><props.cmp/></div>
}
function HighOrderGreen(props){
    return <div style={{backgroundColor:'Green'}}><props.cmp/></div>
}
    return (
        <div style={{width:'100px'}}>
            <HighOrderRed cmp={Counter}/>
            <HighOrderGreen cmp={Counter}/>
        </div>
    )
}

export default HOC;