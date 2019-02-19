import React, { Component } from "react";

class ListMovies extends Component {
  render() {
    console.log("Props", this.props);
    return (
      <div className="movies-list">
        {profiles.map(profile => {
          const userName = users[profile.userID].name;
          const favMovieName = movies[profile.favoriteMovieID].name;

          return (
            <li key={profile.id}>
            <h2 className="movie-list-title" key={movie.id}>{movie.nema}</h2>
              <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
            </li>
          );
        })}

        <p>Liked By:</p>
        <ul>
          <li>Nicholas Lain</li>
        </ul>
      </div>
    );
  }
}

export default ListMovies;
