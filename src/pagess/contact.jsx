import { Link } from 'react-router-dom'
import './contact.css'
import { FaPhone } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'





const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rb0dqx6', 'template_kjn66hk', form.current, {
                publicKey: 'irXpZYp-qHuCra2Ed',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (

        <>

            <header>
                <div className="uls">
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>HOME </Link></li>
                        <li ><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT</Link></li>
                        <li><span>CONTACT</span></li>
                        <li><Link to='/resume' style={{textDecoration:'none', color:'inherit'}}>PROJECTS</Link></li>

                    </ul>

                    <div className="hh">
                        <h3><FaPhone /></h3>
                        <h1>93-926-03-81</h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='lizaa'>
                    <form className='input' ref={form} onSubmit={sendEmail}>
                        <h1 style={{ fontFamily: 'sans-serif', color: 'white', textAlign: 'center', marginBottom: '20px' }}>Let's chat</h1>

                        <input type="text" placeholder='Name' name="user_name" /><br />
                        <input type="email" placeholder='Email' name="user_email" /><br />
                        <textarea name="message" placeholder='Message:' /><br />
                        <input type="submit" value="Send" /><br />
                    </form>
                    <div>
                        <img src="./cat.png" alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact