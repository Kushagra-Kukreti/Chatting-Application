
import { NavLink } from "react-router-dom";
import MessengerIcon from "./MessengerIcon";
import ExitButton from "./ExitButton";
import '../css/ChatHeader.css';

const ChatHeader = () => {

  return (
    <div className="chat-header-container">
      <h3 className="chat-header-title">Groupchat <span><MessengerIcon/></span></h3>
      <NavLink className="btn" to={"/"} >
        <ExitButton/>
      </NavLink>
    </div>
  );
};

export default ChatHeader;
