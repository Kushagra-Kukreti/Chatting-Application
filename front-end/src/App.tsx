import { Route, Routes } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import ChatPage from "./pages/ChatPage"


export type messageInfoProp  ={
  id:string 
  message:string
  name:string
}

function App() {
  
  return (
    <>
         <Routes>
           <Route path="/" element={<SignInPage/>}/>
           <Route path="/chat" element={<ChatPage/>}/>
           <Route path="/*" element={<SignInPage/>}/>
         </Routes>
    </>
  )
}

export default App
