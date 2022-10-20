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
    lastQuestion,
    inInterventionGroup,
    showFeedback,
    showEndGameButton,
  } = useContext(Context);

  console.log(currentQuestion);

  function showPictures() {
    if (inInterventionGroup && showFeedback) {
      console.log("inside");
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
      console.log("outside");
      return (
        <div>
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
      <div className="question--content-container">
        <div className="question--content">
          {/* <div className="question--header-container">
            <img
              className="question--header-image"
              src="./images/newspaper.png"
              alt=""
            />
            <div className="question--title-container">
              <h2 className="question--title">{currentQuestion.title}</h2>
              <p className="question--source">
                Source: {currentQuestion.source}
              </p>
            </div>
          </div>
          <p className="question--content-text">{currentQuestion.content}</p> */}
          {showPictures()}
        </div>
      </div>
      <div className="question--answer-container">
        <h3 className="question--answer-question">
          Was halten Sie von diesem Artikel?
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
