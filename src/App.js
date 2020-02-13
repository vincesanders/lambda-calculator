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
  const operatorFunctions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }

  function numPressed(numberValue) {
    if(isNum1) {
      if (num1 === '0' && numberValue === '0') {
        //do nothing
      } else if (num1 === '0') {
        setNum1(numberValue);
        setTotal(numberValue);
      } else if (numberValue === '.' && num1.includes('.')) {
        //do nothing
      } else {
        setNum1(num1 + numberValue);  //When we call this function it refernces the value of num1
        setTotal(num1 + numberValue); //It doesn't refernce it again, so we have to add the numberValue again
      }                               //while inside the function.
    } else {                        
      if (num2 === '0' && numberValue === '0') {
        //do nothing
      } else if (num2 === '0') {
        setNum2(numberValue);
        setTotal(numberValue);
      } else if (numberValue === '.' && num2.includes('.')) {
        //do nothing
      } else {
        setNum2(num2 + numberValue);  //When we call this function it refernces the value of num2
        setTotal(num2 + numberValue); //It doesn't refernce it again, so we have to add the numberValue again
      }                               //while inside the function.
    }
  }

  function operatorPressed(operatorValue) {
    if (operatorValue === '=') {
      setTotal(operatorFunctions[operation](Number(num1), Number(num2)));
      setNum1('')
      setNum2('')
      setIsNum1(true);
      setOperation(null);
    } else {
      if (operation === null) {
        setOperation(operatorValue);
        setIsNum1(false);
      } else {
        setTotal(operatorFunctions[operation](Number(num1), Number(num2))); 
        setNum1(operatorFunctions[operation](Number(num1), Number(num2)));
        setNum2('')
        setOperation(operatorValue);
      }
    }
  }

  function specialPressed(specialValue) {
    if (specialValue === 'C') {
      setTotal('0');
      setNum1('')
      setNum2('')
      setIsNum1(true);
      setOperation(null);
    } else if (specialValue === '%') {
      let newNumber;
      if (isNum1) {
        newNumber = setPercentageNumber(num1)
        setNum1(newNumber);
        setTotal(newNumber === '' ? '0' : newNumber);
      } else {
        newNumber = setPercentageNumber(num2)
        setNum2(newNumber);
        setTotal(newNumber);
      }
    } else {
      if (isNum1) {
        if (num1.charAt(0) === '-') {
          setNum1(num1.substr(1));
          setTotal(num1.substr(1));
        } else {
          setNum1('-' + num1);
          setTotal('-' + num1);
        }
      } else {
        if (num2.charAt(0) === '-') {
          setNum2(num2.substr(1));
          setTotal(num2.substr(1));
        } else {
          setNum2('-' + num2);
          setTotal('-' + num2);
        }
      }
    }
  }

  function setPercentageNumber(num) {
    if (num.includes('.')) {
      let index = num.indexOf('.');
      let strArr = num.split('.');
      if (index === 1) { //if index is at 1
        return '0.0' + strArr[0] + strArr[1];
      } else if (index === 2) { //if index is at 2
        return '0.' + strArr[0] + strArr[1];
      } else {
        return strArr[0].substr(0, index - 2) + '.' + strArr[0].substr(index - 2) + strArr[1];
      }
    } else {
      if (num === '0' || num === '') {
        return '';//do nothing
      } else if (num.length === 1) {
        return '0.0' + num;
      } else if (num.length === 2) {
        return '0.' + num;
      } else {
        return num.substr(0, num.length - 2) + '.' + num.substr(num.length - 2);
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
            <Specials specialPressed={specialPressed}/>
            <Numbers numPressed={numPressed}/>
          </div>
          <Operators operatorPressed={operatorPressed}/>
        </div>
      </div>
    </div>
  );
}

export default App;
