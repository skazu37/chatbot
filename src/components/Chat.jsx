import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import Noprofile from "./assets/img/no-profile";
// import Torahack from "./assets/img/torahack";


const Chat =(props)=>{
    const isQuestion =(props.type==='question');
    const classes=isQuestion? 'p-chat__row':'p-chat__reverse'; 
    return(
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src="https://th.bing.com/th/id/R.ec8267197760352cc99da3bdedfd81e4?rik=hJEZz5K9wBUAHA&riu=http%3a%2f%2ffortheloveofthesouth.com%2fwp-content%2fuploads%2f2012%2f06%2fvanillaicecreamscoop.jpg%3fw%3d643&ehk=QgE0EJ2EMvJlW1XaHj3XRD2gA090Zu1hSxp9jGOOFcs%3d&risl=&pid=ImgRaw&r=0" />
                ) : (
                        <Avatar alt="icon" src="https://th.bing.com/th/id/R.5b4ca6733f46f2c844988669e3b55a1a?rik=AvPeV6xMfOGDjg&riu=http%3a%2f%2feclecticrecipes.com%2fwp-content%2fuploads%2f2011%2f07%2ffloats-1-600x900.jpg&ehk=IXa1sfp%2fZiiAQ2g%2b9%2fbr6EsMpetiOwW8ooArp59vabM%3d&risl=&pid=ImgRaw&r=0" />
                )
                }
            </ListItemAvatar>
            <div className="p-chat__bubble">
                {props.text}
            </div>
        </ListItem>
    )

}

export default Chat;