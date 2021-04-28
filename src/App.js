import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar'
import Header from './components/Main/Header'
import Particles from 'react-particles-js'
import About from './components/Main/About'
import { Link } from 'react-scroll'

export default function App() {
    return (
        <>
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
            <Navbar />
            <Header />
            <About />
        </>
    );
}