import { NavLink, useNavigate } from "react-router-dom";
import '../css/SignInPage.css'; 
import { useChatContext } from "../context/ChatContext";

const SignInPage = () => {
  const navigate = useNavigate();
 const {name,setName}= useChatContext()

  return (
    <div className="sign-in-page-container row m-0 overflow-hidden">
      <span className="image-container col-lg-6 col-md-6 col-sm-12">
        <img className="image" src="../public/messenger.png" alt="" />
      </span>
      <span className="form-container col-lg-6 col-md-6 col-sm-12">
        <strong>
          <h4 className="form-title">Let's Get Started...</h4>
        </strong>
        <input
          onKeyDown={(e) => (e.key === "Enter" ? navigate("/chat") : "")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-Field text-dark "
          type="text"
          placeholder="Enter Your Name"
          
        />
        <NavLink
          className={`btn btn-primary login-button ${
            name.length > 4 ? "" : "disabled"
          }`}
          to="/chat"
          state={name}
        >
          Login
        </NavLink>
      </span>
    </div>
  );
};

export default SignInPage;
