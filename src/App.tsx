import { Grid, GridItem } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area="nav">
        <Navigation />
      </GridItem>
      <GridItem area="main">
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
