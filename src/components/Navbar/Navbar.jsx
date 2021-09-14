import mylogo from '../../../src/images/portfolio_logo.png'
import '../../Styles/Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#A79781'}}>
            <div className="container">
                <a className="navbar-brand" href="/"><img id="mylogo" src={mylogo} alt="portfolio_logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="home" smooth={true} duration={1000}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={1000}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="project" smooth={true} duration={1000}>PROJECT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={1000}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}