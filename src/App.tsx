import React, { useState } from "react";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";
import List from "./components/Notes/List";
import Form from "./components/Form";
import { Box, Container } from "@mui/material";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function App() {
  const getNotes = async () => {
    const res = await fetch("http://localhost:3500/api/get/notes");
    const data = res.json();
    return data;
  };
  const queryClient = useQueryClient();
  const { data } = useQuery("notes", getNotes, { refetchInterval: 300 });
  const [items, setItems] = useState([1, 2, 3, 4]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <Container maxWidth="lg">
      <Form />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <List notes={data || []} items={items} />
      </DndContext>
    </Container>
  );
}

export default App;
