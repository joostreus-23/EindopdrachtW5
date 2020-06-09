import React from "react";
import SongListItem from "./SongListItem";

class SongList extends React.Component {
  render() {
    const filterDeletedSongs = this.props.songs.filter(
      (song) => song.display === true
    );

    const showItems = filterDeletedSongs.map((item) => (
      <SongListItem
        key={item.id}
        handleClick={this.props.handleClick}
        title={item.title}
        artist={item.artist}
        genre={item.genre}
        rating={item.rating}
        id={item.id}
        deleteSong={this.props.deleteSong}
      />
    ));
    return (
      <table width="80%">
        <thead>
          <tr className="song-header" width="600">
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item">Delete</th>
          </tr>
        </thead>
        <tbody>{showItems}</tbody>
      </table>
    );
  }
}

export default SongList;
