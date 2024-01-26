
import { messageInfoProp } from "../App";
import "../css/ContactCard.css"
const ContactCard = ({name,id,message}:messageInfoProp) => {
  return (
    <div className="card contact-card">
      <div className="card-body">{name} <span>{id}</span> <span>{id}</span></div>

    </div>
  );
};

export default ContactCard;
