import React from "react";

export default function OperatorButton(props) {
  return (
    <button className='operator-buttons' onClick={() => props.operatorPressed(props.operator)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator}
    </button>
  );
};
