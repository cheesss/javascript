import React from "react";

var options = {second: "numeric"};
function Clock(props){
    return (
        <div>
            <h1>hi react!!</h1>
            <h2>now: {new Date().toLocaleDateString("en-US",options)}</h2>
        </div>
    )
}

export default Clock;