
const http  =  require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");


const app = express() // express start krdi

app.use(cors())  // cors use hoga inter-communication ke liye
app.get("/",(req,res)=>{
    res.send("Hello from server bhaiji");
})

const server = http.createServer(app) // humare server me app daal diya

const serverSocket = socketIO(server) // har socket ko server mile

serverSocket.on("connect",(clientSocketOnServerSide)=>{    // serverSocket main circuit h  clientSocket ek user h 

  console.log("server connected")

  clientSocketOnServerSide.on("chatJoin",({dummyData})=>{   //chatJoin apna naam de skte h but firr client aur server side event ka naam same dena
     console.log("Received on server:",dummyData)

     const dummyDataFromServer = "This is coming from server side socket"

     clientSocketOnServerSide.emit("Welcome",{dummyDataFromServer})
    
     const msgForBroadcast = "Goes to everyone except the sender and the new socket ";
     clientSocketOnServerSide.broadcast.emit("broadcast", {msgForBroadcast})

  })


  clientSocketOnServerSide.on("message", ({id,message,name})=>{
        serverSocket.emit("sendMessage",{id,message,name})
  })


  clientSocketOnServerSide.on("disconnect",()=>{
    console.log("A user disconnected....")
    const userLeftInfo = "A user left the chat room"
    clientSocketOnServerSide.broadcast.emit("left",{userLeftInfo})
  })
  


})

const port = 8000 || process.env.PORT;
server.listen(port,()=>{
    console.log("Server started at:",port)
})
