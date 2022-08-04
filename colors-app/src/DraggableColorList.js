import React, { useState } from "react";
import { SortableItem } from "./DroppableColorList";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensors,
  useSensor,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import DragableColorBox from "./DragableColorBox";
import "./DraggableColorList.css";
function DraggableColorList({ items, setItems, handleClick }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: " wrap",
        width: "100%",
        height: "100% ",
      }}
      className="draggable"
    >
      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((color) => (
            <DragableColorBox
              name={color.name}
              color={color.color}
              handleClick={() => handleClick(color.name)}
              key={color.name}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
  function handleDragEnd(e) {
    const { active, over } = e;
    if (active.id !== over.id) {
      const names = items.map((color) => color.name);
      const colors = items.map((color) => color.color);
      setItems((items) => {
        const oldIndex = names.indexOf(active.id);
        const newIndex = names.indexOf(over.id);
        const newColors = arrayMove(colors, oldIndex, newIndex);
        const newItems = arrayMove(names, oldIndex, newIndex).map((a, i) => {
          return { name: a, color: newColors[i] };
        });
        return newItems;
      });
    }
  }
}
export default DraggableColorList;
