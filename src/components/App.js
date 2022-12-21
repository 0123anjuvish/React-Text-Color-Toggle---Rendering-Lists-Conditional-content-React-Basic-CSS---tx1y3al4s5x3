import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  
const [color,setColor] = useState("redColor");
                               
 const colorChange =()=>{
 if(color=="redColor"){
 return setColor("blueColor");
 }else{
  return setColor("redColor");
 }
 };
  
 
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={colorChange}>Change Style</button>
    </div>
  )
}


export default App;
