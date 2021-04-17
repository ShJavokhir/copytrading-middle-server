const sendOrder = (req, res, next, socket) => {
  try {
    const orderTicket = req.body.orderTicket;
    const orderType = req.body.orderType;
    const orderLots = req.body.orderLots;
    const orderSymbol = req.body.orderSymbol;
    const orderOpenPrice = req.body.orderOpenPrice;
    const orderOpenTime = req.body.orderOpenTime;
    const orderTp = req.body.orderTp;
    const orderSl = req.body.orderSl;

    const responseJsonObject = {
      action: "orderOpen",
      orderTicket: orderTicket,
      orderType: orderType,
      orderLots: orderLots,
      orderSymbol: orderSymbol,
      orderOpenPrice: orderOpenPrice,
      orderOpenTime: orderOpenTime,
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

export { sendOrder };
