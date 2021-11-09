const path =require('path');
const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const socketIO=require('socket.io');
const http=require('http');
const server=http.createServer(app);
const io=socketIO(server);
const publicpath=(path.join(__dirname,'/../public'));
app.use(express.static(publicpath));


io.on('connection',(socket)=>{
    // console.log(io);
    console.log("A new user just connected");
    socket.on('disconnect',(socket)=>{
        // console.log(io);
        console.log("A new user just disconnected");
    });
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
}) 