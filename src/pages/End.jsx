import "../styles/End.css";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { useContext } from "react";
import BasicTable from "../components/BasicTable";

export default function End() {
  const { resetGame } = useContext(Context);

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
          <p className="end--content-text">Du hast alle Fragen beantwortet!</p>
          <p className="end--content-text">
            Jetzt warte kurz darauf, dass deine Mitschüler fertig werden!
          </p>

          {/* <div className="end--table-container">
            <BasicTable />
          </div> */}
          {/* <div className="end--content-button-container">
            <Link to="/game">
              <button className="end--content-button" onClick={resetGame}>
                Nochmal versuchen
              </button>
            </Link>
          </div> */}
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
