import { ReactNode, createContext, useContext, useState } from "react";
import { messageInfoProp } from "../App";




type ChatContextProp = {
    messageData:messageInfoProp[],
    setMessageData:React.Dispatch<React.SetStateAction<messageInfoProp[]>>
}

const ChatContext = createContext({} as ChatContextProp);


export function useChatContext(){
    return useContext(ChatContext);
}

type ChatProps = {
    children:ReactNode
}

 export function ChatContextProvider({children}:ChatProps){

    const [messageData, setMessageData] = useState<messageInfoProp[]>([]);
     
    return( <ChatContext.Provider
    value={
       { 
        messageData,
        setMessageData
     }
    }
    >
    
    {children}
    </ChatContext.Provider>)
     

 }