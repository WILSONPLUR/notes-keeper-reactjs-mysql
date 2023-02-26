const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3500;
app.use(cors());
app.use(express.json());

app.get("/api/get/notes", (req, res) => {
  db.query("SELECT * FROM notes_data", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/api/post/note", (req, res) => {
  db.query(
    `INSERT INTO notes_data (
        title,
        description,
        isDone,
        _id
    ) VALUES (
        ?,
        ?,
        ?,
        UUID()
    )`,
    [req.body.title, req.body.description, req.body.isDone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.put("/api/update/note/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `
  UPDATE notes_data 
  SET title = ?, description = ?, isDone = ?
  WHERE _id = ${id}`,
    [req.body.title, req.body.description, req.body.isDone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.delete("/api/delete/note/:id", (req, res) => {
  const id = req.params.id;
  db.query(`DELETE FROM notes_data WHERE _id = '${id}'`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.delete("/api/delete/notes", (req, res) => {
  db.query(
    `
    DELETE FROM notes_data;
  `,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server was started on http://localhost:${PORT}`)
);
