import React from "react";
import { useParams, Link } from "react-router-dom";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers.js";
import Palette from "./Palette";
import MiniPalette from "./MiniPalette.js";
import { withStyles } from "@material-ui/core/styles";
const Styles = {
  root: {
    background: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  nav: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& a": {
      textTransform: "capitalize",
      color: "white",
    },
  },
  palettes: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gap: "5%",
  },
};

function Home(props) {
  const { id } = useParams();
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/newPalette">create new palette</Link>
        </nav>
        <div className={classes.palettes}>
          {seedColors.map((palette) => (
            <MiniPalette {...palette} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(Styles)(Home);
