import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Navigate } from "react-router-dom";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
function NewPaletteNav({
  classes,
  palettes,
  addNewPalette,
  useColors,
  setOpen,
  open,
}) {
  const [usePaletteError, setUsePaletteError] = useState(["", false]);
  const [useNavigate, setUseNavigate] = useState(false);
  const [useNewPaletteName, setUseNewPaletteName] = useState("");
  // ___________________________________________________
  const handleChange = (e) => {
    setUseNewPaletteName(e.target.value);
  };
  // __________________________________________________
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // __________________________________________________
  function HandleSubmit(e) {
    e.preventDefault();
    // the value can't be empty
    if (useNewPaletteName === "") {
      setUsePaletteError(["Please Write A Palette Name", true]);
      return null;
    }
    // the value  can't be exiested before
    const names = palettes.map((palette) => palette.paletteName.toLowerCase());

    if (names.some((name) => name == useNewPaletteName.toLowerCase())) {
      setUsePaletteError([" This Name Already Exiest", true]);
      return null;
    }
    // the value can't contain any numbers
    if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].some((num) =>
        useNewPaletteName.split("").includes(num)
      )
    ) {
      setUsePaletteError(["Can't Write Numbers Only Text", true]);
      return null;
    }

    setUsePaletteError(["", false]);
    setUseNavigate(true);
    const newPalette = {
      paletteName: useNewPaletteName,
      colors: useColors,
      id: useNewPaletteName.toLowerCase().replace(" ", "-"),
    };
    return addNewPalette(newPalette);
  }
  // ______________________________________________________________
  return (
    <div>
      {" "}
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          {useNavigate && <Navigate to="/" replace={true} />}
          <form onSubmit={HandleSubmit}>
            <TextField
              error={usePaletteError[1]}
              helperText={usePaletteError[0]}
              type="text"
              value={useNewPaletteName}
              onChange={handleChange}
              label="Palette Name"
              name="palette"
            />
            <Button variant="contained" color="primary" type={"submit"}>
              Save Your Palette
            </Button>
          </form>
          <NavLink to="/">
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NewPaletteNav;
