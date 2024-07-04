import { useLoaderData } from "react-router-dom";
import { LoaderType } from "../../globals/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {
  dimensionCoverImageMap,
  structureMap,
} from "../../components/LocationDisplay/utils";
import { Delete, Edit, PlusOneRounded } from "@mui/icons-material";
import { useState } from "react";
import { AddNote, ConfirmDeletion } from "./components";

function Details() {
  const data = useLoaderData() as LoaderType;
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);

  const toggleAdd = () => setAddModalOpen((prevState) => !prevState);
  const toggleDeletion = () => setDeleteModalOpen((prevState) => !prevState);
  const selectNote = (note: string) => {
    setNoteToDelete(note);
    toggleDeletion();
  };

  return (
    <>
      <AddNote open={addModalOpen} handleClose={toggleAdd} />
      <ConfirmDeletion
        open={deleteModalOpen}
        handleClose={toggleDeletion}
        currentNote={noteToDelete}
      />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img
            src={dimensionCoverImageMap[data.dimension]}
            alt="Dimension"
            width={"100%"}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">{data.locationName}</Typography>
          {data.structure ? (
            <Chip label={structureMap[data.structure]} size="small" />
          ) : null}

          <Typography variant="body1" sx={{ mt: 2 }}>
            X: {data.x}
            <br />
            Y: {data.y}
            <br />
            Z: {data.z}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<PlusOneRounded />}
            sx={{ mb: 2 }}
            onClick={toggleAdd}
          >
            Add Note
          </Button>
          <Typography variant="body1">Notes: </Typography>
        </Grid>
        <Grid item container spacing={2}>
          {data.notes.map((note) => (
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
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Details;
