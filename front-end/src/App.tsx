import { Route, Routes } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import ChatPage from "./pages/ChatPage"


export type messageInfoProp  ={
  id:string 
  message:string
}

function App() {
  
  return (
    <>
         <Routes>
           <Route path="/" element={<SignInPage/>}/>
           <Route path="/chat" element={<ChatPage/>}/>
         </Routes>
    </>
  )
}

export default App
