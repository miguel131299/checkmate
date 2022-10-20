import React, { useState } from "react";
import data from "./data";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);
  const [user, setUser] = useState({
    id: -99,
    age: 0,
    gender: "noAnswer",
    mediaConsumtion: 0,
    fakeNewsDetection: 1,
  });
  const [lastQuestion, setLastQuestion] = useState(false);
  const [showEndGameButton, setShowEndGameButton] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [inInterventionGroup, setInInterventionGroup] = useState(true);

  function handleRegistrationChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function goToNextQuestion() {
    // Set currentQuestion to next question
    setCurrentQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex === data.length - 1) {
        setLastQuestion(true);
      }

      setCurrentQuestion(data[newIndex]);

      return newIndex;
    });
  }

  function buttonClick() {
    if (inInterventionGroup) {
      if (showFeedback) {
        setShowFeedback(false);
        goToNextQuestion();
      } else {
        setShowFeedback(true);
        if (lastQuestion) {
          setShowEndGameButton(true);
        }
      }
    } else {
      if (!lastQuestion) {
        goToNextQuestion();
      } else {
        setShowEndGameButton(true);
      }
    }
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
        showEndGameButton,
        showFeedback,
        inInterventionGroup,
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
