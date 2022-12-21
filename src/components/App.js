import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const[value,setValue] = useState("true");
const [color,setColor] = useState("red
                               
  const onButtonClick = () =>{
    setValue(!value)
}
  
useEffect(()=>{
  
  if(value){
    setColor('redColor')
  }
  
  if(!value){
  setColor('blueColor')
  }
}
        ,[value] )
  return (
    <div id="main">
      <p className={'redColor'} >Newton School</p>
      <button id='button' onClick={onButtonClick}>Change Style</button>
    </div>
  )
}


export default App;
