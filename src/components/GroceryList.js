import React from "react";
import List from "./List";
import InputField from "./InputField";
// import Container from "./Container";

// class GroceryList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: { props },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <List items={props.groceryItems} />
//       </div>
//     );
//   }
// }
function GroceryList({ groceryItems, handleClickGrocery, addNewGroceryItem }) {
  return (
    <div className="grocerylist">
      <h2>Grocerylist</h2>
      <InputField addNewGroceryItem={addNewGroceryItem} />
      <List items={groceryItems} handleClick={handleClickGrocery} />
    </div>
  );
}

export default GroceryList;
