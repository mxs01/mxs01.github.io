import React from 'react';
import { Outlet} from 'react-router-dom';


import classes from './layout.module.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'




const LayoutWebsite = () => {
    return (
        <div className={classes.layout__container}>
        
                <Header/>
            
            <main className={classes.main__body__container}>
                <Outlet/>
            </main>
         
            <Footer/>
            

        </div>
    );
}

export default LayoutWebsite;