const closeOrder = (req, res, next, socket)=>{
    const orderTicket = req.body.orderTicket;
    const orderCloseTime = req.body.orderCloseTime;

    const responseJsonObject = {
        action: "orderClose",
        orderTicket : orderTicket,
        orderCloseTime: orderCloseTime
    }

        socket.send(JSON.stringify(responseJsonObject));
        res.status(200);
        res.send("Succesfully");
}

export{
    closeOrder
}