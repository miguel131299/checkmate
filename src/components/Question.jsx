import { Context } from "../Context";
import { useContext, useEffect, useRef } from "react";
import "../styles/Question.css";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useElapsedTime } from "use-elapsed-time";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const questionContainer = useRef();

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

  function notify() {
    console.log(inInterventionGroup, currentQuestionIndex);
    if (inInterventionGroup && currentQuestionIndex == 0) {
      toast.success(
        "Hier siehst du typische Merkmale des Artikels. Diese helfen dir bei den nächsten Artikeln die richtige Antwort auszuwählen.",
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  }

  function getColorOfBar() {
    return inInterventionGroup ? "#0aa008" : "#90dea4";
  }

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            {...props}
            sx={{
              backgroundColor: "#E9FDF5",
              "& .MuiLinearProgress-bar": {
                backgroundColor: getColorOfBar(),
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  const { elapsedTime, reset } = useElapsedTime({
    isPlaying: true,
    updateInterval: 1,
    // onUpdate: (time) => console.log(`${time} seconds elapsed`),
  });

  useEffect(() => {
    reset();
  }, [currentQuestion]);

  return (
    <div className="question-container" ref={questionContainer}>
      <Box sx={{ width: "90%", marginBottom: "2em" }}>
        <LinearProgressWithLabel
          value={(currentQuestionIndex / getNumberOfQuestions()) * 100}
        />
      </Box>
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
          <button
            className="question--answer-button"
            onClick={() => {
              questionContainer.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });

              notify();

              buttonClick(elapsedTime);
            }}
          >
            {showFeedback ? "Nächste Frage" : "Beantworten"}
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
