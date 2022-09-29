import { Context } from "../Context";
import { useContext } from "react";
import "../styles/Question.css";
import DiscreteSliderMarks from "./DiscreteSliderMarks";

export default function Question() {
  const { currentQuestion, changeSliderValue, buttonClick } =
    useContext(Context);

  return (
    <div className="question-container">
      <div className="question--content-container">
        <div className="question--content">
          <div className="question--header-container">
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
          <p className="question--content-text">{currentQuestion.content}</p>
        </div>
      </div>
      <div className="question--answer-container">
        <h3 className="question--answer-question">
          What do you think of this article?
        </h3>
        <DiscreteSliderMarks
          className="question--answer-slider"
          sliderChange={changeSliderValue}
        />
        <button
          className="question--answer-button"
          onClick={() => buttonClick(5)}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
