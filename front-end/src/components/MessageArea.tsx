import { messageInfoProp } from "../App"
import Message from "./Message"


type messageDataProp ={
    id:string
    messageData:messageInfoProp[]
}
 

const MessageArea = ({id,messageData}:messageDataProp) => {
  return (
    <div 
     style={
      {
        width:"100%",
         height:"91vh",
         display:"flex",
         flexDirection:"column",
         gap:"1.5rem",
         padding:"0.8rem"


        }}>

     {messageData.map((message,index)=><Message  isYou={message.id === id?true:false} key={index} message={message}/>)}
    </div>
  )
}

export default MessageArea
