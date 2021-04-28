import Typical from 'react-typical'
import myphoto from '../../src/my_photo.jpeg'

export default function Header () {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I'm Justin Park</h1>
                <img id="my_photo" src={myphoto} alt="my_photo"/>
                <h1>I'm a...{' '}</h1>
                <h2>
                    <Typical
                        className="typical-text"
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Front End Developer 💻', 1500,
                            'Software Engineer 💻', 1500,
                            'Creative thinker 🤔', 1500
                        ]}
                    />
                </h2>
            </div>
        </div>
    )
}