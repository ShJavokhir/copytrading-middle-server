const modifyOrder = (req, res, next, socket)=>{
    try{
        const orderTicket = req.body.orderTicket;
        const orderModificationTime = req.body.orderModificationTime;
        const orderPrice = req.body.orderPrice; // for pending orders
        const orderTp = req.body.orderTp;
        const orderSl = req.body.orderSl;
        
        const responseJsonObject = {
            action: "orderModify",
            orderTicket : orderTicket,
            orderModificationTime : orderModificationTime,
            orderPrice : orderPrice,
            orderTp : orderTp,
            orderSl : orderSl,
        }

        socket.send(JSON.stringify(responseJsonObject));
        res.status(200);
        res.send("Succesfully");
    }catch(e){
        next(e);
    }
}

export{
    modifyOrder
}