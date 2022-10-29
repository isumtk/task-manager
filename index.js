const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();

// middlewares

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// routes

app.get("/hello", (req, res) => {
  res.send("task manager app.");
});

app.use("/api/v1/tasks", tasks);

const port = 4000;

const startServer = async () => {
  try {
    await connectDb(process.env.DB_URI);
    app.listen(port, console.log(`Server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
