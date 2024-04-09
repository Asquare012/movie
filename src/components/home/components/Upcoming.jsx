import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Upcoming.scss";
import star from "../assets/Star.png";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
  },
};

const Upcoming = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const getMovie = () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming";

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => getMovie(), []);

  return (
    <div className="Showing">
      <div className="Showing-Top">
        <div className="Top-Left">Upcoming</div>
        <div className="Top-Right"></div>
      </div>
      <div className="Showing-Bottom">
        <ol>
          {movie.map((movie) => {
            const { id, poster_path, original_title, title, vote_average } =
              movie;

            const handleClick = () => {
              navigate(`/movie/description/${id}`);
            };

            return (
              <li key={id} onClick={handleClick}>
                <div className="Bottom-Image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title || original_title}
                    height="100%"
                    width="100%"
                  />
                </div>
                <div className="Bottom-Title">{title || original_title}</div>
                <div className="Bottom-Review">
                  <img src={star} alt="star" height="20px" />
                  {Math.round(vote_average)}/10 IMDb
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Upcoming;
