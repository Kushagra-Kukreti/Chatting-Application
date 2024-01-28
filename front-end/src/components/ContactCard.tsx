
import "../css/ContactCard.css"

 type ContactProp={
  id:string
 }
 
const ContactCard = ({id}:ContactProp) => {

    return (
      <div className="card contact-card">
        <div className="card-body">{id}</div>
      </div>
    );
    
  
};

export default ContactCard;
