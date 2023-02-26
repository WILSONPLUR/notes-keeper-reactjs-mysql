import { Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";

interface IListItemProps {
  note: {
    title: string;
    description: string;
    isDone: number;
    _id: string;
  };
}

const ListItem = ({
  note: { title, description, isDone, _id },
}: IListItemProps) => {
  const removeNote = async () => {
    await axios.delete(`http://localhost:3500/api/delete/note/${_id}`);
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(removeNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
  return (
    <Card sx={{ maxWidth: 275, marginY: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">
          {isDone === 0 ? "Not done yet" : "Done"}
        </Typography>
      </CardContent>
      <Button onClick={() => mutation.mutate()} size="small" color="error">
        Delete
      </Button>
    </Card>
  );
};

export default ListItem;
