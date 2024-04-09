import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import "../Review.scss";
import back from "../assets/back.png";
import star from "../assets/Star.png";

const MovieReview = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getReview = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=72222c9924c7699dfcd891c6395530f0`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <div className="Review" key={movie.id}>
        <div className="Top">
          <div className="Top-Nav">
            <div>
              <NavLink to={"/movies"}>
                <img src={back} alt="back" height={"25px"} width={"25px"} />
              </NavLink>
            </div>
            <div></div>
          </div>
          <div className="Trailer">
            <MovieTrailer />
          </div>
        </div>
        <div className="Description">
          <div className="First">
            <div className="Title">{movie.original_title}</div>
            <div className="Rating">
              <img src={star} alt="star" height={"20px"} />
              {Math.round(movie.vote_average)}/10 IMDb
            </div>
            <div className="Genre">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </div>
            <div className="Info">
              <div className="Info-Item">
                Release Date <br />
                <span>{movie.release_date}</span>
              </div>
              <div className="Info-Item">
                Language <br />
                <span>{movie.original_language}</span>
              </div>
              <div className="Info-Item">
                Rating <br />
                <span>PG-13</span>
              </div>
            </div>
          </div>
          <div className="Second">
            <h2>Description</h2>
            {movie.overview}
          </div>
          <div className="Third">
            <div className="Cast-Top">
              <div className="Top-Left">Cast</div>
              <div className="Top-Right">
                <span>See more</span>
              </div>
            </div>
            <div className="Cast-Bottom">
              <MovieCast />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieReview;
