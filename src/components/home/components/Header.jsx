import "../styles/Header.scss";
import logo from "../assets/logo.png";
import Notification from "../assets/Notif.png";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="logo" height={"45px"} />
          </li>
          <li>REVIEWER</li>
          <li>
            <img src={Notification} alt="notification" height="25px" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
