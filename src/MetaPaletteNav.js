import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Navigate, NavLink } from "react-router-dom";
import Picker from "@emoji-mart/react";
function MetaPaletteNav(props) {
  const { palettes, addNewPalette, useColors } = props;
  const [useNewPaletteName, setUseNewPaletteName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [usePaletteError, setUsePaletteError] = useState(["", false]);
  const [useNavigate, setUseNavigate] = useState(false);
  // ___________________________________________________
  const handleChange = (e) => {
    setUseNewPaletteName(e.target.value);
  };
  // __________________________________________________
  const handleClickOpen = () => {
    setOpen("form");
  };

  const handleClose = () => {
    setOpen("false");
  };
  const HandleSubmit = (e) => {
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
    setOpen("picker");
  };
  //   _____________________________________________________________________
  function showPicker(e) {
    setOpen(false);
    const newPalette = {
      paletteName: useNewPaletteName,
      colors: useColors,
      id: useNewPaletteName.toLowerCase().replace(" ", "-"),
      emoji: e.native,
    };
    setUseNavigate(true);
    return addNewPalette(newPalette);
  }
  return (
    <div>
      {useNavigate && <Navigate to="/the-colorful-palette" replace={true} />}
      <Button
        style={{ marginRight: "5px" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Save
      </Button>
      <NavLink to="/the-colorful-palette">
        <Button variant="contained" color="secondary">
          Go Back
        </Button>
      </NavLink>
      <Dialog open={open === "picker"} onClose={handleClose}>
        <Picker onEmojiSelect={showPicker} />
      </Dialog>
      <Dialog
        open={open === "form"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={HandleSubmit}>
          <DialogTitle id="form-dialog-title">
            Choese a palette name
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              please enter a name for your new beutifual palette, make sure it's
              unique{" "}
            </DialogContentText>

            <TextField
              error={usePaletteError[1]}
              helperText={usePaletteError[0]}
              type="text"
              value={useNewPaletteName}
              onChange={handleChange}
              label="Palette Name"
              name="palette"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type={"submit"}
              style={{ marginRight: "5px" }}
            >
              Save Your Palette
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
export default MetaPaletteNav;
