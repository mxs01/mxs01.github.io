import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import LayoutWebsite from './Layout/layout';
import Homepage from './Homepage/homepage';
import AboutMe from './About-Me/aboutMe'
import Projects from './Projects/projects';
import Skills from './Skills/skills';
import Impressum from './Impressum/impressum';
import ContactMe from './Contact-Me/contact-me';


const router = createBrowserRouter([
  {path:'', 
  element: <LayoutWebsite/>,
  children:[
  {path:'/', element: <Homepage/>},
  {path:'/about-me', element: <AboutMe/>},
  {path:'/skills', element: <Skills/>},
  {path:'/projects', element: <Projects/>},
  {path:'/contact-me', element: <ContactMe/>},
  {path:'/impressum', element: <Impressum/>}
]}
]);
  


function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  );
}

export default App;
