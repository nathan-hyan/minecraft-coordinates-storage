import {
  Typography,
  Chip,
  Divider,
  Avatar,
  Card,
  CardContent,
  Grid,
  CardActions,
  CardMedia,
  Stack,
} from "@mui/material";
import {
  dimensionCoverImageMap,
  dimensionImageMap,
  dimensionMap,
  structureMap,
} from "./utils";
import { useNavigate } from "react-router-dom";
import { LoaderType } from "../../globals/types";

function LocationDisplay({
  id,
  locationName,
  structure,
  dimension,
  x,
  y,
  z,
}: LoaderType) {
  const push = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ width: "100%", cursor: "pointer" }}
        onClick={() => push(`/details/${id}`)}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={dimensionCoverImageMap[dimension]}
          title={locationName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {locationName}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label={dimensionMap[dimension]}
              size="small"
              avatar={
                <Avatar
                  alt={dimensionMap[dimension]}
                  src={dimensionImageMap[dimension]}
                />
              }
            />
            {structure === "none" || !structure ? null : (
              <Chip label={structureMap[structure]} size="small" />
            )}
          </Stack>
        </CardContent>
        <Divider sx={{ my: 2 }} />
        <CardActions>
          <Typography variant="body1">X: {x}</Typography>
          <Typography variant="body1">Y: {y ?? "~"}</Typography>
          <Typography variant="body1">Z: {z}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default LocationDisplay;
