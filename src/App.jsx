import React, { useState } from 'react';
import './Style.css';



const App = ()=>
    
{   const state = useState();
    const [count, setCount] = useState(0);
    
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
       
    }
    return(
        <>
        <h1 className = "heading"> {count} </h1>
       
        <button className = "Btn " onClick = {inc}> Click Me to Increment </button>

        <button className = "Btn " onClick = {dec}> Click Me to Decrement </button>
        </>
    )
}
export default App;