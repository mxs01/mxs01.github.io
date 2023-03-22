import './contact-me.css'

import ContactButton from '../Button/Contact-Me-Button/contact-me-button';

const ContactMe = () => {
    return (
        <div className='contact-me__container'>
            <div className='form__container'>
                <h1 className='page__title'>Contact Me</h1>
                <form className='contact-me__form'>
                    
                    <input className='name' type='text' placeholder='name' required/>
                    <input className='email' type='email' placeholder='email' required/>
                    <input className='subject' type='text' placeholder='subject' required/>
                    <textarea className='message' placeholder='message' required/>
                </form>
                <ContactButton/>
            </div>
        </div>
    );
}
export default ContactMe;