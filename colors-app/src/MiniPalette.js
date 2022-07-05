import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Color } from "chroma-js";
import { useNavigate, Link } from "react-router-dom";
const styles = {
  root: {
    background: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    overflow: "hidden",
    // cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    background: "#d0c2c2",

    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
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
  colorBox: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id } = props;
  const miniColorBoxs = colors.map((color) => (
    <div
      className={classes.colorBox}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));
  let navigate = useNavigate();
  function HandleClick(id) {
    navigate(`/palette/${id}`);
  }
  return (
    <div className={classes.root} onClick={() => HandleClick(id)}>
      <div className={classes.colors}>{miniColorBoxs}</div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
