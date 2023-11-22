import React from "react";
import "../App.css";
export function Users(props) {
    let user = "Ahad"
    return (
        <div className="App">
            <h1 className="info">User Info</h1>
            <button onClick={()=>props.Data(user)}>Click Me</button>
        </div>
    );
}
