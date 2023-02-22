const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3500;
app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM notes_data", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  db.query(
    `INSERT INTO notes_data (
        title,
        description,
        isDone
    ) VALUES (
        ?,
        ?,
        ?
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

app.listen(PORT, () =>
  console.log(`Server was started on http://localhost:${PORT}`)
);
