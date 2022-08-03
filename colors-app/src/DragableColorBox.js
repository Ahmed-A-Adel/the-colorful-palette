import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-4.5px",
    cursor: "pointer",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  boxContent: {
    position: "absolute",

    display: "flex",
    justifyContent: "space-between",
    textAlign: " start",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    fontSize: " 12px",
    letterSpacing: " 1px",
    textTransform: " capitalize",
    color: "black",
    "& svg": {
      transition: "all .2s ease",
      backfaceVisibility: "hidden",
    },
    "& svg:hover ": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
};
function DragableColorBox({ color, classes, name, handleClick }) {
  return (
    <div
      className={classes.root}
      style={{ background: color, width: "100%", height: "100%" }}
    >
      <div className={classes.boxContent} style={{ width: "100%" }}>
        <span>{name}</span>
        <DeleteOutlinedIcon onClick={handleClick} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
