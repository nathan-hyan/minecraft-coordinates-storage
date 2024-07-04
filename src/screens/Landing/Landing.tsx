import { Grid } from "@mui/material";
import { LocationDisplay } from "../../components";
import { useLoaderData } from "react-router-dom";
import { LoaderType } from "../../globals/types";

function Landing() {
  const data = useLoaderData() as LoaderType[];

  return (
    <Grid container spacing={2}>
      {data.map((location) => (
        <LocationDisplay key={location.id} {...location} />
      ))}
    </Grid>
  );
}
export default Landing;
