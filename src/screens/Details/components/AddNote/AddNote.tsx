import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Input,
} from "@mui/material";
import { Form, useParams } from "react-router-dom";
import { Transition } from "../Transition/Transition";

interface Props {
  open: boolean;
  handleClose: () => void;
}

function AddNote({ open, handleClose }: Props) {
  const { locationId } = useParams();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-delete-note"
    >
      <Form action={`/details/${locationId}/addNote`} method="put">
        <DialogTitle>Enter the note</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Input name="note" type="text" placeholder="Note" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
export default AddNote;
