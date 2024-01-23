import { useEffect, useState} from "react";
import socketIO from "socket.io-client";
import MessageArea from "../components/MessageArea";
import { messageInfoProp } from "../App";

const endPoint = "http://localhost:8000/";

 
const ChatPage = () => {

  const [messageData,setMessageData] = useState<messageInfoProp[]>([])
  const [message,setMessage] = useState<string>("")
  const[id,setId] = useState("")
  const clientSocket = socketIO(endPoint, { transports: ["websocket"] })
  const send = ()=>{
   
    clientSocket.emit("message",{id,message})
    setMessage("")
  }


  useEffect(()=>{
    console.log("The id is:::",id )
  },[id])
  useEffect(() => {
    clientSocket.on("connect", () => {
      alert("you are connected");
      setId(()=>clientSocket.id||"")
    });

    const dummyData = "Dummy data from client side";

    //emit se data bhejenge backend pr yaani server pr --- server pr on method me chala jayega ye
    clientSocket.emit("chatJoin", { dummyData }); //chatJoin apna naam de skte h but firr client aur server side event ka naam same dena

    clientSocket.on("Welcome", ({ dummyDataFromServer }) => {
      console.log("Received to client end:", dummyDataFromServer);
    });

    clientSocket.on("broadcast", ({ msgForBroadcast }) => {
      console.log("BroadCast msg :", msgForBroadcast);
    });

    clientSocket.on("left", ({ useLeftInfo }) => {
      console.log(useLeftInfo);
    });

    return () => {
      clientSocket.emit("disconnect");
      clientSocket.off();
    };
  }, []);

  useEffect(()=>{
    clientSocket.on("sendMessage",({id,message})=>{
      setMessageData([...messageData,{id,message}])
       console.log(message)
    })

    return ()=>{
      // iska reason ache se pata lgana
      clientSocket.off()
    }
  },[messageData])

  return (
     
    <div 
    style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      overflow:"hidden"
      }}
    > 
    <div style={{height:"91vh",width:"100%",overflow:"scroll"}}>
      <MessageArea id={id} messageData={messageData}/>
      </div>
      <div 
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"0.1rem",
        marginTop:"0.5vh",
        height:"8vh",
        position:"fixed",
        zIndex:"100",
        backgroundColor:"white",
        bottom:"0",
        width:"100%"
      }}
      >
      <input 
      onKeyDown={(e)=>(e.key === "Enter")?send():""}
      style={
        {
          width:"95vw",
          backgroundColor:"whitesmoke",
          outline:"none",
          borderRadius:"2rem",
          border:"none",
          padding:"0.5rem",
          color:"grey",
          paddingLeft:"1.2rem",
        }
      } 
      value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Enter your message here" />
      <div style={{backgroundColor:"whitesmoke", borderRadius:"10rem"}} className="btn p-2" onClick={send} >
        
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={"blue"} className="bi bi-send-fill " viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
        
        
        
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
