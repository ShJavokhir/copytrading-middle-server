const closeAllOrders = (req, res, next, socket) => {
  const orderCloseTime = req.body.orderCloseTime;
  const responseJsonObject = {
    action: "orderCloseAll",
    orderCloseTime: orderCloseTime,
  };
  socket.send(JSON.stringify(responseJsonObject));
  res.status(200);
  res.send("Succesfully");
};

export { closeAllOrders };
