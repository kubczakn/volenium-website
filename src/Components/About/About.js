import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    height: "100vh"
  },
  bios: {
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bioCard: {
    height: "175px"
  }
});

function About() {
  const classes = useStyles();

  return (
    <Grid container p={10} item className={classes.root}>
      <Typography className={classes.heading} variant="h4">
        About Us
      </Typography>
      <Typography align={"center"} sx={{ fontSize: 20 }}>
        We are a group of University of Michigan alumni who algorithmically
        invest in discretionary assets to generate exceptional risk-adjusted
        returns for institutional clients. We manipulate and augment financial
        and alternative data and apply strictly mathematical, statistical
        arbitrage and tree-based machine learning models to generate alpha.
      </Typography>
      <Grid container item spacing={1} className={classes.bios}>
        <Grid item xs={3}>
          <Card className={classes.bioCard}>
            <CardMedia component="img" image="" alt="Advait" />
            <CardContent>
              <Typography>This a bio card.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.bioCard}>
            <CardMedia component="img" image="" alt="Nick" />
            <CardContent>
              <Typography>This a bio card.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.bioCard}>
            <CardMedia component="img" image="" alt="Kevin" />
            <CardContent>
              <Typography>This a bio card.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.bioCard}>
            <CardMedia component="img" image="" alt="Nathan" />
            <CardContent>
              <Typography>This a bio card.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
