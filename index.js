const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();

// middlewares

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("task manager app.");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const startServer = async () => {
  try {
    await connectDb(process.env.DB_URI);
    app.listen(port, console.log(`Server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
