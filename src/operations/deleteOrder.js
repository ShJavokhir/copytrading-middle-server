const deleteOrder = (req, res, next, socket)=>{
    try{
        const orderTicket = req.body.orderTicket;

        const responseJsonObject = {
            action: "orderDelete",
            orderTicket : orderTicket,
        }

        socket.send(JSON.stringify(responseJsonObject));
        res.status(200);
        res.send("Succesfully");
    }catch(e){
        next(e);
    }
}

export{
    deleteOrder
}