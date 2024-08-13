import { Button } from "@mui/material";

const ActionButton = (props:any) => {
    return (
        <Button variant="contained" href={props.link}>
            {props.children}
        </Button>
    );
}