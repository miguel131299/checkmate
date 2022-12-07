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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genderToInt(gender) {
  switch (gender) {
    case "male":
      return 0;
      break;
    case "female":
      return 1;
      break;
    case "diverse":
      return 2;
    default:
      return 3;
      break;
  }
}

function treatmentToInt(inInterventionGroup) {
  return inInterventionGroup ? 1 : 0;
}

function codeID(gender, mediaConsumption, inInterventionGroup, randomID) {
  const string = `99${genderToInt(
    gender
  )}99${mediaConsumption}99${treatmentToInt(
    inInterventionGroup
  )}99${randomID}99`;

  return parseInt(string);
}

const Context = React.createContext();

function ContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(2);
  const [user, setUser] = useState({
    id: getRandomInt(1, 100000),
    sessionID: "afterSeminar",
    age: 0,
    gender: "noAnswer",
    mediaConsumption: 0,
  });
  const [lastQuestion, setLastQuestion] = useState(false);
  const [showEndGameButton, setShowEndGameButton] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [inInterventionGroup, setInInterventionGroup] = useState(
    Math.random() > 0.5
  );
  const [fakeNewsDetection, setFakeNewsDetection] = useState(0);
  const [tableData, setTableData] = useState(createTableData());
  const [inGame, setInGame] = useState(false);

  function handleRegistrationChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleStarsValueChange(newValue) {
    setFakeNewsDetection(newValue);
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

  function buttonClick(elapsedTime) {
    if (!showFeedback) {
      submitAnswer(elapsedTime);
      updateTable();
      setSliderValue(2);
    }

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
    const params = {
      session_id: user.sessionID,
      age: user.age,
      gender: user.gender,
      media_consumption: user.mediaConsumption,
      fake_news_detection_ability: fakeNewsDetection,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    fetch("https://api.checkmate.schnack.dev/register", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // set User ID
        setUser((prevUser) => {
          return { ...prevUser, id: data.id };
        });

        setInInterventionGroup(data.treatment);
      })
      .catch((error) => {
        console.error("Error:", error);
        // set coded userID
        setUser((prevUser) => {
          return {
            ...prevUser,
            id: codeID(
              user.gender,
              user.mediaConsumption,
              inInterventionGroup,
              user.id
            ),
          };
        });
      });
  }

  function submitAnswer(responseTime) {
    const params = {
      session_id: user.sessionID,
      participant: user.id,
      question: currentQuestion.id,
      choice: sliderValue,
      response_time: responseTime,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://api.checkmate.schnack.dev/submit", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function getNumberOfQuestions() {
    return data.length;
  }

  function createTableData() {
    return data.map((elem, index) => {
      return {
        id: elem.id,
        index: index + 1,
        status: elem.isFakeNews ? "Fake" : "Echt",
        answer: "Keine Antwort",
      };
    });
  }

  function updateTable() {
    setTableData((prevTable) => {
      return prevTable.map((elem) => {
        if (elem.id === currentQuestion.id) {
          return { ...elem, answer: convertAnswerToText(sliderValue) };
        } else {
          return elem;
        }
      });
    });
  }

  function convertAnswerToText(answer) {
    switch (answer) {
      case 0:
        return "Fake";
        break;
      case 1:
        return "Eher Fake";
        break;
      case 2:
        return "Kann es nicht sagen";
        break;
      case 3:
        return "Eher Echt";
        break;
      case 4:
        return "Echt";
        break;

      default:
        break;
    }
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
        fakeNewsDetection,
        tableData,
        inGame,
        handleStarsValueChange,
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
