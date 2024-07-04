import { PropsOf } from "@emotion/react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function ToggleInput(props: PropsOf<typeof Checkbox>) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...props} defaultChecked />}
        label="Don´t use Y coordinate"
      />
    </FormGroup>
  );
}

export default ToggleInput;
