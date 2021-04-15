const sendOrder = (req, res, next, socket)=>{
    try{
        socket.send(["kitty cats", "meow!"]);
        res.status(200);
        res.send("Succesfully sent");
    }catch(e){
        next(e);
    }
    
}

export{
    sendOrder
}