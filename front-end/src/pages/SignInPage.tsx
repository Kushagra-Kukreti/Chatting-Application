 

const SignInPage = () => {
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
          <div style={{width:"70%",padding:"1rem",fontWeight:"bold"}} className="btn btn-primary">Login</div>
        </span>
    </div>
  )
}

export default SignInPage
