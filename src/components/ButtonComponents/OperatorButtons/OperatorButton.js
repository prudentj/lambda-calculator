import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  //console.log("Operator Button")
  return (
    <>
      <button
      className="button lightblue"
      onClick={
        props.clickHandler(props.buttonName)
      }
    >
        {props.buttonName}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default OperatorButton
