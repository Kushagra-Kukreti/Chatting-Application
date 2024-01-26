import { messageInfoProp } from "../App"
import { useChatContext } from "../context/ChatContext"
import "../css/SideBar.css"
import ContactCard from "./ContactCard"
import SideBarHeader from "./SideBarHeader"
const SideBar = () => {
 const {messageData}= useChatContext()
  return (
    <>
     <SideBarHeader/>
    <div className="side-bar">
     
      
      {messageData.map((currData:messageInfoProp)=>
        <ContactCard name={currData.name} id={currData.id} message={currData.message}/>
      )}


    </div>
    </>
  )
}

export default SideBar
