import {
  Box,
  Pagination,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { WorkComponent } from "../../components/WorkComponent/WorkComponent";

interface Project {
  image: any;
  title: string;
  content: string;
}

const projects: Project[] = []
const amountWorkElements:number = 1
const PAGINATION_NODES = Math.round(projects.length/amountWorkElements)

export const Work = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([...projects]);


  useEffect(() => {
    const startIdx = amountWorkElements * (currentPageNumber-1)
    const endIdx = startIdx + amountWorkElements
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
      {projects.length < 0 && <NoProjectsAvailable/>}
      {projects.length > 0 && displayedPages.map((el, idx) => (
        <WorkComponent
          image={el.image}
          title={el.title}
          key={`work_${idx}`}
          even={idx % 2 === 0}
          content={el.content}
        />
      ))}
      {projects.length > 0 && <Pagination count={PAGINATION_NODES} color="primary" onChange={(event, value) => setCurrentPageNumber(value)}/>}

        
    </Box>
  );
};

const NoProjectsAvailable = () => {
  return(<Box>
    <Typography>No projects available</Typography>
  </Box>);
}
