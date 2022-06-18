import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Color } from "chroma-js";
const styles = {
  root: {
    background: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    overflow: "hidden",
    "&hover": {
      cursor: "pointer",
    },
  },
  colors: { background: "gray" },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative,",
  },
  emoji: { marginLeft: "0.5rem", fontSize: "1.5rem" },
};
function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
