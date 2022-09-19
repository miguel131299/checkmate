import "./App.css";
import Question from "./components/Question";
import Menu from "./components/Menu";
import data from "./data";
import { useState } from "react";

console.log(data);

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [score, setScore] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);

  function givePoints(value) {
    // give points according to answer
    const correctAnswer = currentQuestion.isFakeNews ? 0 : 4;
    const difference = Math.abs(correctAnswer - sliderValue);
    const multiplier = 4 - difference;

    setScore((prevScore) => prevScore + 125 * multiplier);
  }

  function goToNextQuestion() {
    // Set currentQuestion to next question
    let nextQuestion = data.find((elem) => elem.id === currentQuestion.id + 1);
    if (typeof nextQuestion === "undefined") {
      nextQuestion = data[0];
    }
    setCurrentQuestion(nextQuestion);
  }

  function buttonClick(value) {
    givePoints(value);
    goToNextQuestion();
  }

  function changeSliderValue(event, value) {
    setSliderValue(value);
  }

  return (
    <div className="App">
      <Question
        className="question"
        title={currentQuestion.title}
        source={currentQuestion.source}
        text={currentQuestion.content}
        buttonClick={buttonClick}
        sliderChange={changeSliderValue}
      />
      <Menu
        className="menu"
        score={score}
        difficulty={currentQuestion.difficulty}
      />
    </div>
  );
}

export default App;
