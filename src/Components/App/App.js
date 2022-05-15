import "./App.css";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import About from "../About/About";
import StratPage from "../StratPage/StratPage";
import Contact from "../Contact/Contact";

function App() {
  return (
    <Grid container direction={"column"}>
      <Header />
      <Landing />
      <About />
      <StratPage />
      <Contact />
    </Grid>
  );
}

export default App;
