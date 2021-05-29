import React, { useState } from 'react';
const Events=()=>{
    const color = 'purple';
    const [bg, setBg] = useState(color);
    const Bgchange = ()=>{
        setBg('red');
        
    }
    const Bgchange2=()=>{
        setBg(color);
    }
    return(
        <>
        <div style = {{ backgroundColor : bg}}> 
        <button onClick = {Bgchange} onDoubleClick={Bgchange2}>Click here to change BG Color </button>
        </div>
        </>
    );
}
export default Events;