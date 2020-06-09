import React from "react";

function InputField(props) {
  return (
    <div>
      <input type="text" id="input-artist" placeholder="Artist"></input>
      <input type="text" id="input-title" placeholder="Title"></input>
      <select name="genre" id="genre">
        <option value="top-40">top-40</option>
        <option value="hip-hop">hip-hop</option>
        <option value="rock">rock</option>
        <option value="house">house</option>
        <option value="techno">techno</option>
      </select>
      <select name="rating" id="rating">
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
        value="add"
        onClick={(event) => props.addSong(event)}
      ></input>
    </div>
  );
}

export default InputField;
