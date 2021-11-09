let socket=io();
        socket.on('connect',function(){
            console.log("connected");
            socket.emit('createMessage',{
                from:"Tushar",
                text:"I am learning socket and implementing socket.emit"
            })
        });
        socket.on('disconnect',function(){
            console.log("disconnected");
        });
        socket.on('newMessage',function(message){
            console.log("message",message);
        });