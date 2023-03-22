import React from 'react';
import './layout.css'
import { Outlet} from 'react-router-dom';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import AboutMe from '../About-Me/aboutMe'
import Homepage from '../Homepage/homepage';
import Impressum from '../Impressum/impressum';
import Projects from '../Projects/projects';
import Skills from '../Skills/skills';



const LayoutWebsite = () => {
    return (
        <div className='layout__container'>
            <Header/>
            <Outlet className='main__body__container'/>
            <Footer/>
        </div>
    );
}

export default LayoutWebsite;