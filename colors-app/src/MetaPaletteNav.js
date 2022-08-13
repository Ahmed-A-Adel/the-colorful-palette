import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Navigate, NavLink } from "react-router-dom";

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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    setUseNavigate(true);
    const newPalette = {
      paletteName: useNewPaletteName,
      colors: useColors,
      id: useNewPaletteName.toLowerCase().replace(" ", "-"),
    };
    return addNewPalette(newPalette);
  };
  return (
    <div>
      <NavLink to="/">
        <Button
          style={{ marginRight: "10px" }}
          variant="contained"
          color="secondary"
        >
          Go Back
        </Button>
      </NavLink>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
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
            {/* <Button variant="contained" color="primary" type={"submit"}>
              Save Your Palette
            </Button> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            type={"submit"}
          >
            Save Your Palette
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default MetaPaletteNav;
