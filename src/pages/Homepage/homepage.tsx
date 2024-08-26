import { Box, Container, Grid, Typography } from '@mui/material'
import classes from './homepage.module.css'

import profilePicture from '../../images/ProfilePicture.jpeg'

export const Homepage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: '80%',
        marginBottom: {
          xs: '16em',
          lg: '5rem',
        },
        marginTop: {
          sm: '4rem',
        },
      }}>
      <Grid
        container
        sx={{
          height: {
            xs: 'fit-content',
            xl: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { sm: '2rem' },
          },
        }}>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: {
              xs: '2rem',
              sm: '0rem',
              lg: '6rem',
            },
            order: {
              xs: 2,
              sm: 1,
            },
          }}>
          <Box
            sx={{
              height: {
                xs: '60%',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'left',
            }}>
            <Typography variant="h1" sx={{}}>
              Hi I'm Max,
              <br />
              Software Developer
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                width: '60%',
                gap: '0.8rem',
                marginBottom: '20px',
              }}>
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: {
              xs: '2rem',
              sm: '0rem',
              lg: '6rem',
            },
            order: {
              xs: 1,
              sm: 2,
            },
          }}>
          <Box
            sx={{
              width: {
                xs: '100px',
                sm: '200px',
                lg: '350px',
                xl: '450px',
              },
              height: {
                xs: '100px',
                sm: '200px',
                lg: '350px',
                xl: '450px',
              },
              borderRadius: '100%',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              id={classes.profilePicture}
              src={profilePicture}
              alt="Me"></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
