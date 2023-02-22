import React, { useState } from "react";
import "./App.css";
import { useQuery, useQueryClient } from "react-query";

function App() {
  const getNotes = async () => {
    const res = await fetch("http://localhost:3500/api/get");
    const data = res.json();
    return data;
  };
  const queryClient = useQueryClient();
  const { data } = useQuery("notes", getNotes);

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
