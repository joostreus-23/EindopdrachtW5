import React from "react";

function GenreFilter(props) {
  return (
    <div>
      <label>Filter hier op genre</label>
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
      <input
        type="submit"
        value="Reset filters"
        onClick={(event) => props.resetFilter()}
      ></input>
    </div>
  );
}

export default GenreFilter;
