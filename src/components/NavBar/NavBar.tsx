import { Button, Grid, Link, Typography } from '@mui/material'

interface INavBarItem {
  children: any
  xs: number
}

export const NavBar = () => {
  return (
    <Grid
      container
      sx={{
        width: '100%',
        padding: 0,
        margin: 0,
        marginTop: {
          xs: '1rem',
        },
        marginBottom: {
          xs: '2rem',
        },
        height: '17%',

        zIndex: '100',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
      }}>
      <Grid
        item
        xs={6}
        sx={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}>
        <Typography
          variant="h2"
          sx={{
            fontVariant: 'small-caps',
            justifySelf: 'left',
            marginLeft: {
              xs: '20px',
              sm: '30px',
              lg: '40px',
              xl: '60px',
            },
          }}>
          Maximilian Schnitt
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <NavBarItem xs={4}>
            <Typography variant="h5" sx={{ height: '100%' }}>
              <Link href="#work-section">Work</Link>
            </Typography>
          </NavBarItem>
          <NavBarItem xs={8}>
            <Button
              variant="contained"
              sx={{
                width: {
                  xs: '6rem',
                  sm: '7rem',
                },
                height: {
                  xs: '1.7rem',
                  sm: '3rem',
                },
                borderRadius: '10px',
              }}
              href="#contact-section">
              <Typography
                variant="button"
                sx={{
                  fontSize: '0.1rem',
                }}>
                Contact
              </Typography>
            </Button>
          </NavBarItem>
        </Grid>
      </Grid>
    </Grid>
  )
}

const NavBarItem = (props: INavBarItem) => {
  return (
    <Grid
      item
      xs={props.xs}
      sx={{
        padding: 0,
        margin: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </Grid>
  )
}
