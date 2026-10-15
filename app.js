const express = require("express");

const app = express();
app.use(express.json());

// API 1
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello, World!"
  });
});

// API 2
app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "Aarya",
    email: "aarya@example.com"
  });
});

// API 3
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    sum: a + b
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});