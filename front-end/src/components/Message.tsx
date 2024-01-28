import { useEffect, useRef } from "react";
import { messageInfoProp } from "../App";
import "../css/Message.css"; // Import the CSS file

type MessageProp = {
  isYou: string;
  message: messageInfoProp;
  name: string;
};




const Message = ({ isYou, message, name }: MessageProp) => {
  
  const lastMessageRef =  useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(lastMessageRef.current){
      lastMessageRef.current.scrollIntoView();
    }
  })

  if (isYou === "" && (message.message!== "" )) {


    return (
      <div>
        <span className="bg-primary float-end message-span message-container text-light">
          {message.message}
        </span>
      </div>
    );
  } else if (isYou === "notification" && (message.message!== "")) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="notification-span message-container">
          {message.message}
        </span>
      </div>
    );
  } else if( message.message!== "") {
    return (
      <div>
        <span style={{ display: "flex", alignItems: "baseline" }}>
          <h6
            className="text-muted"
            style={{
              fontSize: "0.7rem",
              marginRight: "0.5rem",
              fontWeight: "bold",
            }}
          >
            {name}
          </h6>
          <span className="message-text message-container">
            {message.message}
          </span>
        </span>
      </div>
    );
  }
};

export default Message;
