import React, { useState } from 'react';
import './Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Button from 'react-bootstrap-button-loader';



import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [checkMessage, setCheckMessage]= useState('')
  const [success, setSuccess] = useState()
  const [loading, setLoading] = useState(false)
  const [color, setColor]= useState()
 
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    // Perform sending logic here
    const data = {
      name: name,
      email: email,
      message: message
    };
    setLoading(true)
    axios.post('https://my-portfolio-5tjc.onrender.com/', data)
      .then(response => {
       console.log(response.data.message);
        setLoading(false)
       setCheckMessage(response.data.message)
       setSuccess(response.data.success)
       setColor(response.data.color)

      })
      .catch(error => {
        console.log(error.response.data.message);
        setLoading(false)
        setCheckMessage(error.response.data.message)
        setSuccess(error.response.data.success)
        setColor(response.data.color)
      });
  };
  console.log(name, email, message);
  return (
    <div className="contact-page" id='contact'>
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <h4 style={{display:"flex",color:{color}, alignItems:"center", gap:"5px"}}>{(success && checkMessage.length > 0)  && <span style={{color:'green'}}><CheckCircleOutlineIcon /></span> } {checkMessage}</h4>
        <button
          type="button"
          onClick={handleSendClick}
          className={isSent ? 'sent' : ''}
        >

           <Button loading={loading}>{loading ? 'Sending' : <EmailIcon fontSize='large'/>}</Button>
        </button>
      </form>
      <div className="links">
        <ul>
        <li><a href="https://mail.google.com/mail/u/developer.amanuel@gmail.com?"><EmailIcon /></a> </li>
          <li><a href="https://www.linkedin.com/in/amanuel-tadesse-870416232"></a><LinkedInIcon /></li>
          <li><a href="https://web.telegram.org"></a><TelegramIcon /></li>
          <li><a href="https://github.com/1-aminadab"><GitHubIcon /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;