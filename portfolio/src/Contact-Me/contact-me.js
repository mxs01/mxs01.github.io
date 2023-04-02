import classes from './contact-me.module.css'
import { useState } from 'react';
import Card from '../Card/Card';

import ContactButton from '../Button/Contact-Me-Button/contact-me-button';

const ContactMe = () => {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [subjectInput, setSubjectInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const nameInputHandler = (event) => {
        setNameInput(event.target.value);
    }

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value);
    }

    const subjectInputHandler = (event) => {
        setSubjectInput(event.target.value);
    }

    const messageInputHandler = (event) => {
        setMessageInput(event.target.value);
    }

    const validateFormInput = (event) => {
        event.preventDefault();
        if (nameInput.trim.length>0 && emailInput.includes('@') && subjectInput.trim.length>3 && messageInput.trim.length>0){
            console.log('Valid');
        }
        else{
            console.log('Invalid')
        }
    }


    return (
        <div className={classes['contact-me__container']}>
            <Card className={classes['form__container']}>
                <h1 className={classes['page__title']}>Contact Me</h1>
                <form className={classes['contact-me__form']} onSubmit={validateFormInput}>
                    <input className={classes['name']} type='text' placeholder='name' required onChange={nameInputHandler}/>
                    <input className={classes['email']} type='email' placeholder='email' required onChange={emailInputHandler}/>
                    <input className={classes['subject']} type='text' placeholder='subject' required onChange={subjectInputHandler}/>
                    <textarea className={classes['message']} placeholder='message' required onChange={messageInputHandler }/>
                    <ContactButton/>
                </form>
            </Card>
        </div>
    );
}
export default ContactMe;