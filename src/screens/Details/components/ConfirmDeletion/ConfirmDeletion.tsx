import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Form, useParams } from "react-router-dom";
import { Transition } from "../Transition/Transition";

interface Props {
  open: boolean;
  handleClose: () => void;
  currentNote: string | null;
}

function ConfirmDeletion({ open, currentNote, handleClose }: Props) {
  const { id } = useParams();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-delete-note"
    >
      <DialogTitle>{"Are you sure?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          This will delete the note permanently. Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Form action={`/details/${id}/delete/${currentNote}`} method="delete">
          <Button onClick={handleClose} type="submit" color="error">
            Delete
          </Button>
        </Form>
      </DialogActions>
    </Dialog>
  );
}
export default ConfirmDeletion;
