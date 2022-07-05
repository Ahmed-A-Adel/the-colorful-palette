import React from "react";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {},
};
function DragableColorBox(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative",
        margin: "0 auto",
        marginBottom: "-4.5px",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {props.color}
    </div>
  );
}

export default DragableColorBox;
