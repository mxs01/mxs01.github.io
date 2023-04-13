import classes from './contact-me-button.module.css'

const ContactButton = (props) => {
    return <button className={`${!props.isValid ? classes['contact-me__button__disabled']:classes['contact-me__button']}`}>Contact Me</button>;
}

export default ContactButton;