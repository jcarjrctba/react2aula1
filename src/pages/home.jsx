import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Grid, GridItem } from "../ui/grid";
import { Highlights } from "../components/highlights";
import { Photos } from "../components/photos";

export const Home = (props) => (
  <Grid>
    <GridItem>
      <Navbar onClickLoginButton={props.onClickLoginButton} />
    </GridItem>
    <GridItem>
      <Header />
      <Highlights />
      <Photos />
    </GridItem>
  </Grid>
);
