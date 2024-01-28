import ChatPage from "../pages/ChatPage"
import "../css/MainChatSection.css"

const MainChatSection = () => {
  return (
    <div className="main-chat-section" style={{display:"flex", justifyContent:"center"}}>
        {/* <span className="col-4 sidebar-div"><SideBar/></span> */}
        <span className="col-8"><ChatPage/></span>
    </div>
  )
}

export default MainChatSection
