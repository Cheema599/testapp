import React, { useState } from 'react'
const App2=()=>{
    let newtime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newtime);
   
    function getTime(){
        newtime = new Date().toLocaleTimeString();
       setTime(newtime);
       
    }
    setInterval(getTime,1000);
    return(
        <>
        <h1 className = 'heading'> {time} </h1>
     
        </>
    )
}
export default App2;