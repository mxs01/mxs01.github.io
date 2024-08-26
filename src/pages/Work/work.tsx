import {
  Box,
  Pagination,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { WorkComponent } from '../../components/WorkComponent/WorkComponent'

import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Project {
  image: any
  title: string
  content: string
}

export type SizeProp =
  | 'xs'
  | 'lg'
  | 'sm'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'

// const projects: Project[] = [
//   {
//     image: ExamplePicture1,
//     title: 'Admin Dashboard Application',
//     content: `The Admin Dashboard is a centralized platform for
//                 managing various aspects of a service or system, such as user accounts, content, and performance metrics. It allows administrators to monitor activity,
//                 configure settings, and ensure smooth operation of
//                 the platform. The dashboard is designed to provide
//                 quick access to essential tools and information for
//                 effective system management.`,
//   },
//   {
//     image: ExamplePicture2,
//     title: 'Fullstack Online Shop',
//     content: `An online shop project is a web-based platform
//                 that allows users to browse, purchase, and manage
//                 products, offering features like product search,
//                 shopping cart, secure payment processing, and
//                 order tracking to create a seamless e-commerce
//                 experience.`,
//   },
// ]

const projects: Project[] = []
const amountWorkElements: number = 1
const PAGINATION_NODES = Math.round(projects.length / amountWorkElements)

const getIconSizing = (
  mediumFlag: boolean,
  largeFlag: boolean,
  xlargeFlag: boolean
): SizeProp => {
  return xlargeFlag ? '6x' : largeFlag ? '5x' : mediumFlag ? '3x' : '2x'
}

export const Work = () => {
  const mobileQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  )
  const mediumQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'lg')
  )
  const largeQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('lg', 'xl')
  )
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [displayedPages, setDisplayedPages] = useState([...projects])

  useEffect(() => {
    const startIdx = amountWorkElements * (currentPageNumber - 1)
    const endIdx = startIdx + amountWorkElements
    setDisplayedPages(projects.slice(startIdx, endIdx))
  }, [currentPageNumber])

  return (
    <Box
      id="work-section"
      sx={{
        width: '100%',
        marginBottom: {
          xs: '5em',
          sm: '8em',
          lg: '12em',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Outfit',
          fontWeight: 'bold',
          fontSize: '2.3rem',
          marginBottom: '0.5rem',
        }}>
        Recent Work
      </Typography>
      {projects.length <= 0 && (
        <NoProjectsAvailable
          size={getIconSizing(
            mediumQuery,
            largeQuery,
            !mobileQuery && !mediumQuery && !largeQuery
          )}
        />
      )}
      {projects.length > 0 &&
        displayedPages.map((el, idx) => (
          <WorkComponent
            image={el.image}
            title={el.title}
            key={`work_${idx}`}
            even={idx % 2 === 0}
            content={el.content}
          />
        ))}
      {projects.length > 0 && (
        <Pagination
          count={PAGINATION_NODES}
          color="primary"
          onChange={(_event, value) => setCurrentPageNumber(value)}
        />
      )}
    </Box>
  )
}

const NoProjectsAvailable = (props: { size: SizeProp }) => {
  return (
    <Paper
      sx={{
        height: {
          xs: '7rem',
          sm: '10rem',
          lg: '17rem',
          xl: '20rem',
        },
        gap: {
          xs: '1rem',
          sm: '1rem',
          lg: '1.5rem',
          xl: '3rem',
        },
      }}>
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size={props.size}
        style={{ color: '#FFD43B' }}
      />
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          textAlign: 'center',
        }}>
        No projects available
      </Typography>
    </Paper>
  )
}
