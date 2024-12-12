import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './about.css'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'




const About = () => {

        const { t } = useTranslation();
    
        const handleSelectChange = (e) => {
            e.preventDefault();
          const selectedLanguage = e.target.value
          console.log(selectedLanguage)
          i18n.changeLanguage(selectedLanguage)
        }
    return (
        <>

            <header>
                <div className="uls">
                    <ul>
                        <li><Link to='/'
                            style={{ textDecoration: 'none', color: 'inherit' }}

                        >{t('Uy')}
                        </Link></li>
                        <li><span>{t('Haqida')}</span></li>
                        <li><Link to='/contact'  style={{ textDecoration: 'none', color: 'inherit' }}>{t('Kontakt')}</Link></li>
                        <li><Link to='/resume' style={{textDecoration:'none', color:'inherit'}}>{t('Ish')}</Link></li>

                    </ul>
                    <div>
                        <select style={{border:'none', backgroundColor:"blue", color:"white", padding:'5px 10px', borderRadius:"10px"}} onChange={handleSelectChange}>
                            <option value="uz">O'zbek</option>
                            <option value="en">English</option>
                        </select>
                    </div>

               
                </div>
            </header>
            <main>
                <div className="iml">

                    <div className="se">
                        <h1>{t('about')}</h1>
                        <h4>dilfuza@gmail.com</h4>
                        <p>{t('men')}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About