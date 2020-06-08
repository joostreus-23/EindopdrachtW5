import React from "react";
// import List from "./List";
// import ListItem from "./ListItem";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";
import Inputfield from "./InputField";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Bier", aantal: 2 },
        { id: 2, title: "Noten", aantal: 1 },
        { id: 3, title: "Tomaten", aantal: 1 },
        { id: 4, title: "Chips", aantal: 2 },
      ],
      shoppingListItems: [
        { id: 1, title: "Musli", aantal: 2 },
        { id: 2, title: "Kwark", aantal: 1 },
      ],
    };
  }

  render() {
    const emptyCart = () => {
      console.log("delete-click");

      this.setState(() => {
        return {
          shoppingListItems: [],
        };
      });
    };

    const addNewGroceryItem = (event) => {
      const value = document.getElementById("input").value;

      const newGroceryItem = {
        id: this.state.groceryItems.length + 1,
        title: value,
        aantal: 1,
      };
      this.setState((prevList) => {
        const newList = prevList.groceryItems.concat(newGroceryItem);
        return {
          groceryItems: newList,
        };
      });
    };

    const addNewShoppingListItem = (itemTitle) => {
      const newShoppingItem = {
        id: this.state.shoppingListItems.length + 1,
        title: itemTitle,
        aantal: 1,
      };

      this.setState((prevState) => {
        const newList = prevState.shoppingListItems.concat(newShoppingItem);
        return {
          shoppingListItems: newList,
        };
      });
    };

    const addAmountToItem = (itemTitle) => {
      // We maken een copy van de state, want je kunt de state niet direct muteren.
      const shoppingList = [...this.state.shoppingListItems];
      const newList = shoppingList.map((shoppingItem) => {
        if (shoppingItem.title === itemTitle) {
          shoppingItem.aantal++;
        }
        return shoppingItem;
      });
      this.setState({ shoppingListItems: newList });
    };

    const handleClickGroceryItem = (event) => {
      const value = event.target.getAttribute("value");
      console.log("Click", value);
      const toShoppingListItem = this.state.shoppingListItems.filter(
        (item) => item.title === value
      );

      toShoppingListItem.length === 0
        ? addNewShoppingListItem(value)
        : addAmountToItem(value);
    };

    const handleClickShoppingItem = (event) => {
      const value = event.target.getAttribute("value");
      console.log("Click", value);
    };

    return (
      <div className="container">
        <div className="grocerylist">
          <GroceryList
            groceryItems={this.state.groceryItems}
            handleClickGrocery={handleClickGroceryItem}
            addNewGroceryItem={addNewGroceryItem}
          />
        </div>
        <div className="shoppingcart">
          <ShoppingCart
            shoppingListItems={this.state.shoppingListItems}
            handleClickShoppingItem={handleClickShoppingItem}
            emptyCart={emptyCart}
          />
        </div>
      </div>
    );
  }
}

export default Container;
