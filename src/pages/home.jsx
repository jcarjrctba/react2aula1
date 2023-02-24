import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Grid, GridItem } from "../ui/grid";
import { Highlights } from "../components/highlights";
import { Photos } from "../components/photos";

export const Home = () => (
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
