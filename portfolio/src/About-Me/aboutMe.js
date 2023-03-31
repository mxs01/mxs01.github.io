import './aboutMe.css'
import logo from './profilePicture.JPG'


const AboutMe = () => {
    return (
        <div className='aboutMe__container'>
            <div className='aboutMe__container__image'>
                <img src={logo} className='aboutMe__picture'/>
            </div>
            <p className='aboutMe__info'>
                Hi I'm Max, 
                currently I'm in my fourth semester at University of Tübingen in Germany. 
                I'm 21 years old and I'm passionate about learning new things, 
                developing skills and meeting new interesting people.
            </p>
        </div>
    );
}
export default AboutMe;