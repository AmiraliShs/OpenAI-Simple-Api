import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
