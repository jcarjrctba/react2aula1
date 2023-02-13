import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Grid, GridItem } from "./ui/grid";
import { Highlights } from "./components/highlights";
import { useEffect } from "react";
import { fetcher } from "./services/index";

function App() {
  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher("photos");
      console.log(response);
    };
    makeRequest();
  }, []);
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
      </GridItem>
    </Grid>
  );
}

export default App;
