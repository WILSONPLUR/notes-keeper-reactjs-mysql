import React, { useCallback, useState } from "react";
import ListItem from "./ListItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";

interface INote {
  title: string;
  description: string;
  isDone: number;
  _id: string;
}

interface IListProps {
  notes: INote[];
  items: number[];
}

const List = ({ notes, items }: IListProps) => {
  return (
    <Box marginY="40px">
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {notes.map((note: INote, i: number) => (
          <ListItem key={note._id} note={note} />
        ))}
      </SortableContext>
    </Box>
  );
};

export default List;
