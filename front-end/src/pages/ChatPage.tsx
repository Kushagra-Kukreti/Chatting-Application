
import { useEffect } from "react"
import socketIO from "socket.io-client"

const endPoint = "http://localhost:8000/"
const ChatPage = () => {
   
  
    const clientSocket = socketIO(endPoint,{transports:["websocket"]})
     
    useEffect(()=>{

      clientSocket.on("connect",()=>{
        alert("you are connected")
    })
     
    const dummyData = "Dummy data from client side"

    //emit se data bhejenge backend pr yaani server pr --- server pr on method me chala jayega ye 
    clientSocket.emit("chatJoin",{ dummyData })//chatJoin apna naam de skte h but firr client aur server side event ka naam same dena


    clientSocket.on("Welcome",({dummyDataFromServer})=>{
           console.log("Received to client end:", dummyDataFromServer)
    })

    clientSocket.on("broadcast",({msgForBroadcast})=>{
      console.log("BroadCast msg :",msgForBroadcast)
    })
     

    clientSocket.on("left",({useLeftInfo})=>{
      console.log(useLeftInfo)
  })

    return ()=>{
      clientSocket.emit("disconnect");
      clientSocket.off()
      
    }

    },[])
   
   
      
  
    
  return (
    <div>
      <h1>CHAT-PAGE</h1>
      <input type="text" placeholder="Enter your message here"/>
      <button>Send</button>
    </div>
  )
}

export default ChatPage
