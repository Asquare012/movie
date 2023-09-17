import logo from "./Logo.png";
import menu from "./Menu.png";
import play from "./Play.png";
import imdb from "./imdb.png";
import tomato from "./tomato.png";
const Hero = () => {
  return (
    <header className="Hero">
      <nav>
        <ul>
          <li>
            <img src={logo} alt="logo" height="40px" />
          </li>
          <li>
            <input type="text" placeholder="What do you want to watch?" />
          </li>
          <li>Sign in</li>
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </nav>
      <div className="Info">
        <p>
          <h1>
            John Wick 3:
            <br /> Parabellum
          </h1>
        </p>
        <p>
          <img src={imdb} alt="imdb" />
          86.0 / 100
          <span>
            <img src={tomato} alt="tomato" />
            97%
          </span>
        </p>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
          <br />
          <button>
            <img src={play} alt="play" /> WATCH TRAILER
          </button>
        </p>
      </div>
    </header>
  );
};

export default Hero;
