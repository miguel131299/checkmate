import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Context } from "../Context";
import { useContext } from "react";

function getMarks() {
  if (getWidth() > 992) {
    return [
      {
        value: 0,
        label: "Fake",
      },
      {
        value: 1,
        label: "Eher Fake",
      },
      {
        value: 2,
        label: "Kann es nicht sagen",
      },
      {
        value: 3,
        label: "Eher Echt",
      },
      {
        value: 4,
        label: "Echt",
      },
    ];
  } else {
    return [
      {
        value: 0,
        label: "Fake",
      },
      {
        value: 1,
        label: "",
      },
      {
        value: 2,
        label: "Kann es nicht sagen",
      },
      {
        value: 3,
        label: "",
      },
      {
        value: 4,
        label: "Echt",
      },
    ];
  }
}

function getWidth() {
  const { innerWidth } = window;
  return innerWidth;
}

getWidth();

export default function DiscreteSliderMarks(props) {
  // use to reset value of slider

  const { currentQuestion } = useContext(Context);

  return (
    <Box sx={{ width: getWidth() > 992 ? 600 : 300 }}>
      <Slider
        key={currentQuestion.id}
        sx={{ color: "#90dea4" }}
        defaultValue={2}
        marks={getMarks()}
        min={0}
        max={4}
        onChangeCommitted={props.sliderChange}
      />
    </Box>
  );
}
