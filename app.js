import express from "express";
import zmq from "zeromq";

import {router, setSock} from "./controllers/operationsController.js";


const app = express();
const sock = zmq.socket("pub");
setSock(sock);
sock.bindSync("tcp://127.0.0.1:3000");

app.use("/operations", router );



app.use((req, res)=>{
  res.send("Not foundie 404");
});




app.listen(80, ()=>{
  console.log("Listening port 80");
});