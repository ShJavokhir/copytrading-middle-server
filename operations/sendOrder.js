const sendOrder = (req, res, next, socket)=>{
    socket.send(["kitty cats", "meow!"]);
    res.send("sendOrder");
}

export{
    sendOrder
}