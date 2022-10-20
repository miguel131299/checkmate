import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Fake",
  },
  // {
  //   value: 1,
  //   label: "Very Sceptical",
  // },
  {
    value: 2,
    label: "Kann es nicht sagen",
  },
  // {
  //   value: 3,
  //   label: "Pretty Trustworthy",
  // },
  {
    value: 4,
    label: "Echt",
  },
];

function getWidth() {
  const { innerWidth } = window;
  return innerWidth;
}

getWidth();

export default function DiscreteSliderMarks(props) {
  return (
    <Box sx={{ width: getWidth() > 992 ? 600 : 300 }}>
      <Slider
        sx={{ color: "#90dea4" }}
        defaultValue={2}
        marks={marks}
        min={0}
        max={4}
        onChangeCommitted={props.sliderChange}
      />
    </Box>
  );
}
