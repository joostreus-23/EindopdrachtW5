import React from "react";

function RatingFilter(props) {
  return (
    <div>
      <label>Filter hier op rating</label>
      <select name="rating" id="rating-filter">
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

      <input
        type="submit"
        value="filter"
        onClick={(event) =>
          props.ratingFilter(document.getElementById("rating-filter").value)
        }
      ></input>
    </div>
  );
}

export default RatingFilter;
