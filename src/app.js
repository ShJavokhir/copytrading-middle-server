import express from "express";
import zmq from "zeromq";
import bodyparser from "body-parser"
import dotenv from "dotenv";
import {router, setSock} from "./controllers/operationsController.js";


const app = express();
const sock = zmq.socket("pub");

dotenv.config();
app.use(bodyparser.json());


//Max listeners can be set here
sock.setMaxListeners(20);
sock.bindSync("tcp://127.0.0.1:3000");
setSock(sock);
app.use("/operations", router );

app.use(function (err, req, res, next) {
  const statusCode = err.code || 400;
  res.status(statusCode).json({
    status: "fail😭",
    error: err.message,
  });
});

app.use((req, res, next) =>{
  res.sendStatus(404);
})
app.listen(80, ()=>{
  console.log("Listening port 80");
});