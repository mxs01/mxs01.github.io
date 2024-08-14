import { Grid, Link, Typography } from "@mui/material";
import { ButtonComponent } from "../Button/Button";

interface INavBarItem {
  children: any;
}

export const NavBar = (props: any) => {
  return (
    <Grid
      container
      sx={{
        padding:0,
        margin:0,
        height: "15%",
        position: "fixed",
        left: 0,
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          height: "100%",
          padding: 0,
          margin: 0,
          textAlign: "left",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontVariant: "small-caps",
            position:"fixed",
            left:"30px",
          }}
        >
          Maximilian Schnitt
        </Typography>
      </Grid>
      <Grid
        container
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <NavBarItem>
          <Typography variant="h4"><Link href="#">Skills</Link></Typography>
        </NavBarItem>
        <NavBarItem>
          <Typography variant="h4"><Link href="#">Work</Link></Typography>
        </NavBarItem>
        <NavBarItem>
          <ButtonComponent>
            <Typography variant="button">Contact</Typography>
          </ButtonComponent>
        </NavBarItem>
      </Grid>
    </Grid>
  );
};

const NavBarItem = (props: INavBarItem) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        padding: 0,
        margin: 0,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Grid>
  );
};
