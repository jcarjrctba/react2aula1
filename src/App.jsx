import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Grid, GridItem } from "./ui/grid";
import { Highlights } from "./components/highlights";
import { Photos } from "./components/photos";
import React from "react";

function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <Photos />
      </GridItem>
    </Grid>
  );
}

export default App;
