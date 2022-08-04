import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export function SortableItem(props) {
  const { attributes, transition, transform, setNodeRef, listeners } =
    useSortable({
      id: props.id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "20%",
    height: "25%",
  };
  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
