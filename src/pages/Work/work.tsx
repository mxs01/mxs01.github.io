import { Box, Container } from "@mui/material";
import ExamplePicture1 from "../../images/Work/ProjectExample2.jpeg";
import ExamplePicture2 from "../../images/Work/ProjectExample3.png";
import { WorkComponent } from "../../components/WorkComponent/WorkComponent";

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

export const Work = (props: any) => {
  return (
    <Box sx={{
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
      {projects.map((el, idx) => (
        <WorkComponent
          image={el.image}
          title={el.title}
          even={idx % 2 === 0}
          content={el.content}
        />
      ))}
    </Box>
  );
};
