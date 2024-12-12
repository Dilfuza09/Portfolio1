
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Port from './pagess/port'
import About from './pagess/about'
import Contact from './pagess/contact'
import Resume from './pagess/resume'



function App() {



  const redirectToTelegram = () => {
    window.location.href = "https://t.me/bkhtyrvss";
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Port />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>




      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>Dilfuza👩🏻❤️ Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website.</p>
            <p>Connect with me over socials.</p>
            <p>Keep Rising. Connect with me over live chat!</p>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>📞 +998 (90)-005-30-55</p>
            <p>📧 muhammedovanargiza0@gmail.com</p>
            <p>📍 Uzbekistan, Tashkent</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/weapon1209/">Instagram</a>
              <a href="https://github.com/">GitHub</a>
              <span
                onClick={redirectToTelegram}
                style={{ color: "blue", cursor: "pointer", textDecoration: "none", color:"white" }}
              >
                Telegram
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">Designed With 💅🏻 By Dilfuza</div>
      </footer>
    </>
  )
}

export default App
