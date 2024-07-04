import { PlusOneRounded } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const push = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}
          onClick={() => push("/")}
        >
          Minecraft Coordinate Storage
        </Typography>

        <Button
          variant="contained"
          startIcon={<PlusOneRounded />}
          onClick={() => push("/create")}
        >
          Add Location
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavigationBar;
