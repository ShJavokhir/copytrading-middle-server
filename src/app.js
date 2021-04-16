import express from "express";
import zmq from "zeromq";
import bodyparser from "body-parser"
import dotenv from "dotenv";
import {router, setSock} from "./controllers/operationsController.js";


//configurations and initial settings
const app = express();
const sock = zmq.socket("pub");
dotenv.config();
app.use(bodyparser.json());
//Max listeners can be set here
sock.setMaxListeners(20);


//binding host and port
sock.bindSync(process.env.SOCKET_HOST);

setInterval(function(){
  //console.log('sending a multipart message envelope');
  sock.send("aaa");
}, 500);


setSock(sock);
app.use("/operations", router );

app.use(function (err, req, res, next) {
  const statusCode = err.code || 400;
  res.status(statusCode).json({
    status: "fail😭",
    error: err.message,
  });
});

//404
app.use((req, res, next) =>{
  res.sendStatus(404);
});

//listening port (express)
app.listen(process.env.PORT, ()=>{
  console.log(`Listening port ${process.env.PORT}`);
});