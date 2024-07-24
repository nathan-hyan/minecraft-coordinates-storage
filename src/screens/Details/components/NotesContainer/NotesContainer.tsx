import { PlusOneRounded, Edit, Delete } from "@mui/icons-material";
import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { AddNote, ConfirmDeletion } from "./components";

interface Props {
  notes: string[];
}

function NotesContainer({ notes }: Props) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);

  const toggleAdd = () => setAddModalOpen((prevState) => !prevState);

  const toggleDeletion = () => setDeleteModalOpen((prevState) => !prevState);

  const selectNote = (note: string) => {
    setNoteToDelete(note);
    toggleDeletion();
  };

  const doesNotesExist = notes && notes.length;

  return (
    <>
      <AddNote open={addModalOpen} handleClose={toggleAdd} />

      <ConfirmDeletion
        open={deleteModalOpen}
        handleClose={toggleDeletion}
        currentNote={noteToDelete}
      />

      <Grid item xs={12}>
        <Button
          variant="contained"
          startIcon={<PlusOneRounded />}
          sx={{ mb: 2 }}
          onClick={toggleAdd}
        >
          Add Note
        </Button>
        {doesNotesExist ? (
          <Typography variant="body1">Notes: </Typography>
        ) : null}
      </Grid>

      <Grid item container spacing={2}>
        {doesNotesExist
          ? notes.map((note) => (
              <Grid item key={note}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">{note}</Typography>
                  </CardContent>

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <Edit />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      onClick={() => selectNote(note)}
                    >
                      <Delete />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
}
export default NotesContainer;
