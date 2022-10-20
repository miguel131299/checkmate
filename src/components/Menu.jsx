import "../styles/Menu.css";
import { Context } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const { score, currentQuestion } = useContext(Context);

  return (
    <div className="menu-container">
      <div className="menu--info-container">
        {/* <div className="menu--user-greeting menu--section">
          <img
            src="./images/user-icon.png"
            alt=""
            className="menu--user-greeting-img"
          />
          <h2>Hi, Test User!</h2>
        </div>
        <div className="menu--user-info menu--section">
          <div className="menu--user-point">
            Points: <span className="bold score">{score}</span>
          </div>
          <div className="menu--user-level ">
            Level:{" "}
            <span className="bold score">{currentQuestion.difficulty}</span>
          </div>
        </div> */}
      </div>
      <div className="menu--logo-container">
        <Link to="/">
          <img
            className="menu--logo"
            src="./images/CheckMate Logo Transparent Background.png"
            alt="Checkmate Logo"
          />
        </Link>
        <p className="menu--logo-slogan">Ein Projekt der TUM: Junge Akademie</p>
      </div>
    </div>
  );
}
