import { PropsOf } from "@emotion/react";
import { Grid, TextField } from "@mui/material";

function Input({ ...props }: PropsOf<typeof TextField>) {
  return (
    <Grid item>
      <TextField {...props} />
    </Grid>
  );
}
export default Input;
