module.exports = (socket) => {
    try{
        Console.log("connected")
        socket.on("code",(data, callback) =>{
            socket.broadcast.emit("code", data)
        })

    }catch(ex){
        Console.log(ex.message)
    }
}