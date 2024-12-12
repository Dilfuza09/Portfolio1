import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './resume.css'



const Resume = () => {
    return (
        <>
            <header>
                <div className="uls">
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>HOME </Link></li>
                        <li ><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT</Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT</Link></li>
                        <li><span>PROJECTS</span></li>

                    </ul>

                    <div className="hh">
                        <h3><FaPhone /></h3>
                        <h1>93-926-03-81</h1>
                    </div>
                </div>
            </header>

            <main>
                <div className='star'>
                    <div className='uzum'>
                        <img style={{ width: '200px', height: '200px', borderRadius: '50px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7EKHX4eLgGlGxk9bGN1_KSw5InnYvPpK-w&s" alt="" />
                        <h1>Uzum Market</h1>
                        <a style={{ width: '200px' }} href="https://www.figma.com/proto/fkfNMxaNPRWDcUStGnK3Hw/Untitled?type=design&node-id=1-2&t=Z0uiLqS49elIaKzq-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2">https://www.figma.com/proto/fkfNMxaNPRWDcUStGnK3Hw/Untitled?type=design&node-id=1-2&t=Z0uiLqS49elIaKzq-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2</a>
                    </div>
                    <div className='mama'>
                        <img style={{ width: '200px', height: '200px', borderRadius: '50px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpHNVz3RWb2VRK2QsBzu-iHzzcXa1QmgsD22yRM9XfRfQDNb0OUZoojsMwXDE5hYkdWs&usqp=CAU" alt="" />
                        <h1>Yapona Mama</h1>
                        <a href="https://remarkable-blancmange-79b2bb.netlify.app/">https://remarkable-blancmange-79b2bb.netlify.app/</a>
                    </div>
                    <div className='food'>
                        <img style={{ width: '200px', height: '200px', borderRadius: '50px' }} src="https://media.sunbasket.com/2020/08/Faroe-Islands-Salmon_Square_Web-1024x683.jpg" alt="" />
                        <h1>Delizioso</h1>
                        <a href="https://www.figma.com/design/gsXRyRy5k7hsvm09cGnJTN/Landing-Page-Restaurant?node-id=223-2&node-type=frame&t=fvNbfKlfFFT5Nsp3-0">https://www.figma.com/design/gsXRyRy5k7hsvm09cGnJTN/Landing-Page-Restaurant?node-id=223-2&node-type=frame&t=fvNbfKlfFFT5Nsp3-0</a>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Resume