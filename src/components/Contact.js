import React, {useRef, useState} from 'react';
import { ADDRESS, EMAIL_ID, FIRST_NAME, GITHUB_USERNAME, LAST_NAME, LINKEDIN_USERNAME } from '../root.link'
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

const Contact = () => {
  init(process.env.REACT_APP_USER_ID);
  const form = useRef();
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current.phone.value === '') {
      setDisabled(true);
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_DEFAULT_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
    }
    setName('');
    setEmail('');
    setMessage('');

  }

  return (
    <section className='mt-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear from you!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>{FIRST_NAME} {LAST_NAME}</p>
            <p className='font-thin'>{ADDRESS}</p>
            <a href={`mailto: ${EMAIL_ID}`} className='border-b-2 mt-3 inline-block border-purple-200'>
              {EMAIL_ID}
            </a>
          </div>

          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-purple-800 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-purple-800 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>

          </div>
          <div className='mr-4'>
              <p className='mt-3 border-purple-200'>
                Resume available upon request
              </p>
            </div>
        </div>

        <div className='px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-2xl  justify-between w-full  md:w-6/12 bg-white '>
          <form className='flex flex-col m-auto w-full ' name='contact' method='post' ref={form} onSubmit={sendEmail}>
            <input type='hidden' name='form-name' value='contact' />
            <label htmlFor='name' className='mt-3'>Name</label>
            <input type='text' name='name' id='name' className='gradient' required value={name} onChange={(e)=> setName(e.target.value)}></input>
            <label htmlFor='email' className='mt-3'>Email</label>
            <input type='email' name='email' id='email' className='gradient' required value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            <label className="ohnohoney" htmlFor="phone"></label>
            <input className="ohnohoney" id="phone" name="phone" placeholder="your phone number here" autoComplete="off"></input>

            <label htmlFor='message' className='mt-3'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button type='submit' disabled={ disabled } className=' mt-3 border border-purple-800 p-2 rounded-lg w-auto mr-auto shadow-md hover:shadow-sm'>
              Send Message
            </button>
            {disabled && <p className='mt-3'>Thank you for your message! I will get back to you soon.</p>}

          </form>
        </div>
      </div>
      <div className='relative my-5 md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm ' onClick={() => window.scroll(0, 0)}>

        <img src="images/computer.png" className="w-full" width='500px' height='500px' loading='lazy' alt='computer with code' />

      </div>
    </section>
  );
};

export default Contact;
