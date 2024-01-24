import { messageInfoProp } from "../App"


type MessageProp = {
   isYou:string
    message:messageInfoProp
    name:string
}

const Message = ({isYou,message,name}:MessageProp) => {

  if(isYou === "")
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
  else if(isYou === "notification"){
    return (<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
      
      <span style={{
        fontSize:"0.7rem",
        backgroundColor:"whitesmoke",
        padding:".5rem",
          borderRadius:"1rem",
          maxWidth:"85%"
        }}>{message.message}
      </span> 
  
         
    </div>)
  }
  else{
    console.log(isYou)
  return (<div> 
    <span style={{display:"flex",alignItems:"baseline"}}>
      <h6 className="text-muted" style={{fontSize:"0.7rem",marginRight:"0.5rem",fontWeight:"bold"}}> {name}</h6>
    <span style={{
      backgroundColor:"whitesmoke",
      padding:".7rem",
        borderRadius:"2rem",
        maxWidth:"85%"
      }}>{message.message}
    </span> 
    </span>
       
  </div>
)}

}

export default Message
