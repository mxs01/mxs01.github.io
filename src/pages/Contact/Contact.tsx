import classes from './Contact.module.css'
import emailjs from '@emailjs/browser'
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Paper,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'

export const Contact = () => {
  const mobileQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  )
  const [nameInput, setNameInput] = useState('')
  const [mailInput, setMailInput] = useState('')
  const [subjectInput, setSubjectInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const sendEmail = async (e: any) => {
    e.preventDefault()
    setButtonDisabled(true)
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID ?? '',
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID ?? '',
        {
          to_name: process.env.REACT_APP_EMAIL_JS_TO_NAME ?? '',
          from_name: nameInput,
          subject: subjectInput,
          message: contentInput,
        },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          alert('Message was sent succesfully!')
          setNameInput('')
          setMailInput('')
          setSubjectInput('')
          setContentInput('')
          setButtonDisabled(false)
        },
        () => {
          alert('Something went wrong, please try it again!')
        }
      )
  }

  const verifyMail = () => {
    if (mailInput.trim() === '') {
      setValidEmail(true)
    } else {
      const reg = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|de|fr)')
      setValidEmail(reg.test(mailInput))
    }
  }

  return (
    <Box
      id="contact-section"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: {
          xs: '6rem',
          xl: '10rem',
        },
      }}>
      <Paper
        sx={{
          minHeight: {
            lg: '30rem',
          },
          height: 'fit-content',

          padding: {
            xs: '1rem',
            sm: '2rem',
            xl: '1rem',
          },
        }}>
        <Typography
          variant="h3"
          textAlign={'center'}
          sx={{
            padding: '0.5em',
            color: 'white',
            fontFamily: 'Outfit',
            fontWeight: '400',
            marginBottom: '0.8rem',
          }}>
          Contact Me
        </Typography>
        <form id={classes.form} onSubmit={(e) => sendEmail(e)}>
          <FormControl
            sx={{
              width: '70%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'left',
            }}>
            <FormGroup row={!mobileQuery}>
              <TextField
                label="Name"
                margin="dense"
                sx={{
                  marginRight: '2%',
                  width: !mobileQuery ? '49%' : '100%',
                }}
                value={nameInput}
                size={mobileQuery ? 'small' : 'medium'}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
              <TextField
                label="E-Mail"
                margin="dense"
                sx={{
                  width: !mobileQuery ? '49%' : '100%',
                }}
                type="email"
                error={!validEmail}
                size={mobileQuery ? 'small' : 'medium'}
                helperText={!validEmail && 'Incorrect email adress.'}
                onBlur={verifyMail}
                fullWidth={mobileQuery}
                value={mailInput}
                onChange={(e) => setMailInput(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                label="Subject"
                fullWidth
                margin="dense"
                size={mobileQuery ? 'small' : 'medium'}
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                marginBottom: '1.3rem',
              }}>
              <TextField
                rows={!mobileQuery ? 5 : 7}
                multiline
                label="Content"
                fullWidth
                margin="dense"
                size={mobileQuery ? 'small' : 'medium'}
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup
              row
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                type="submit"
                disabled={buttonDisabled}
                sx={{
                  width: {
                    xs: '10rem',
                    sm: '11rem',
                    xl: '12rem',
                  },
                  height: {
                    xs: '2rem',
                    xl: '3.5rem',
                  },
                  backgroundColor: '#FFDF68',
                  '&:hover': {
                    backgroundColor: '#FFC107',
                  },
                  '&:disabled': {
                    backgroundColor: '#f6f6f6',
                  },
                }}>
                <Typography
                  variant="button"
                  sx={{
                    color: 'black',
                    letterSpacing: '0.2rem',
                  }}>
                  Contact Me
                </Typography>
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
    </Box>
  )
}
