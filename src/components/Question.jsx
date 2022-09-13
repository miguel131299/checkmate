import "../styles/Question.css";
import DiscreteSliderMarks from "./DiscreteSliderMarks";

export default function Question() {
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
              <h2 className="question--title">
                Corona Vaccine is 103% deadly!
              </h2>
              <p className="question--source">Source: TUM Student Forum</p>
            </div>
          </div>
          <p className="question--content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="question--answer-container">
        <h3 className="question--answer-question">
          What do you think of this article?
        </h3>
        <DiscreteSliderMarks className="question--answer-slider" />
        <button className="question--answer-button">Next Question</button>
      </div>
    </div>
  );
}
