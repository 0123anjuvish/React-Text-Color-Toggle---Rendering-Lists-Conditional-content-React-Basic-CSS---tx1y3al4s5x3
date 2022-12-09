import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [setColor] = useState("red");

  return (
    <div id="main">
      <p className={'redColor'} >Newton School</p>
      <button id='button' onClick={() => setColor('blue')}>Change Style</button>
    </div>
  )
}


export default App;
