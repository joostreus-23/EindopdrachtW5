import React from "react";

function InputField(props) {
  return (
    <div>
      <input type="text" id="input"></input>
      <input
        type="submit"
        value="add"
        onClick={(event) => props.addNewGroceryItem(event)}
      ></input>
    </div>
  );
}

export default InputField;
