import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Form, useParams } from "react-router-dom";
import { Transition } from "../../../Transition/Transition";

interface Props {
  open: boolean;
  handleClose: () => void;
}

function DeleteLocationModal({ open, handleClose }: Props) {
  const { locationId } = useParams();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-delete-note"
    >
      <Form action={`/details/${locationId}/deleteLocation`} method="delete">
        <DialogTitle>
          Are you sure you want to delete this location?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This action will permanently delete the location. Are you sure you
            want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleClose}>
            Continue
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
export default DeleteLocationModal;
