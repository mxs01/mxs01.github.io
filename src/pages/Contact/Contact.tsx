import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export const Contact = (props: any) => {
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setButtonDisabled(true)
    emailjs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID ?? "",
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID ?? "",
      {
        to_name: process.env.REACT_APP_EMAIL_JS_TO_NAME ?? "",
        from_name: nameInput,
        subject: subjectInput,
        message: contentInput
      },
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY ?? ""
    ).then((result)=>{
      alert("Message was sent succesfully!");
      setNameInput("")
      setMailInput("")
      setSubjectInput("")
      setContentInput("")
      setButtonDisabled(false)
    },(error) =>{
      alert("Something went wrong, please try it again!");
    })
  };

  const verifyMail = () => {
    if (mailInput.trim() === "") {
      setValidEmail(true);
    } else {
      const reg = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|de|fr)");
      setValidEmail(reg.test(mailInput));
    }
  };

  return (
    <Container
      id="contact-section"
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
          padding: "2rem",
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{
            padding: "0.5rem",
            color: "white",
            fontFamily: "Outfit",
            fontWeight: "400",
            marginBottom:"0.8rem"
          }}
        >
          Contact Me
        </Typography>
        <form onSubmit={e => sendEmail(e)}>
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <FormGroup row>
              <TextField
                label="Name"
                margin="dense"
                sx={{ marginRight: "2%", width: "49%" }}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
              <TextField
                label="E-Mail"
                margin="dense"
                sx={{ width: "49%" }}
                error={!validEmail}
                required
                helperText={!validEmail && "Incorrect email adress."}
                onBlur={verifyMail}
                value={mailInput}
                onChange={(e) => setMailInput(e.target.value)}
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                label="Subject"
                fullWidth
                margin="dense"
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                marginBottom: "1.3rem",
              }}
            >
              <TextField
                rows={5}
                multiline
                label="Content"
                fullWidth
                margin="dense"
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                size="large"
                type="submit"
                disabled={buttonDisabled}
                sx={{
                  width: "25%",
                  backgroundColor: "#FFDF68",
                  "&:hover": {
                    backgroundColor: "#FFC107",
                  },
                  "&:disabled":{
                    backgroundColor: "#f6f6f6"
                  }
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
