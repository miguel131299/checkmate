import "../styles/Menu.css";
import { Context } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const { currentQuestion, showFeedback, inInterventionGroup } =
    useContext(Context);

  function getFeedbackElements() {
    const elements = currentQuestion.feedback.map((fb) => {
      return (
        <div className="menu--feedback-section">
          <div
            className="menu--feedback-indicator"
            style={{ backgroundColor: fb.color }}
          ></div>
          <div className="menu--feedback-text">{fb.text}</div>
        </div>
      );
    });

    const fakeNewsStatus = (
      <div className="menu--feedback-section">
        Dieser Artikel ist {currentQuestion.isFakeNews ? "fake" : "echt"}
      </div>
    );

    return [fakeNewsStatus, ...elements];
  }

  return (
    <div className="menu-container">
      <div className="menu--info-container">
        {showFeedback && inInterventionGroup && getFeedbackElements()}
      </div>
      <div className="menu--logo-container">
        {/* <Link> */}
        <img
          className="menu--logo"
          src="./images/CheckMate Logo Transparent Background.png"
          alt="Checkmate Logo"
        />
        {/* </Link> */}
        <p className="menu--logo-slogan">
          Ein Projekt der TUM: Junge Akademie {currentQuestion.id}
        </p>
      </div>
    </div>
  );
}
