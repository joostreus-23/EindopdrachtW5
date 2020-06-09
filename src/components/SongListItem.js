import React from "react";
import img from "./trash-delete-icon.jpg";
// import Container from "./Container";
function SongListItem(song) {
  const rowClassname = "song-row" + song.id;

  return (
    <tr className={rowClassname} width="600">
      <td className="song-row__item">{song.artist}</td>
      <td className="song-row__item">{song.title}</td>
      <td className="song-row__item">{song.genre}</td>
      <td className="song-row__item">{song.rating}</td>
      <td className="delete-button">
        <img
          src={img}
          alt=" "
          height="20"
          id={song.id}
          onClick={(event) => song.deleteSong(event.target.getAttribute("id"))}
        />
      </td>
    </tr>
  );
}

export default SongListItem;
