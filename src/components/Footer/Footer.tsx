import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, Link, Typography } from "@mui/material";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "5vh",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent="space-evenly"
        sx={{ width: "100%" }}
      >
        <Grid item xs={6} alignItems={"center"}>
          <FontAwesomeIcon icon={faCopyright} />
          <Typography
            variant="h4"
            sx={{ display: "inline", marginLeft: "4px" }}
          >
            Maximilian Schnitt
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              justifyContent="center"
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="https://github.com/mxs01">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Grid>
            <Grid
              item
              justifyContent="center"
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="https://www.linkedin.com/in/maximilian-schnitt-a4334a244/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
