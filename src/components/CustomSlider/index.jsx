import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1000,
    label: "1000",
  },
];

const CustomSlider = ({ label = "Label", value, onChahge }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 460 }}>
      <Typography width={460} gutterBottom>
        {label}
      </Typography>
      <Slider
        min={0}
        step={1}
        max={1000}
        marks={marks}
        value={value}
        color="primary"
        onChange={onChahge}
      />
    </Box>
  );
};

export default CustomSlider;
