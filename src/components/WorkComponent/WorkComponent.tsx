import classes from "./WorkComponent.module.css";
import {
  Box,
  Grid,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface IWorkComp {
  image: any;
  content: string;
  title: string;
  even: boolean;
}

type IImageComp = Pick<IWorkComp, "image">;

type ITextComp = Pick<IWorkComp, "content">;

export const WorkComponent = (props: IWorkComp) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "70%",
        height: "20rem",
        backgroundColor: "#3E5C76",
        marginBottom: "1rem",
        padding: {
          xs: "1rem",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.4rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "white",
            letterSpacing: "0.2rem",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          width: "100%",
          height: {
            xs: "45%",
            sm: "90%",
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
            order: {
              xs: props.even ? 1 : 2,
              sm: 1,
            },
          }}
        >
          {props.even && <ImageComp image={props.image} />}
          {!props.even && <TextComp content={props.content} />}
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: {
              xs: props.even ? 2 : 1,
              sm: 1,
            },
          }}
        >
          {props.even && <TextComp content={props.content} />}
          {!props.even && <ImageComp image={props.image} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

const ImageComp = (props: IImageComp) => {
  return (
    <Box
      sx={{
        maxHeight: {
          xs: "85%",
          sm: "100%",
        },
        maxWidth: {
          xs: "85%",
          sm: "100%",
        },

        width:{
          xs:"auto"
        },
        height:{
          xs:"auto"
        },
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img id={classes.image} src={props.image} alt="Work Image"></img>
    </Box>
  );
};

const TextComp = (props: ITextComp) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "100%%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.content}
      </Typography>
    </Box>
  );
};

