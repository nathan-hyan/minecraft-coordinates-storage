import { Delete, Edit, PlusOneRounded } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteLocationModal from "./components/DeleteLocationModal/DeleteLocationModal";

function NavigationBar() {
  const push = useNavigate();
  const { locationId } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <DeleteLocationModal
        open={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
      />
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
            <>
              <Button
                color="error"
                startIcon={<Delete />}
                sx={{ mr: 2 }}
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Location
              </Button>
              <Button
                variant="contained"
                startIcon={<Edit />}
                sx={{ mr: 2 }}
                onClick={() => push(`/edit/${locationId}`)}
              >
                Edit Location
              </Button>
            </>
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
    </>
  );
}
export default NavigationBar;
