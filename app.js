const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 5000;
app.use(express.json());
app.use(express.static("./public"));

app.use("/tasks", tasks);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};
start();
