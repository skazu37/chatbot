import { Button, Stack } from "@mui/material";
import React from "react";

const Answer =(props)=>{
    return(
        <Stack spacing={2} direction="row">
            <Button variant="contained">
                {props.content}
            </Button>
        </Stack>
    )

}

export default Answer