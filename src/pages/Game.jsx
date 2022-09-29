import "../styles/Game.css";
import { useContext } from "react";
import Menu from "../components/Menu";
import Question from "../components/Question";

function Game() {
  return (
    <div className="game-container">
      <Question className="question" />
      <Menu className="menu" />
    </div>
  );
}

export default Game;
