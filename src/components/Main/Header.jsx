import Typical from 'react-typical'

export default function Header () {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Justin Park</h1>
                <p>I'm a...{' '}
                    <Typical
                        className="typical-text"
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Front End Developer 🖥', 1500,
                            'Software Engineer 💻', 1500,
                            'Creative thinker 🤔', 1500,
                            'Logical thinker 🧐', 1500
                        ]}
                    />
                </p>
            </div>
        </div>
    )
}