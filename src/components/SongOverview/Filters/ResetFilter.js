import React from "react";

function ResetFilter(props) {
  return (
    <input
      className="filters"
      type="submit"
      value="Reset filters"
      onClick={(event) => props.resetFilter()}
    ></input>
  );
}

export default ResetFilter;
