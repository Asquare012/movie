import { useEffect, useState } from "react";
import DefaultPopular from "./DefaultPopular";
import { useNavigate } from "react-router-dom";
import "./styles/Popular.scss";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const Popular = () => {
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
      `https://api.themoviedb.org/3/search/movie?query=${searchData}&api_key=72222c9924c7699dfcd891c6395530f0
  `
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => getSearch(), [searchData]);

  return (
    <div className="Popular">
      <div className="Popular-Top">
        <div className="Top-Left">Popular</div>
        <div className="Top-Right">
          <span>See more</span>
        </div>
      </div>
      <div className="Popular-Mid">
        <input
          type="text"
          placeholder="Search movie..."
          onChange={handleChange}
          value={searchData.toLocaleLowerCase().trimStart()}
        />
      </div>
      <div className="Popular-Bottom">
        <ol>
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
                    <img src={star} alt="star" />
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
              </li>
            );
          })}
          <DefaultPopular />
        </ol>
      </div>
    </div>
  );
};

export default Popular;
