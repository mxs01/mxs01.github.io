import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { NavBar } from "../../components/NavBar/NavBar";
import classes from "./homepage.module.css";

import profilePicture from "../../images/ProfilePicture.jpeg";
import { Theme } from "@mui/material/styles";

export const Homepage = (props: any) => {
  const mobileQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "80%",
        height: {
          xs: "30vh",
          sm: "70vh",
        },
        marginBottom: {
          xs:"0",
          sm:"5rem"
        },
      }}
    >
      <NavBar/>
      <Grid
        container
        sx={{
          height: {
            xs: "20%",
            xl: "80%",
          },
        }}
      >
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: {
              xs: "2rem",
              sm: "6rem",
            },
            order: {
              xs: 2,
              sm: 1,
            },
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
                marginBottom: "20px",
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
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: {
              xs: "2rem",
              sm: "6rem",
            },
            order: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100px",
                sm: "250",
                lg: "350px",
                xl: "450px",
              },
              height: {
                xs: "100px",
                sm: "250",
                lg: "350px",
                xl: "450px",
              },
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
              alt="Me"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

