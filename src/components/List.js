import React from "react";
import ListItem from "./ListItem";
// import Container from "./Container";
// import GroceryList from "./GroceryList";

class List extends React.Component {
  render() {
    const showItems = this.props.items.map((item) => (
      <ListItem
        key={item.id}
        value={item.title}
        title={item.title}
        handleClick={this.props.handleClick}
        aantal={item.aantal}
      />
    ));
    return <ul>{showItems}</ul>;
  }
}

export default List;
