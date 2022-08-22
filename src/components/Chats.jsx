import React from "react";
import List from '@mui/material/List';
import Chat from "./Chat";

const Chats=(props)=>{
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',height: 400,padding: "0", overflow:"auto"}}>
            {props.chats.map((chat,index)=>{
                return <Chat text={chat.text} type={chat.type} key={index}/>
            })}
        </List>
    )
}

export default Chats;