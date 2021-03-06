import express from "express";
import { sendOrder } from "../operations/sendOrder.js";
import { modifyOrder } from "../operations/modifyOrder.js";
import { closeOrder } from "../operations/closeOrder.js";
import { authorization } from "../middlewares/authorization.js";
import { closePartialOrder } from "../operations/closePartialOrder.js";
import { closeAllOrders } from "../operations/closeAllOrders.js";
const router = express.Router();

var socket;

const setSock = (sock) => {
  socket = sock;
};

router.use(authorization);

router.post("/sendOrder", (req, res, next) => {
  return sendOrder(req, res, next, socket);
});
router.post("/modifyOrder", (req, res, next) => {
  modifyOrder(req, res, next, socket);
});
router.post("/closeOrder", (req, res, next) => {
  closeOrder(req, res, next, socket);
});
router.post("/closePartialOrder", (req, res, next) => {
  closePartialOrder(req, res, next, socket);
});
router.post("/closeAllOrders", (req, res, next) => {
  closeAllOrders(req, res, next, socket);
});

export { router, setSock };
