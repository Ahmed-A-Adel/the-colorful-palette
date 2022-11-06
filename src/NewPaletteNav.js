import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MetaPaletteNav from "./MetaPaletteNav";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classe.appBar, {
          [classe.appBarShift]: open,
        })}
      >
        <Toolbar style={{ padding: "0 5px 0 13px" }}>
          <div className={classes.toolbarContainer}>
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classe.menuButton, open && classe.hide)}
              style={{ padding: "0", marginRight: "5px" }}
            >
              <AddToPhotosIcon />
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
