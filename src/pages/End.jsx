import "../styles/End.css";
import { Link } from "react-router-dom";

export default function End() {
  return (
    <div className="end-container">
      <div className="end--content">
        <div className="end--header">
          <Link to="/">
            <div className="logo-container">
              <img
                className="end--logo"
                src="./images/CheckMate Logo Transparent Background.png"
                alt=""
              />
            </div>
          </Link>
          <p className="registration--logo-slogan">
            Ein Projekt der TUM: Junge Akademie
          </p>
        </div>

        <div className="end--content-container">
          <h2 className="end--content-title">Glückwunsch!</h2>
          <p className="end--content-text">Sie haben alle Fragen beantwortet</p>
          <div className="end--content-button-container">
            <button className="end--content-button">Nochmal versuchen</button>
          </div>
        </div>
      </div>
      <div className="end--image-container">
        <img
          className="end--confetti-image"
          src="./images/confetti.png"
          alt=""
        />
        <img
          className="end--kneeling-image"
          src="./images/kneeling.png"
          alt=""
        />
      </div>
    </div>
  );
}
