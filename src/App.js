import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [total, setTotal] = useState('0');
  const [operation, setOperation] = useState(null);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [isNum1, setIsNum1] = useState(true);

  function numPressed(numberValue) {
    if(isNum1) {
      setNum1(num1 + numberValue);
      setTotal(num1 + numberValue);
    } else {
      setNum2(num2 + numberValue);
      setTotal(num2 + numberValue);
    }
  }

  function operatorPressed(e) {
    if (e.target.value === '=') {
      setTotal(Number(num1) + operation + Number(num2));
      setNum1('')
      setNum2('')
      setIsNum1(true);
      setOperation(null);
    } else {
      if (operation === null) {
        setOperation(e.target.value);
        setIsNum1(false);
      } else {
        setTotal(Number(num1) + operation + Number(num2));
        setNum1(Number(num1) + operation + Number(num2));
        setNum2('')
        setOperation(e.target.value);
      }
    }
  }

  function specialPressed(e) {
    if (e.target.value === 'C') {
      setTotal(0);
      setNum1('')
      setNum2('')
      setIsNum1(true);
      setOperation(null);
    } else if (e.target.value === '%') {
      // if (isNum1) {
      //   if (num1.includes('.')) {
      //     let index = num1.indexOf('.');
      //     let strArr = num1.split('.');
      //     if (index )
      //     setNum1(num1.substr(0, index))
      //   } else {
      //     setNum1(num1.substr(0, num1.length - 3) + '.' + num1.substr(num1.length - 3));
      //   }
      // } else {
      //   setNum2(num2.substr(0, num2.length - 3) + '.' + num2.substr(num2.length - 3));
      // }
    } else {
      if (isNum1) {
        if (num1.indexOf(0) === '-') {
          setNum1(num1.substr(1));
        } else {
          setNum1('-' + num1);
        }
      } else {
        if (num2.indexOf(0) === '-') {
          setNum2(num2.substr(1));
        } else {
          setNum2('-' + num2);
        }
      }
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display numDisplayed={total}/>
        <div className="button-container">
          <div className='button-column-1'>
            <Specials />
            <Numbers numPressed={numPressed}/>
          </div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
