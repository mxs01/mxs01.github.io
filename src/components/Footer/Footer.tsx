import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Grid,
  Link,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'

import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Footer = (props: { toggleModal: any }) => {
  const mobileQuery = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.between('xs', 'sm')
  })
  return (
    <Box
      sx={{
        width: '100%',
        height: '3rem',
      }}>
      <Grid
        container
        alignItems={'center'}
        justifyContent="space-evenly"
        sx={{ width: '100%' }}>
        <Grid
          item
          xs={6}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}>
          <Box
            onClick={() => props.toggleModal(true)}
            sx={{
              width: '100%',
              marginLeft: {
                xs: '20px',
                sm: '30px',
                lg: '40px',
                xl: '60px',
              },
              display: 'flex',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              icon={faCopyright}
              size={mobileQuery ? 'xs' : 'sm'}
            />
            <Typography
              variant="h4"
              sx={{ display: 'inline', marginLeft: '6px' }}>
              Maximilian Schnitt
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              justifyContent="center"
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Link href="https://github.com/mxs01">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Grid>
            <Grid
              item
              justifyContent="center"
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Link href="https://www.linkedin.com/in/maximilian-schnitt-a4334a244/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
