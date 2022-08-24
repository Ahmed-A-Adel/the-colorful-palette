import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { styles } from "./styles/DragableColorBoxStyles";
function DragableColorBox({ color, classes, name, handleClick }) {
  const { attributes, transition, transform, setNodeRef, listeners } =
    useSortable({
      id: name,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,

    background: color,
  };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      className={classes.root}
      style={style}
      id="dragBox"
    >
      <div
        className={classes.boxContent}
        style={{ width: "100%", height: "auto" }}
      >
        <span>{name}</span>
        <DeleteOutlinedIcon onClick={() => handleClick(name)} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
