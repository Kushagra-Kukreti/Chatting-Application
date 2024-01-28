import { messageInfoProp } from "../App";
import Message from "./Message";
import "../css/messageArea.css";
import { useCallback} from "react";

type messageDataProp = {
  id: string;
  messageData: messageInfoProp[];
  name: string;
};


const MessageArea = ({ id, messageData, name }: messageDataProp) => {
  const setRef = useCallback((node:HTMLDivElement)=>{
      if(node){
        node.scrollIntoView()
      }
   },[])
  return (
    <div className="messageArea">
      {messageData.map((message, index) => {
        const isLast = (messageData.length-1) === index
        return (
          <div key={index} ref={(isLast)?setRef:null}>
          <Message
            isYou={message.id === id ? "" : message.id}
            message={message}
            name={message.id === id ? name : message.name}
          />
          </div>
        );
      })}
    </div>
  );
};

export default MessageArea;
