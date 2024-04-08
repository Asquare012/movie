import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const DefaultMovies = () => {
  const [movie, getMovie] = useState([]);
  const navigate = useNavigate();

  const getMovieApi = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=72222c9924c7699dfcd891c6395530f0"
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
        const { id, title, poster_path, vote_average, release_date } = movie;

        const handleClick = () => {
          navigate(`/movie/description/${id}`);
        };
        return (
          <li key={id} onClick={handleClick}>
            <div className="Image">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                height="100%"
                width="100%"
              />
            </div>

            <div className="Title">{title}</div>
            <div className="Rating">
              <img src={star} alt="star" height={"15px"} />
              {Math.round(vote_average)}/10 IMDb
            </div>
            <div className="Release-date">
              <img src={calendar} alt="calendar" height="25px" width="25px" />
              {release_date}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default DefaultMovies;
