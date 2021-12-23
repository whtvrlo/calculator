import './App.css';
import { useState } from 'react'; // use state hook
import { evaluate } from 'mathjs';
import React from 'react';

const Calculator = () => {
  const buttons = ["c","7", "8", "9", "4", "5", "6", "1", "2", "3","0", "/", "*", "+", "-", "="]
  const [display, setDisplay] = useState ("");
  const [userInput, setUserInput] = useState ("");

  const updateInput = (event) => {
    setUserInput(event.target.value)
  }
 
//// TODO: handleKeyPress event
  // const handleKey = (event) => {
  //   if (event.key === "="){
  //     setDisplay(evaluate(display))
  //       }
  //       else if (event.key === "c") {
  //        setDisplay("")
  //        }
  //       else {
  //         setDisplay (display + event.key)
  //       }
  //     }


  const handleClick = (button)=> {
    console.log({button})
    if (button === "="){
    setDisplay(evaluate(display))
    }else if (button === "c") {
      setDisplay("")
    }else {
     setDisplay (display + button)
    }
  }


return (
  <div className="container">
    <h1 >CASIO</h1>
    <h2 className="display">{display}</h2>
    <h3 onChange={updateInput}>{userInput}</h3>
    {buttons.map((button, index) => {
      return <Button handleClick={handleClick} key={index} button={button}></Button> // sending function as props down to button
    })}

<div className="tag">By<a href="https://github.com/whtvrlo">whtvrlo</a></div>
  </div>
)

}

const Button = (props) => {
  return (
    <div className="container">
        <div className="buttonBox">
          <button onClick={ () => {props.handleClick(props.button)}}>{props.button}</button>
        </div>
    </div>
)
  }

export default Calculator;

