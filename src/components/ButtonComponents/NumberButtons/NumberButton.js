import React from "react";

export default function NumberButton(props) {
  return (
    <button className='number-buttons' onClick={() => props.numPressed(props.number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};
