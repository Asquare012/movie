import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
  },
};

const DefaultPopular = () => {
  const [movie, getMovie] = useState([]);
  const navigate = useNavigate();

  const getMovieApi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => getMovie(data.results))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getMovieApi();
  }, []);

  return (
    <>
      {movie.map((movie) => {
        const {
          id,
          poster_path,
          original_title,
          vote_average,
          release_date,
          overview,
        } = movie;

        const handleClick = () => {
          navigate(`/${id}`);
        };
        return (
          <li key={id} onClick={handleClick}>
            <>
              <div className="Bottom-Left">
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={original_title}
                  height="90%"
                  width="120px"
                />
              </div>
              <div className="Bottom-Right">
                <div className="Title">{original_title}</div>
                <div className="Rating">
                  <img src={star} alt="star" height="20px" />
                  {Math.round(vote_average)}/10 IMDb
                </div>
                <div className="Overview">{overview.slice(0, 30)}...</div>
                <div className="Release-date">
                  <img
                    src={calendar}
                    alt="calendar"
                    height="25px"
                    width="25px"
                  />
                  {release_date}
                </div>
              </div>
            </>
          </li>
        );
      })}
    </>
  );
};

export default DefaultPopular;
