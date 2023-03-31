import classes from './footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub, faLinkedin
  } from '@fortawesome/free-brands-svg-icons'

import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import { Link } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={classes['footer-container']}>
           <nav className={classes['nav-bar__container']}>
               <div className={classes['copyright__container']}>
                   <NavLink className={classes['copyright__item']} to='/impressum'>
                        <FontAwesomeIcon className={classes['copyright__icon' ]}icon={faCopyright} color='#F64C72'/>
                        <p className={classes['copyright__owner']}>Maximilian Schnitt</p>
                    </NavLink>
               </div>
               <div className={classes['social-network__container']}>
                   
               <Link className={classes["social-network__item"]} exact="true" activeclassname="active" href="https://github.com/mxs01">
                    <FontAwesomeIcon className={classes['social-network__icon']} icon={faGithub} color='#fff' />
               </Link>

               <Link className={classes["social-network__item"]} exact="true" activeclassname="active" href="https://www.linkedin.com/in/maximilian-schnitt-a4334a244/">
                    <FontAwesomeIcon className={classes['social-network__icon']} icon={faLinkedin} color='#fff' />
                </Link>
               </div>
           </nav>
        </div>
    );
}

export default Footer;