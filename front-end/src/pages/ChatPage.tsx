// ChatPage.tsx

import { useEffect } from "react";
import socketIO from "socket.io-client";
import MessageArea from "../components/MessageArea";
import ChatHeader from "../components/ChatHeader";
import SendButton from "../components/SendButton";
import "../css/ChatPage.css"; // Import the CSS file
import { useChatContext } from "../context/ChatContext";

const endPoint = "http://localhost:8000/";

const ChatPage = () => {
  
  const{messageData,setMessageData,id,setId,message,setMessage,name}=useChatContext()
  const clientSocket = socketIO(endPoint, { transports: ["websocket"] });

  const send = () => {
    clientSocket.emit("message", { id, message, name: name });
    setMessage("");
  };


  useEffect(() => {

     
    clientSocket.on("connect", () => {
      setMessageData(prevMessageData => [
        ...prevMessageData,
        { id: "notification", message: "You are connected!", name: "system" },
      ]);
      setId(() => clientSocket.id || "");
    });
  

    const dummyData = "Dummy data from client side";
    clientSocket.emit("chatJoin", { dummyData });

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
      clientSocket.emit("offline");
      clientSocket.off();
    };
  }, []);

  useEffect(() => {
    clientSocket.on("sendMessage", ({ id, message, name }) => {
      setMessageData([...messageData, { id, message, name }]);
    });

    return () => {
      clientSocket.off();
    };
  }, [messageData]);



  return (
    <div className="chat-page-container">
      <ChatHeader />
      <div id="message-area-container" className="message-area-container">
        <MessageArea id={id} messageData={messageData} name="" />
      </div>
      <div className="input-container">
        <input
          onKeyDown={(e) => (e.key === "Enter" ? send() : "")}
          className="input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Enter your message here"
        />
        <div className="btn p-2 send-button" onClick={send}>
          <SendButton />
        </div>
      </div>
    </div>
    
  );
};

export default ChatPage;
