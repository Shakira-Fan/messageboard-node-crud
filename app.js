const messageRouter = require("./routes/messages.routes");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;
const connectDb = require("./db/connect");
//Require dotenv
require("dotenv").config();

//Middleware
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "*");

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }

//   next();
// });
app.use(cors());

app.use(express.json());

//Route
// app.use("/api/v1/crud", router);
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

//Connection
const start = async () => {
  try {
    await connectDb("mongodb://localhost/test");
    app.listen(port, (req, res) => {
      console.log("You are listening to port :", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
