import { Context } from "../Context";
import { useContext } from "react";
import "../styles/Question.css";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import { Link } from "react-router-dom";

export default function Question() {
  const {
    currentQuestion,
    changeSliderValue,
    buttonClick,
    inInterventionGroup,
    showFeedback,
    showEndGameButton,
    getNumberOfQuestions,
    currentQuestionIndex,
  } = useContext(Context);

  function showPictures() {
    if (inInterventionGroup && showFeedback) {
      return (
        <div>
          {currentQuestion.hasHeader && (
            <img
              src={`./images/feedback/${currentQuestion.id} - header.jpg`}
              className="question--header-img"
            ></img>
          )}

          {currentQuestion.hasText && (
            <img
              src={`./images/feedback/${currentQuestion.id} - text.jpg`}
              className="question--text-img"
            ></img>
          )}
        </div>
      );
    } else {
      return (
        <div className="question--content">
          {currentQuestion.hasHeader && (
            <img
              src={`./images/articles/${currentQuestion.id} - header.jpg`}
              className="question--header-img"
            ></img>
          )}

          {currentQuestion.hasText && (
            <img
              src={`./images/articles/${currentQuestion.id} - text.jpg`}
              className="question--text-img"
            ></img>
          )}
        </div>
      );
    }
  }

  return (
    <div className="question-container">
      <div className="question-counter">
        Artikel #{currentQuestionIndex + 1}/{getNumberOfQuestions()}
      </div>
      <div className="question--content-container">{showPictures()}</div>
      <div className="question--answer-container">
        <h3 className="question--answer-question">
          Wie schätzt du den Artikel ein?
        </h3>
        <DiscreteSliderMarks
          className="question--answer-slider"
          sliderChange={changeSliderValue}
        />
        {showEndGameButton && (
          <Link to="/end">
            <button className="question--end-button question--answer-button">
              Beenden
            </button>
          </Link>
        )}
        {!showEndGameButton && (
          <button className="question--answer-button" onClick={buttonClick}>
            {showFeedback ? "Nächste Frage" : "Beantworten"}
          </button>
        )}
      </div>
    </div>
  );
}
