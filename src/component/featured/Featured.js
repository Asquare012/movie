import { useEffect, useState } from "react";
import arrow from "./right.png";
import imdb from "./imdb.png";
import tomato from "./tomato.png";

const Featured = () => {
  const [movieList, setMovieList] = useState([]);

  {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
      },
    };
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      )
        .then((response) => response.json())
        .then((response) => setMovieList(response.results))
        .catch((err) => console.log(err));
    }, []);
  }
  return (
    <div className="Featured">
      <div className="Title">
        Featured Movie
        <span>
          see more
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      <div className="List">
        <ol>
          {movieList.map((movie) => {
            return (
              <li key={movie.id}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                  }}
                ></div>
                <div>
                  <p className="Date">{movie.release_date}</p>
                  <p className="Name">{movie.original_title}</p>
                  <p className="Rating">
                    <img src={imdb} alt="imdb" height="13px" />
                    86.0 / 100
                    <span>
                      <img src={tomato} alt="tomato" height="13px" />
                      97%
                    </span>
                  </p>
                  <p className="Genre">Action, Adventure, Horror</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Featured;
