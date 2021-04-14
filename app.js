import express from "express";
import zmq from "zeromq";
import {sendOrder} from "./operations/sendOrder.js";
import {openPendingOrder} from "./operations/openPendingOrder.js";
import {modifyOrder} from "./operations/modifyOrder.js";
import {deleteOrder} from "./operations/deleteOrder.js";
import {closeOrder} from "./operations/closeOrder.js"

const app = express();
const sock = zmq.socket("pub");
sock.bindSync("tcp://127.0.0.1:3000");

app.get("/sendOrder", sendOrder);
app.get("/openPendingOrder", openPendingOrder);
app.get("/modifyOrder", modifyOrder);
app.get("/deleteOrder", deleteOrder);
app.get("/closeOrder", closeOrder);

app.get("/", (req, res, next)=>{
  res.send("HELLO WORLD");
});

app.use((req, res)=>{
  res.sendStatus(404);
});



/*
setInterval(function() {
  console.log("sending a multipart message envelope");
  sock.send(["kitty cats", "meow!"]);
}, 500);
*/

app.listen(80, ()=>{
  console.log("Listening port 80");
});