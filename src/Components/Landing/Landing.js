import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    height: "100vh"
  },
  arrow: {
    textAlign: "center"
  }
});

function Landing() {
  const classes = useStyles();

  return (
    <Grid container p={12} item className={classes.root}>
      <Grid item xs={12}>
        <Typography align={"center"} variant="h2">
          Landing Page
        </Typography>
      </Grid>
      <Grid className={classes.arrow} item xs={12}>
        <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
      </Grid>
    </Grid>
  );
}

export default Landing;
