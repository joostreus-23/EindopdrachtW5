import React from "react";
import List from "./List";
import img from "./trash-delete-icon.jpg";

function ShoppingCart({
  shoppingListItems,
  handleClickShoppingItem,
  emptyCart,
}) {
  return (
    <div className="shoppingcart">
      <h2>
        Shoppingcart
        <img src={img} alt=" " height="20" onClick={emptyCart} />
      </h2>

      <List items={shoppingListItems} handleClick={handleClickShoppingItem} />
    </div>
  );
}

export default ShoppingCart;
