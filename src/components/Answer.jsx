import { Button, Stack } from "@mui/material";
import React from "react";

const Answer =(props)=>{
    return(
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" onClick={()=>props.select(props.content,props.nextId)}>
                {props.content}
            </Button>
        </Stack>
    )

}

export default Answer