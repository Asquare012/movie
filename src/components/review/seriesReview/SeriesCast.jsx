import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SeriesCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const getCast = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=72222c9924c7699dfcd891c6395530f0`
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

export default SeriesCast;
