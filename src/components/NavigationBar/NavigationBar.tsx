import { Edit, PlusOneRounded } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function NavigationBar() {
  const push = useNavigate();
  const { locationId } = useParams();

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

        {locationId && (
          <Button
            variant="contained"
            startIcon={<Edit />}
            sx={{ mr: 2 }}
            onClick={() => push(`/edit/${locationId}`)}
          >
            Edit Location
          </Button>
        )}
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
