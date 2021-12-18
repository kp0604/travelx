import { React} from "react";
import Search from "./components/search";
import ActivityList from "./components/activitylist";
import CityShortlist from "./components/cityShortlist";
import { Container, Grid, Box } from "@mui/material";

function App() {
  
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        paddingY: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Search />
          </Grid>
          <Grid item xs={12} md={6}>
            <CityShortlist />
          </Grid>
          <Grid item xs={12} md={6}>
            <ActivityList />
            {/* <Act /> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
