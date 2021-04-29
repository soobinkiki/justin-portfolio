import mylogo from '../../../src/images/portfolio_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#A79781'}}>
            <div className="container">
                <a className="navbar-brand" href="/"><img id="mylogo" src={mylogo} alt="portfolio_logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={1000}>about</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}