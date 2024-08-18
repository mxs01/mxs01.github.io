import {
  Box,
  Container,
  Pagination,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import ExamplePicture1 from "../../images/Work/ProjectExample2.jpeg";
import ExamplePicture2 from "../../images/Work/ProjectExample3.png";
import { WorkComponent } from "../../components/WorkComponent/WorkComponent";
import { useEffect, useState } from "react";

interface Project {
  image: any;
  title: string;
  content: string;
}

const projects: Project[] = [
  {
    image: ExamplePicture1,
    title: "Admin Dashboard Application",
    content: `The Admin Dashboard is a centralized platform for 
                managing various aspects of a service or system, such as user accounts, content, and performance metrics. It allows administrators to monitor activity, 
                configure settings, and ensure smooth operation of
                the platform. The dashboard is designed to provide
                quick access to essential tools and information for
                effective system management.`,
  },
  {
    image: ExamplePicture2,
    title: "Fullstack Online Shop",
    content: `An online shop project is a web-based platform
                that allows users to browse, purchase, and manage
                products, offering features like product search,
                shopping cart, secure payment processing, and
                order tracking to create a seamless e-commerce
                experience.`,
  },
];

const amountWorkElements:number = 1
const PAGINATION_NODES = Math.round(projects.length/amountWorkElements)

export const Work = (props: any) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([...projects]);


  useEffect(() => {
    const startIdx = amountWorkElements * (currentPageNumber-1)
    const endIdx = startIdx + amountWorkElements

    console.log(`start index:${startIdx} | end index ${endIdx}`)
    setDisplayedPages(projects.slice(startIdx, endIdx))

  }, [currentPageNumber]);

  return (
    <Box
      id="work-section"
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Outfit",
          fontWeight: "bold",
          fontSize: "2.3rem",
          marginBottom: "0.5rem",
        }}
      >
        Recent Work
      </Typography>
      {displayedPages.map((el, idx) => (
        <WorkComponent
          image={el.image}
          title={el.title}
          key={`work_${idx}`}
          even={idx % 2 === 0}
          content={el.content}
        />
      ))}
      <Pagination count={PAGINATION_NODES} color="primary" onChange={(event, value) => setCurrentPageNumber(value)}/>
    </Box>
  );
};
