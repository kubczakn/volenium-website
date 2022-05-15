import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    height: "100vh"
  }
});

function StratPage() {
  const classes = useStyles();

  return (
    <Grid container p={12} item className={classes.root}>
      <Grid item xs={12}>
        <Typography variant={"h4"} align={"center"}>
          Investment Strategies
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"h6"} align={"center"}>
          Links to separate pages with backtests
        </Typography>
      </Grid>
    </Grid>
  );
}

export default StratPage;
