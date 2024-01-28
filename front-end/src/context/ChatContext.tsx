import { ReactNode, createContext, useContext } from "react";
import { messageInfoProp } from "../App";
import { COMPLETE_KEY, useLocalStorage } from "../hooks/useLocalStorage";




type ChatContextProp = {
    messageData:messageInfoProp[],
    setMessageData:React.Dispatch<React.SetStateAction<messageInfoProp[]>>
    message:string 
    setMessage:React.Dispatch<React.SetStateAction<string>>
    id:string 
    setId:React.Dispatch<React.SetStateAction<string>>
    name:string 
    setName:React.Dispatch<React.SetStateAction<string>>
    contactList:string[]
    setContactList:React.Dispatch<React.SetStateAction<string[]>>
    removeData:()=>void

}

const ChatContext = createContext({} as ChatContextProp);


export function useChatContext(){
    return useContext(ChatContext);
}

type ChatProps = {
    children:ReactNode
}

export function removeData(){
    localStorage.removeItem(COMPLETE_KEY+"name")
    localStorage.removeItem(COMPLETE_KEY+"message")
    localStorage.removeItem(COMPLETE_KEY+"messageData")
    localStorage.removeItem(COMPLETE_KEY+"id")
    localStorage.removeItem(COMPLETE_KEY+"contactList")
}

 export function ChatContextProvider({children}:ChatProps){

    const [messageData, setMessageData] = useLocalStorage<messageInfoProp[]>("messageData",[]);
    const [message, setMessage] = useLocalStorage<string>("message","");
    const [id, setId] = useLocalStorage<string>("id","");
    const [name,setName] = useLocalStorage<string>("name","");
    const[contactList,setContactList] = useLocalStorage<string[]>("contactList",[])
    
    return( <ChatContext.Provider
    value={
       { 
        messageData,
        setMessageData,
        message,
        setMessage,
        id,
        setId,
        name,
        setName,
        contactList,
        setContactList,
        removeData
     }
    }
    >
    
    {children}
    </ChatContext.Provider>)
     

 }