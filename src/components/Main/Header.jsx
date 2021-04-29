import Typical from 'react-typical'

export default function Header () {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1><span id="p_tag">{"<h1>"}</span> Justin Park <span id="p_tag">{"</h1>"}</span></h1>
                <p>I'm a...{' '}
                    <Typical
                        className="typical-text"
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Front End Developer', 1500,
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