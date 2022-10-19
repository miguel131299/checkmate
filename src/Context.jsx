import React, { useState } from "react";
import data from "./data";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [score, setScore] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);
  const [user, setUser] = useState({
    id: -99,
    age: -1,
    gender: "noAnswer",
    mediaConsumtion: -1,
    fakeNewsDetection: -1,
  });

  console.log(user);

  function handleRegistrationChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

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
    <Context.Provider
      value={{
        currentQuestion,
        score,
        user,
        changeSliderValue,
        buttonClick,
        handleRegistrationChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
