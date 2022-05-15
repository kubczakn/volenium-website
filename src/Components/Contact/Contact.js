import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    height: "100vh"
  }
});

function Contact() {
  const classes = useStyles();

  return (
    <Grid container p={12} item className={classes.root}>
      <Grid item xs={12}>
        <Typography variant={"h4"} align={"center"}>
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"h6"} align="center">
          Have some sort of form here
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Contact;
