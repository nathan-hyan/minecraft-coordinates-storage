import { Grid, Typography } from "@mui/material";
import { LocationDisplay } from "../../components";
import { useLoaderData } from "react-router-dom";
import { LoaderType } from "../../globals/types";

function Landing() {
  const data = useLoaderData() as LoaderType[];

  return (
    <Grid container spacing={2}>
      {data.length > 0 ? (
        data.map((location) => (
          <LocationDisplay key={location.id} {...location} />
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            Create a new location to get started!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
export default Landing;
