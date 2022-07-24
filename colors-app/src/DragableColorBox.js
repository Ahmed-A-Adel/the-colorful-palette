import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-4.5px",
    cursor: "pointer",
    textAlign: "center",
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
function DragableColorBox({ color, classes, name }) {
  return (
    <div className={classes.root} style={{ background: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteOutlinedIcon />
      </div>
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
