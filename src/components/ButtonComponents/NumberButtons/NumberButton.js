import React from "react";

export default function NumberButton(props) {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.number}</button>
    </>
  );
};
