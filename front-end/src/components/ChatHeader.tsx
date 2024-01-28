
import MessengerIcon from "./MessengerIcon";
import ExitButton from "./ExitButton";
import '../css/ChatHeader.css';
import { NavLink } from "react-router-dom";
import { useChatContext } from "../context/ChatContext";

const ChatHeader = () => {
 const {removeData}= useChatContext()
  return (
    <div className="chat-header-container">
      <h3 className="chat-header-title">Groupchat <span><MessengerIcon/></span></h3>
      <NavLink onClick={()=>{
           removeData()
        }} className="btn" to={"/"} >
        <ExitButton/>
      </NavLink>
    </div>
  );
};

export default ChatHeader;
