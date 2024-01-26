import ChatPage from "../pages/ChatPage"
import SideBar from "./SideBar"
import "../css/MainChatSection.css"

const MainChatSection = () => {
  return (
    <div className="main-chat-section">
        <span className="col-4 sidebar-div"><SideBar/></span>
        <span className="col-8"><ChatPage/></span>
    </div>
  )
}

export default MainChatSection
