import { Button, Stack } from "@mui/material";
import React from "react";

const Answer =(props)=>{
    return(
        <Stack spacing={2} direction="row">
            <Button sx={{borderColor:"#FFB549",
            color:"#FFB549",
            fontWeight:600,
            marginBottom:"8px",
            width:"100%"
        
        }} 
            variant="outlined" 
            onClick={()=>props.select(props.content,props.nextId)}>
                {props.content}
            </Button>
        </Stack>
    )

}

export default Answer