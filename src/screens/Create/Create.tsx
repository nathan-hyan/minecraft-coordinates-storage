import { Box, Button, Divider, Grid, MenuItem, Stack } from "@mui/material";
import { AVAILABLE_DIMENSIONS, AVAILABLE_STRUCTURES } from "./constants";
import Input from "../../components/Input/Input";
import { ToggleInput } from "../../components";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

function Create() {
  const [disableY, setDisableY] = useState(false);
  const push = useNavigate();

  const handleToggleSetDisableY = () => {
    setDisableY((prevState) => !prevState);
  };

  const returnToLanding = () => {
    push("/");
  };

  return (
    <Form method="post" action="/create">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Input
          name="locationName"
          label="Location name"
          variant="outlined"
          required
          fullWidth
        />

        <Input
          name="dimension"
          select
          label="Dimension"
          defaultValue="overworld"
          required
          fullWidth
        >
          {AVAILABLE_DIMENSIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Input>

        <Input
          name="structure"
          select
          label="Structure"
          defaultValue="none"
          required
          fullWidth
        >
          {AVAILABLE_STRUCTURES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Input>

        <Grid item>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Input
              name="x"
              label="X Coordinate"
              type="number"
              variant="outlined"
              required
            />

            <Box>
              <Input
                disabled={disableY}
                name="y"
                label="Y Coordinate"
                variant="outlined"
                type="number"
              />
              <ToggleInput
                name="disableY"
                checked={disableY}
                onChange={handleToggleSetDisableY}
              />
            </Box>

            <Input
              name="z"
              label="Z Coordinate"
              type="number"
              variant="outlined"
              required
            />
          </Stack>
        </Grid>
        <Box flexBasis={1} height={"100%"} />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Button color="error" onClick={returnToLanding}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>

        <Grid item></Grid>
      </Grid>
    </Form>
  );
}
export default Create;
