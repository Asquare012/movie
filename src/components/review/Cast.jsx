import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
    },
  };

  const getCast = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => setCast(data.cast))
      .catch((err) => console.error(err));
  };
  useEffect(() => getCast(), []);

  return (
    <ol>
      {cast.slice(0, 4).map((cast) => {
        const { id, profile_path, name } = cast;
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${profile_path}`}
              alt={name}
            />
            <span className="Name">{name}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default Cast;
