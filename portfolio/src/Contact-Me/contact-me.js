import classes from "./contact-me.module.css";
import { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";

import emailjs from "@emailjs/browser";

import ContactButton from "../Button/Contact-Me-Button/contact-me-button";

const ContactMe = () => {
  const formInput = useRef();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    validateFormInput();
    return;
  }, [nameInput, emailInput, subjectInput, messageInput]);

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const subjectInputHandler = (event) => {
    setSubjectInput(event.target.value);
  };

  const messageInputHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const validateFormInput = () => {
    console.log(subjectInput.trim());
    if (
      nameInput.trim().length > 0 &&
      emailInput.includes("@") &&
      subjectInput.trim().length > 3 &&
      messageInput.trim().length > 0
    ) {
      console.log("yes");
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_vjsnt8k",
        "template_89szgsl",
        formInput.current,
        "XgX0x_YM3m4OgB6TW"
      )
      .then(
        (result) => {
          alert("Message was sent succesfully!");
          setNameInput("");
          setEmailInput("");
          setSubjectInput("");
          setMessageInput("");
        },
        (error) => {
          alert("Something went wrong, please try it again!");
        }
      );
  };

  return (
    <div className={classes["contact-me__container"]}>
      <Card className={classes["form__container"]}>
        <h1 className={classes["page__title"]}>Contact Me</h1>
        <form
          className={classes["contact-me__form"]}
          ref={formInput}
          onSubmit={sendEmail}
        >
          <input
            className={classes["name"]}
            type="text"
            placeholder="name"
            name="name"
            value={nameInput}
            required
            onChange={nameInputHandler}
          />
          <input
            className={classes["email"]}
            type="email"
            name="email"
            value={emailInput}
            placeholder="email"
            required
            onChange={emailInputHandler}
          />
          <input
            className={classes["subject"]}
            type="text"
            placeholder="subject"
            name="subject"
            value={subjectInput}
            required
            onChange={subjectInputHandler}
          />
          <textarea
            className={classes["message"]}
            placeholder="message"
            name="message"
            value={messageInput}
            required
            onChange={messageInputHandler}
          />
        <ContactButton isValid={validInput} />
        </form>
      </Card>
    </div>
  );
};
export default ContactMe;
