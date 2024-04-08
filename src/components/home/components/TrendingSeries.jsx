import { useNavigate, NavLink } from "react-router-dom";
import "../styles/Trending.scss";
import useFetch from "./useFetch";
import star from "../assets/Star.png";
import calendar from "../assets/calendar.png";

const TrendingSeries = () => {
  const navigate = useNavigate();

  const [data] = useFetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=72222c9924c7699dfcd891c6395530f0"
  );

  return (
    <div className="Trending-Series">
      <div className="Movie-Title">
        <div className="Title-Left">Series</div>
        <div className="Title-Right">
          <NavLink to={"/series"}>
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
                name,
                vote_average,
                first_air_date,
                poster_path,
                overview,
              } = item;

              const handleClick = () => {
                navigate(`/series/description/${id}`);
              };

              return (
                <li key={id} onClick={handleClick}>
                  <div className="Content-Left">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={name}
                      height="90%"
                      width="120px"
                    />
                  </div>
                  <div className="Content-Right">
                    <div className="Title">{name}</div>
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
                      {first_air_date}
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

export default TrendingSeries;
