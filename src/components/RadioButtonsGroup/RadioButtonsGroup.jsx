import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RadioButtonsGroup({ defaultValue, options, onChange }) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        row
      >
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={label}
            label={label}
            value={value}
            onChange={onChange}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 12,
                  },
                }}
              />
            }
            sx={{
              "& .MuiTypography-root": {
                fontSize: 12,
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
