import React, {useState} from "react";
import { operators } from '../../../data'
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file

export default function Operators(props) {
  // STEP 2 - add the imported data to state
  const [operatorButtons, setOperatorButtons] = useState(operators);
  return (
    <div className='operators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorButtons.map((op, i) => {
        return <OperatorButton value={op.value} operator={op.char} key={i} operatorPressed={props.operatorPressed}/>
      })}
    </div>
  );
};
