import './header.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar__container'>
            <Link to='/' className='nav-bar__title'><h1>Maximilian Schnitt</h1></Link>
            <nav className='nav-bar__items'>
                <Link className='nav-bar__item' to='/about-me'>About Me</Link>
                <Link className='nav-bar__item' to='/skills'>Skills</Link>
                <Link className='nav-bar__item' to='/projects'>Projects</Link>
                <Link className='nav-bar__item' to='/contact-me'>Contact Me</Link>
            </nav>
            {/*<ul className='nav-bar__items'>
                <li className='nav-bar__item'><Link to='/about-me'>About Me</Link></li>
                <li className='nav-bar__item'>Skills</li>
                <li className='nav-bar__item'>Projects</li>
                <li className='nav-bar__item'>Contact Me</li>
            </ul>*/}
        </div>
    );
}
export default Header