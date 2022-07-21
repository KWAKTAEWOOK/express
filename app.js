import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "a9",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM todo ORDER BY id DESC");
  console.log(rows);
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
