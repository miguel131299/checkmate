import React, { useState } from "react";
import data from "./data";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);
  const [user, setUser] = useState({
    id: -99,
    age: 0,
    gender: "noAnswer",
    mediaConsumption: 0,
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
    submitAnswer();

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

  function resetGame() {
    setCurrentQuestion(data[0]);
    setCurrentQuestionIndex(0);
    setLastQuestion(false);
    setShowEndGameButton(false);
    setShowFeedback(false);
  }

  function registerUser() {
    // TODO: fetch session id

    const params = {
      session_id: "TEST",
      age: 7,
      gender: "male",
      media_consumption: "moderate",
      fake_news_detection_ability: "great",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    // fetch("http://api.checkmate.lucas-schnack.de/register", options)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    // fetch("http://api.checkmate.lucas-schnack.de/status")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    console.log(options);
  }

  function submitAnswer() {
    const params = {
      session_id: 1,
      participant: 2,
      question: currentQuestion.id,
      choice: sliderValue,
      // media_consumption: user.mediaConsumption,
      // fake_news_detection_ability: user.fakeNewsDetection,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // fetch("http://api.checkmate.lucas-schnack.de/submit", options)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    console.log(options);
  }

  function getNumberOfQuestions() {
    return data.length;
  }

  return (
    <Context.Provider
      value={{
        currentQuestion,
        user,
        showEndGameButton,
        showFeedback,
        inInterventionGroup,
        currentQuestionIndex,
        resetGame,
        changeSliderValue,
        buttonClick,
        handleRegistrationChange,
        registerUser,
        getNumberOfQuestions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
