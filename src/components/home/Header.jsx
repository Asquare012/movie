import Menu from "../assets/Menu.png";
import Notification from "../assets/Notif.png";
import "./styles/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={Menu} alt="menu" height="28px" />
          </li>
          <li>MOVIES</li>
          <li>
            <img src={Notification} alt="notification" height="28px" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
