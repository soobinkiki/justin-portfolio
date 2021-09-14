import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Main/Header.jsx'
import Particles from 'react-particles-js'
import About from './Components/Main/About.jsx'
import Project from './Components/Main/Project.jsx'
import Contact from './Components/Main/Contact.jsx'

export default function App() {
    return (
        <div id="home">
            <Navbar />
            <Particles 
                className="particles"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 1800
                            }
                        },
                        shape: {
                            type: "star",
                            stroke: {
                                width: 5,
                                color: "#fff"
                            }
                        }
                    }
                }}/>
            <Header />
            <About />
            <Project />
            <Contact />
        </div>
    );
}