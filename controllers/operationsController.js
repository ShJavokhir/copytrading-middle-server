import express from "express";
import {sendOrder} from "../operations/sendOrder.js";
import {openPendingOrder} from "../operations/openPendingOrder.js";
import {modifyOrder} from "../operations/modifyOrder.js";
import {deleteOrder} from "../operations/deleteOrder.js";
import {closeOrder} from "../operations/closeOrder.js"

const router = express.Router();

var socket;


const setSock = (sock)=>{
    socket = sock
}

// setInterval(function() {
    
//     socket.send(["kitty cats", "meow!"]);
//   }, 500);
  

// router.use("/",(req, res)=>{
//     res.json(socket.listenerCount());
// });

router.get("/", (req, res)=>{
    return res.send("Wrong route @");
});

router.get("/sendOrder", (req, res, next)=>{
    return sendOrder(req, res, next, socket);
});
router.get("/openPendingOrder", (req, res, next)=>{
    openPendingOrder(req, res, next, socket);
});
router.get("/modifyOrder", (req, res, next)=>{
    modifyOrder(req, res, next, socket);
});
router.get("/deleteOrder", (req, res, next)=>{
    deleteOrder(req, res, next, socket);
});
router.get("/closeOrder", (req, res, next)=>{
    closeOrder(req, res, next, socket);
});


export {
    router,
    setSock
}