import classes from "./homepage.module.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar/NavBar";

import profilePicture from "../../images/ProfilePicture.jpeg";

export const Homepage = (props: any) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "80%",
        height: "70vh",
        marginBottom:"5rem"
      }}
    >
      <NavBar />
      <Grid
        container
        sx={{
          height: "80%",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Typography variant="h1" sx={{}}>
              Hi I'm Max,
              <br />
              Software Developer
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                width: "60%",
                gap: "0.8rem",
                marginBottom:"20px"
              }}
            >
              <Typography variant="h6">React</Typography>
              <Typography variant="h6">TypeScript</Typography>
              <Typography variant="h6">Python</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
          }}
        >
          <Box
            sx={{
              width: "350px",
              height: "350px",
              borderRadius: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              id={classes.profilePicture}
              src={profilePicture}
              alt="Profile Picture"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
