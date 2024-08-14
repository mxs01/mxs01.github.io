import classes from './Homepage.module.css'
import { Box, Container, Typography } from "@mui/material";
import { NavBar } from "../components/NavBar/NavBar";

import profilePicture from "../images/ProfilePicture.jpeg"

export const Homepage = (props: any) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
      }}
    >
      <NavBar />
      <Box
        sx={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <Typography variant="h2" sx={{}}>
            Hi I'm Max,
            <br />
            Software Developer
          </Typography>
        </Box>
        <Box sx={{

            borderRadius: "100%"
        }}>
            <img id={classes.profilePicture} src={profilePicture} alt="Profile Picture"></img>
            
        </Box>
      </Box>
    </Container>
  );
};
