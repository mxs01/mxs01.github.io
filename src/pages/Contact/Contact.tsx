import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  InputLabel,
  Paper,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { overridesTheme } from "../../theme";
import { ButtonComponent } from "../../components/Button/Button";

const CssTextField = styled(TextField)({
  borderRadius: "10px",
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export const Contact = (props: any) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "60%",
          height: "80%",
          backgroundColor: "#3C5D76",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            padding: "1.6rem",
            color:"white",
            fontFamily:"Outfit",
            fontWeight:"400"
          }}
        >
          Contact Me
        </Typography>
        <form>
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <FormGroup row>
              <CssTextField
                label="Name"
                margin="dense"
                sx={{ marginRight: "10px" }}
              />
              <CssTextField label="E-Mail" margin="dense" />
            </FormGroup>
            <FormGroup row>
              <CssTextField label="Subject" fullWidth margin="dense" />
            </FormGroup>
            <FormGroup
              row
              sx={{
                marginBottom: "0.7rem",
              }}
            >
              <CssTextField
                rows={5}
                multiline
                label="Content"
                fullWidth
                margin="dense"
              />
            </FormGroup>
            <FormGroup row sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}>
              <Button
                size="large"
                sx={{
                  width: "25%",
                  backgroundColor: "#FFDF68",
                  "&:hover": {
                    backgroundColor: "#FFC107",
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    color: "black",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Contact Me
                </Typography>
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};
