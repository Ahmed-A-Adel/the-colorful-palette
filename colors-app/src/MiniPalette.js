import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id, deletePalette } = props;
  const miniColorBoxs = colors.map((color) => (
    <div
      className={classes.colorBox}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));
  let navigate = useNavigate();
  function HandleClick() {
    navigate(`/palette/${id}`);
  }
  function handleDelete(e) {
    deletePalette(e, id);
  }

  return (
    <div className={classes.root} onClick={HandleClick}>
      <div className={classes.delete} onClick={handleDelete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxs}</div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
