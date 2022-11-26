import "../styles/Game.css";
import Menu from "../components/Menu";
import Question from "../components/Question";

function Game() {
  window.onload = function () {
    window.addEventListener("beforeunload", function (e) {
      // if (formSubmitting) {
      //   return undefined;
      // }

      console.log("beforeunload");

      var confirmationMessage =
        "It looks like you have been editing something. " +
        "If you leave before saving, your changes will be lost.";

      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
  };

  return (
    <div className="game-container">
      <Question className="question" />
      <Menu className="menu" />
    </div>
  );
}

export default Game;
