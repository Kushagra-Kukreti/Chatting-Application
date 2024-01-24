import { messageInfoProp } from "../App"
import Message from "./Message"
import '../css/messageArea.css'
type messageDataProp ={
    id:string
    messageData:messageInfoProp[]
    name:string
}
 

const MessageArea = ({id,messageData,name}:messageDataProp) => {
  return (
     
    <div className="messageArea">

     {messageData.map((message,index)=><Message  isYou={message.id === id?"":message.id} key={index} message={message} name={message.id === id?name:message.name}/>)}
    </div>
  )
}

export default MessageArea
