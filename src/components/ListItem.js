import React from "react";
// import img from "./trash-delete-icon.jpg";
// import Container from "./Container";
function ListItem(item) {
  return (
    <li>
      <p
        onClick={(event) => item.handleClick(event)}
        key={item.id}
        className="list-item"
        value={item.value}
      >
        {item.title} {item.aantal}
      </p>
    </li>
  );
}

export default ListItem;
