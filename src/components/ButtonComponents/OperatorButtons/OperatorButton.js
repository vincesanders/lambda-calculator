import React from "react";

export default function OperatorButton(props) {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.operator}</button>
    </>
  );
};
