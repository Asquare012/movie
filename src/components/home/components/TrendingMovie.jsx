import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Trending.scss";
import useFetch from "./useFetch";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const TrendingMovie = () => {
  const navigate = useNavigate();

  const [data] = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-USc&api_key=72222c9924c7699dfcd891c6395530f0"
  );

  return (
    <div className="Trending-Movie">
      <div className="Movie-Title">
        <div className="Title-Left">Trending movies</div>
        <div className="Title-Right">
          <NavLink to={"/movies"}>
            <span>See more</span>
          </NavLink>
        </div>
      </div>
      <div className="Movie-Content">
        <ol>
          {data &&
            data.slice(0, 5).map((item) => {
              const {
                id,
                title,
                original_title,
                vote_average,
                release_date,
                poster_path,
                overview,
              } = item;

              const handleClick = () => {
                navigate(`/movie/description/${id}`);
              };

              return (
                <li key={id} onClick={handleClick}>
                  <div className="Content-Left">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title || original_title}
                      height="90%"
                      width="120px"
                    />
                  </div>
                  <div className="Content-Right">
                    <div className="Title">{title || original_title}</div>
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
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default TrendingMovie;
