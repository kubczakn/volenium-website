import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#000000"
  }
});

function Header() {
  const classes = useStyles();

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 3 }}>
      <Grid container item>
        <AppBar position={"static"}>
          <Toolbar className={classes.bar}>
            <Typography className={classes.logo}>Volenium</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography p={1}>About</Typography>
              <Typography p={1}>Investment Strategies</Typography>
              <Typography>Contact Us</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Header;
