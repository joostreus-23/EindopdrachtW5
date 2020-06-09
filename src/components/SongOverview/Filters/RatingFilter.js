import React from "react";

function RatingFilter(props) {
  return (
    <div>
      <label>Filter hier op rating</label>
      <select
        name="rating"
        id="rating-filter"
        onChange={(event) =>
          props.ratingFilter(document.getElementById("rating-filter").value)
        }
      >
        <option value="&#9733;">&#9733;</option>
        <option value="&#9733;&#9733;">&#9733;&#9733;</option>
        <option value="&#9733;&#9733;&#9733;">&#9733;&#9733;&#9733;</option>
        <option value="&#9733;&#9733;&#9733;&#9733;">
          &#9733;&#9733;&#9733;&#9733;
        </option>
        <option value="&#9733;&#9733;&#9733;&#9733;&#9733;">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </option>
      </select>
    </div>
  );
}

export default RatingFilter;
