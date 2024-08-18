import { Button, Grid, Link, Typography } from "@mui/material";

interface INavBarItem {
  children: any;
}

export const NavBar = (props: any) => {
  return (
    <Grid
      container
      sx={{
        padding: 0,
        margin: 0,
        height: "15%",

        zIndex: "100",
        backgroundColor: "white",
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
            justifySelf: "left",
            // position:"fixed",
            // left:"30px",
          }}
        >
          Maximilian Schnitt
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <NavBarItem>
            <Typography variant="h4">
              <Link href="#work-section">Work</Link>
            </Typography>
          </NavBarItem>
          <NavBarItem>
            <Button
              variant="contained"
              sx={{
                width: "7rem",
                height: "3rem",
                borderRadius: "10px",
              }}
              href="#contact-section"
            >
              <Typography variant="button">Contact</Typography>
            </Button>
          </NavBarItem>
        </Grid>
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
