import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import MetaPaletteNav from "./MetaPaletteNav";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    "& div": {
      flexWrap: "wrap",
      placeItems: "center",
      justifyContent: "space-between",
    },
  },
  toolbarContainer: {
    display: "flex",
  },
};
function NewPaletteNav({
  classe,
  palettes,
  addNewPalette,
  useColors,
  setOpen,
  open,
  classes,
}) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // __________________________________________________

  // ______________________________________________________________
  return (
    <div className={classes.root}>
      {" "}
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classe.appBar, {
          [classe.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.toolbarContainer}>
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classe.menuButton, open && classe.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </div>

          <MetaPaletteNav
            addNewPalette={addNewPalette}
            palettes={palettes}
            useColors={useColors}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NewPaletteNav);
