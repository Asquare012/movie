import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultSeries from "./DefaultSeries";
import "../MovieSeries.scss";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const Series = () => {
  const [searchData, setSearchData] = useState(" ");
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  // actions
  const handleChange = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };
  // API
  const getSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${searchData}&api_key=72222c9924c7699dfcd891c6395530f0
  `
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => getSearch(), [searchData]);
  return (
    <div className="Movies">
      <div className="Movie-Top-Title">
        <h1>SERIES</h1>
      </div>
      <div className="Movie-Search">
        <input
          type="text"
          placeholder="Search tv series..."
          onChange={handleChange}
          value={searchData.toLocaleLowerCase().trimStart()}
        />
      </div>
      <div className="Movie-List">
        <ol>
          {movie.map((movie) => {
            const { id, poster_path, title, vote_average, release_date } =
              movie;

            const handleClick = () => {
              navigate(`/series/description/${id}`);
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
                  <img
                    src={calendar}
                    alt="calendar"
                    height="25px"
                    width="25px"
                  />
                  {release_date}
                </div>
              </li>
            );
          })}
          <DefaultSeries />
        </ol>
      </div>
    </div>
  );
};
export default Series;
