import React from "react";

function GenreFilter(props) {
  return (
    <div className="filters">
      <label>Filter hier op genre: </label>
      <select
        name="genre"
        id="genrefilter"
        onChange={(event) =>
          props.genreFilter(document.getElementById("genrefilter").value)
        }
      >
        <option value="top-40">top-40</option>
        <option value="hip-hop">hip-hop</option>
        <option value="rock">rock</option>
        <option value="house">house</option>
        <option value="techno">techno</option>
      </select>
    </div>
  );
}

export default GenreFilter;
