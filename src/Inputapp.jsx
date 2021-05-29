import React, { useState } from 'react';
const Inputapp=()=>{
    const [name, setName] = useState();
    const [fullname, setFullname] = useState();
    const changeName=(event)=>{
        setName(event.target.value);
    }
    const showName=()=>{
        setFullname(name);
    }
    return(
        <>
        <h1> Hello {fullname} </h1>
        <input type ="text" placeholder = "Enter Your Name" onChange={changeName}>
        </input>
        <button onClick={showName}> Click Here </button>
        </>
    );
}
export default Inputapp;
