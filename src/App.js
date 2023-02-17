
import React, { useState } from 'react';
import './App.css';


function App() {
  const [toggleButton, setToggleButton] = useState(false);
  const handleClick = () => {
    setToggleButton(!toggleButton)
  }

  const displayMsg = () => {
    return (
      <>
        {toggleButton ? <div  className='switchon'><p>Switch is ON .... </p></div> :<div className='switchoff'><p>Switch is OFF...</p></div> }
      </>
    )
  }
  return (
    <div className="App">
     
      <div className='displaycon'>
      <div style={!toggleButton ?{backgroundColor:'#2C384F'}:{backgroundColor:'rgb(107, 30, 30)'}} onClick={handleClick} className='toggle'>
        {toggleButton ? <div className='toggle_left'></div> : <div className='toggle_right'></div>}
      </div>
        {displayMsg()}</div>
    </div>
  );
}

export default App;
