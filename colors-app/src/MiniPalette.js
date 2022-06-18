import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Color } from "chroma-js";
const styles = {
  main: {
    background: "black",
    "& h1": {
      color: "white",
      fontSize: "2rem",
    },
  },
};
function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
