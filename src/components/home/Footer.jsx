import "./styles/Footer.scss";
// import left from "../assets/Left.png";
import mid from "../assets/Mid.png";
import right from "../assets/Right.png";

const Footer = () => {
  return (
    <footer>
      <ol>
        <li>
          <img src={mid} alt="mid" height="22px" width="22px" />
        </li>
        <li>
          <img src={mid} alt="mid" height="22px" width="22px" />
        </li>
        <li>
          <img src={right} alt="right" height="22px" width="22px" />
        </li>
      </ol>
    </footer>
  );
};

export default Footer;
