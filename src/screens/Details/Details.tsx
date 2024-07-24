import { useLoaderData } from "react-router-dom";
import { LoaderType } from "@globals/types";
import { Chip, Grid, Typography } from "@mui/material";
import {
  dimensionCoverImageMap,
  structureMap,
} from "@components/LocationDisplay/utils";

import { NotesContainer } from "./components";

function Details() {
  const data = useLoaderData() as LoaderType;

  return (
    <>
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

        <NotesContainer notes={data.notes} />
      </Grid>
    </>
  );
}
export default Details;
