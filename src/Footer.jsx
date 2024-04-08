import { Link } from "react-router-dom";
import "./styles/Footer.scss";
import home from "./home.png";
import movie from "./movie.png";
import series from "./series.png";

const Footer = () => {
  return (
    <footer>
      <ol>
        <li>
          <Link to={"/"}>
            <img src={home} alt="home" height="30px" width="30px" />
          </Link>
        </li>
        <li>
          <Link to={"/movies"}>
            <img src={movie} alt="movies" height="30px" width="30px" />
          </Link>
        </li>
        <li>
          <Link to={"/series"}>
            <img src={series} alt="series" height="38px" width="38px" />
          </Link>
        </li>
      </ol>
    </footer>
  );
};

export default Footer;
