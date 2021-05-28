import Raect from 'react';
function Datetime(){
 const date = new Date().toLocaleDateString();
 const time = new Date().toLocaleTimeString();
 return (
     <>
     <h1>Welcome Here</h1>
     <h2> Current Date and Time in Pakistan Now is {date} {time} </h2>
     </>
 )
}
export default Datetime;