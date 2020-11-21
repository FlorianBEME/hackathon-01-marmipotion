import "./Footer.css";
import facebookL from "../../assets/socialLogo/facebookLight.png";
import instagramL from "../../assets/socialLogo/instagramLight.png";
import twitterL from "../../assets/socialLogo/twitterLight.png";
import youtubeL from "../../assets/socialLogo/youtubeLight.png";

function Footer() {
  return (
    <div className="footer">
      <div className="lineUp">
        <div className="social">
          <img src={facebookL} alt="social network" />
          <img src={instagramL} alt="social network" />
          <img src={twitterL} alt="social network" />
          <img src={youtubeL} alt="social network" />
        </div>
        <div className="contact">
          <h4>CONTACT</h4>
          <p>Green carrier pigeon, call name: 'Sylvain-Louis'</p>
          <p>Address: Seventh smoking tree in the Candy Forest</p>
        </div>
      </div>

      <div className="copyright">
        <p>Made with ♥ by ©MarmiPotion - 1540-1550</p>
      </div>
    </div>
  );
}

export default Footer;
