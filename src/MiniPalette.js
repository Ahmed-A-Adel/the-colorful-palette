import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { styles } from "./styles/MiniPaletteStyles";
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id, deletePalette } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const miniColorBoxs = colors.map((color) => (
    <div
      className={classes.colorBox}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));
  let navigate = useNavigate();
  function HandleClick() {
    navigate(`/the-colorful-palette/palette/${id}`);
  }
  function handleDelete(e) {
    deletePalette(e, id);
    setOpen(false);
  }

  return (
    <div className={classes.root} onClick={HandleClick}>
      <div>
        <div className={classes.delete} onClick={handleClickOpen}>
          <DeleteIcon className={classes.deleteIcon} />
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Did You Press The Delete Button ?
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleDelete} color="primary">
              Yes, I Did
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No, I'm Dead
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className={classes.colors}>{miniColorBoxs}</div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
