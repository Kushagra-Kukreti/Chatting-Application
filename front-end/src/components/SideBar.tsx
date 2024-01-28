
import { useEffect } from "react"
import { useChatContext } from "../context/ChatContext"
import "../css/SideBar.css"
import ContactCard from "./ContactCard"
import SideBarHeader from "./SideBarHeader"
const SideBar = () => {
 const {messageData,contactList,setContactList}= useChatContext();

 useEffect(()=>{
 const uniqueContacts = new Set<string>()
  messageData.map((message)=>{
    uniqueContacts.add(message.id)
  })
   setContactList(Array.from(uniqueContacts))
   console.log("Contact List ye h :",contactList)

 },[messageData])
  return (
    <>
     <SideBarHeader/>
    <div className="side-bar">
     {
      contactList.map((currID)=>{
        if(currID !== "notification" && currID!== "")
        return <ContactCard key={currID} id={currID}/>
      })
     }
    </div>
    </>
  )
}

export default SideBar
