import { messageInfoProp } from "../App"


type MessageProp = {
  isYou:boolean
    message:messageInfoProp
}

const Message = ({isYou,message}:MessageProp) => {

  if(isYou)
     return (
     
     <div>

      <span
       className="bg-primary float-end"
       style={{
        padding:".7rem",
        borderRadius:"2rem",
        maxWidth:"85%",
        color:"white"
       }}
       >{message.message}</span>    

          
     </div>
  )
  else
  return (<div>
   
    <span style={{
      backgroundColor:"whitesmoke",
      padding:".7rem",
        borderRadius:"2rem",
        maxWidth:"85%"
      }}>{message.message}
    </span> 
       
  </div>
)

}

export default Message
