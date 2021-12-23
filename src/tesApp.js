// // display needs to build a string to pass it in for evaluate method
// import './App.css';
// import React from 'react'
// import { useState } from 'react'; // use state hook
// import { evaluate } from 'mathjs';


// const Calculator = () => {
//   const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
//   const [display, setDisplay] = useState ("");


//   const handleClick = (button)=> {
//     if (button === "="){
//     setDisplay(evaluate(display))
//     }else if (button === "c") {
//       setDisplay("")
//     }else {
//      setDisplay (display + button)
//     }
//   }

// return (
//   <div>
//     <h1>CASIO</h1>
//     <h2>{display}</h2>
//     {buttons.map((button, index) => {
//       return <Button handleClick={handleClick} key={index} button={button}/> // sending function as props down to button
//     })}
  
//   </div>
// )

// }

// const Button = (props) => {
//   return (
//      <button onClick={ () => props.handleClick(props.button)}>{props.button}</button>
// )
//   }

// export default Calculator;
// // display needs to build a string to pass it in for evaluate method

