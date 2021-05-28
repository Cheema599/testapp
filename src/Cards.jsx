import React from 'react';
function Cards(props){
    return(
        <>
        <img src = {props.imgsrc} width= '200' height= '200' alt = 'targetimage' />
        <p> {props.title} </p>
        <a href = {props.Link} target ='blank'> 
            <button> Watch Now </button>
            </a>
        </>
    )
}
export default Cards;