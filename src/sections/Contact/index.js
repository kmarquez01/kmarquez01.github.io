import mediaIcons from "./contactIcons"
import './index.css'

import { useForm, ValidationError } from '@formspree/react';

function Contact ({contactRef}){

const [state, handleSubmit] = useForm("xgegleer");
  if (state.succeeded) {
      return <p>Message sent!</p>;
  }

    return(
        <div className = "master-container" ref = {contactRef}>
            <div className = "contact-main-container">
                <div className = "contact-container">
                    <h1 className = "contact-header">
                        Contact
                    </h1>
                    <p className = "contact-description">
                        For inquires collaborations, or just to say hello, 
                        feel free to reach out to us using the contact form! 
                        Alternatively, you can connect with me via email at kirbymarquez15@gmail.com.
                    </p>
                    <div className = "social-media-container">
                        {mediaIcons.map((item, index) => (
                            <div className = "icons-container" key = {index}>
                                <a href = {item.link} className = "media-link" target = "_blank">
                                    {item.image}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = "contact-form-container">
                    <form className = "contact-form" onSubmit = {handleSubmit}>
                        <input className = "name-field" placeholder = "*Name"></input>
                        <input className = "email-field" type = "email" name = "email" placeholder = "*Email"/>
                        <ValidationError prefix = "Email" field = "email" errors = {state.errors}/>
                        <textarea className = "message-field" name = "message" placeholder = "*Message"/>
                        <ValidationError prefix = "Message" field = "message" errors = {state.errors} />
                        <div className = "send-button-container">
                            <button className = "send-button" type ="submit" disabled = {state.submitting}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact