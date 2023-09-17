import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
const Footer = () => {
  return (
    <footer className="Foot">
      <div>
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
      </div>
      <div>© 2021 MovieBox by Adriana Eka Prayudha</div>
    </footer>
  );
};

export default Footer;
