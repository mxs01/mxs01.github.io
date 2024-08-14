import { Button } from "@mui/material";

export const ButtonComponent = (props:any) => {
    return (
        <Button variant="contained" href={props.link}>
            {props.children}
        </Button>
    );
}