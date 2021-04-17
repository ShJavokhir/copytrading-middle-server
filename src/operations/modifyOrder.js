const modifyOrder = (req, res, next, socket) => {
  try {
    const orderSymbol = req.body.orderSymbol;
    const orderTicket = req.body.orderTicket;
    const orderModificationTime = req.body.orderModificationTime;
    const orderOpenPrice = req.body.orderOpenPrice; // for pending orders
    const orderTp = req.body.orderTp;
    const orderSl = req.body.orderSl;

    const responseJsonObject = {
      action: "orderModify",
      orderSymbol: orderSymbol,
      orderTicket: orderTicket,
      orderModificationTime: orderModificationTime,
      orderOpenPrice: orderOpenPrice,
      orderTp: orderTp,
      orderSl: orderSl,
    };

    socket.send(JSON.stringify(responseJsonObject));
    res.status(200);
    res.send("Succesfully");
  } catch (e) {
    next(e);
  }
};

export { modifyOrder };
