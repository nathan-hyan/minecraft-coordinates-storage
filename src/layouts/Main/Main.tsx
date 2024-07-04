import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components";

function Main() {
  return (
    <Container>
      <NavigationBar />
      <Box sx={{ mt: 10 }}>
        <Outlet />
      </Box>
    </Container>
  );
}

export default Main;
