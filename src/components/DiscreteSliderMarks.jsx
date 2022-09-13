import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Fake",
  },
  {
    value: 1,
    label: "Very Sceptical",
  },
  {
    value: 2,
    label: "Can't Tell",
  },
  {
    value: 3,
    label: "Pretty Trustworthy",
  },
  {
    value: 4,
    label: "Real",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 600 }}>
      <Slider
        sx={{ color: "#90dea4" }}
        aria-label="Custom marks"
        defaultValue={2}
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={4}
      />
    </Box>
  );
}
