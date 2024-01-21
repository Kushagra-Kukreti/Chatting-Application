 

const SignInPage = () => {
  return (
    <div 
    style={
        {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignContent:"center",

            
        }
    }
    >
       
        <div 
        style={
            {
                display:"flex",
                flexDirection:"column",
                alignContent:"center",
                alignItems:"center",
                backgroundColor:"black",
                width:"30vw",
                height:"50vh",
                borderRadius:"1rem",
                gap:"0.5rem"

            }
            }>
                 <h3 style={{color:"white"}}>Sign-in</h3>
            <input type="text" placeholder="Enter Your Name"/>
            <button style={{width:"80%"}}>Login</button>
        </div>
       
    </div>
  )
}

export default SignInPage
