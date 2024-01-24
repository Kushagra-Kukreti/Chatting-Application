import { useState } from "react"
import { NavLink } from "react-router-dom";

 

const SignInPage = () => {

  const [name,setName] = useState<string>("");
  return (
    <div className="row overflow-hidden m-0">
        <span
         className="col-6"
         style={{
            height:"100vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }} 
         >
            <img 
            style={{width:"100%",objectFit:"cover"}}
            src="../public/messenger.png" alt="" />
              
        </span>
        <span className="col-6"
           style={{
            backgroundColor:"whitesmoke",
            height:"100vh",
            gap:"1rem",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
          <strong><h4>Let's Get Started...</h4></strong>
          <input value={name} onChange={(e)=>setName(()=>e.target.value)}  style={{color:"lightgrey", border:"none",outline:"none", width:"70%",padding:"1rem",borderRadius:"0.5rem",fontWeight:"bold"}} className="text-dark" type="text"placeholder="Enter Your Name"/>
          <NavLink  style={{ width: "70%", padding: "1rem", fontWeight: "bold" }} className={`${"btn btn-primary"} ${name.length>4 ?"":"disabled"}`} to={"/chat"} state={name}  >Login</NavLink>
        </span>
    </div>
  )
}

export default SignInPage
