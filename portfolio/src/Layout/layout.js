import React from 'react';
import './layout.css'
import { Outlet} from 'react-router-dom';
import Header from '../Header/header'
import Footer from '../Footer/footer'




const LayoutWebsite = () => {
    return (
        <div className='layout__container'>
            <Header/>
            <main className='main__body__container'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default LayoutWebsite;