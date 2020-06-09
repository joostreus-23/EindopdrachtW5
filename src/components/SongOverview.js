import React from "react";
import InputField from "./InputField";
import SongList from "./SongList";
import Header from "./Header";
import GenreFilter from "./GenreFilter";
import RatingFilter from "./RatingFilter";
class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          artist: "T78",
          title: "Megator",
          genre: "techno",
          rating: "★★★",
          display: true,
        },
        {
          id: 2,
          artist: "Mac Miller",
          title: "Jet Fuel",
          genre: "hip-hop",
          rating: "★★★★★",
          display: true,
        },
        {
          id: 3,
          artist: "Kendrick Lamer",
          title: "Money Trees",
          genre: "hip-hop",
          rating: "★★★★★",
          display: true,
        },
      ],
    };
  }

  render() {
    const deleteSong = (id) => {
      console.log(id);

      this.setState((prevstate) => {
        const newList = prevstate.songs.map((song) => {
          if (song.id == id) {
            song.display = false;
          }
          return song;
        });
        return {
          songs: newList,
        };
      });
    };

    const addSong = (event) => {
      const newArtist = document.getElementById("input-artist").value;
      const newTitle = document.getElementById("input-title").value;
      const newGenre = document.getElementById("genre").value;
      const newRating = document.getElementById("rating").value;

      const newSongItem = {
        id: this.state.songs.length + 1,
        artist: newArtist,
        title: newTitle,
        genre: newGenre,
        rating: newRating,
        display: true,
      };
      this.setState((pervstate) => {
        const newList = pervstate.songs.concat(newSongItem);
        return {
          songs: newList,
        };
      });
    };

    const genreFilter = (genre) => {
      console.log(genre);

      this.setState((prevstate) => {
        const newList = prevstate.songs.map((song) => {
          song.display = song.genre === genre ? true : false;
          return song;
        });
        return {
          songs: newList,
        };
      });
    };
    const ratingFilter = (rating) => {
      console.log(rating);

      this.setState((prevstate) => {
        const newList = prevstate.songs.map((song) => {
          song.display = song.rating === rating ? true : false;
          return song;
        });
        return {
          songs: newList,
        };
      });
    };
    const resetFilter = () => {
      this.setState((prevstate) => {
        const newList = prevstate.songs.map((song) => {
          song.display = 0 === 0 ? true : false;
          return song;
        });
        return {
          songs: newList,
        };
      });
    };

    return (
      <div>
        <Header />

        <InputField addSong={addSong} />
        <GenreFilter genreFilter={genreFilter} resetFilter={resetFilter} />
        <RatingFilter ratingFilter={ratingFilter} />
        <SongList songs={this.state.songs} deleteSong={deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
