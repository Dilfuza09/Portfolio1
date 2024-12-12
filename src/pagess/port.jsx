import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { FaBars, FaPhone } from 'react-icons/fa';



const Port = () => {
    const { t } = useTranslation();

    const handleSelectChange = (e) => {
        e.preventDefault();
        const selectedLanguage = e.target.value
        console.log(selectedLanguage)
        i18n.changeLanguage(selectedLanguage)
    }

    return (
        <>
             
            <header >
                <div className="uls">
                    <ul>
                        <li><span>{t("Uy")}</span></li>
                        <li ><Link to='/about'
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >{t("Haqida")}</Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>{t('Kontakt')}</Link></li>
                        <li><Link to='/resume' style={{ textDecoration: 'none', color: 'inherit' }}>{t('Ish')}</Link></li>


                    </ul>
                    <h1 style={{ display: 'none' }}>Menu</h1>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div>
                            <select style={{ border: 'none', backgroundColor: "blue", color: "white", padding: '5px 10px', borderRadius: "10px" }} onChange={handleSelectChange}>
                                <option value="uz">O'zbek</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <div className="hh">
                            <h3><FaPhone /></h3>
                            <h1>93-926-03-81</h1>
                        </div>
                        <h3  className='bar' style={{display:'none',}}><FaBars /></h3>
                    </div>
                </div>
            </header>


  

         

            <main>
                <div className='img'>
                    <div className='name'>
                        <h4>{t("fam")}</h4>
                        <h1>DILFUZA</h1>
                        <h3 className='nima'>{t('web')}</h3>
                        <button>{t('re')}</button>
                        <button>Portfolio</button>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Port