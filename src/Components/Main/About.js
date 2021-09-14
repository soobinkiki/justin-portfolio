import Images from '../Images/Images';
import '../../Styles/Main/About.css';

export default function About () {
    return (
        <div id="about">
            <h1 id="aboutme_text">About Me</h1>
            <img id="my_photo" src={Images.myphoto} alt="my_photo"/>
            <div className="about_container">
                <div className="about_introduce">
                    <h1 id="about_introduce">Hello, I'm Justin Park</h1>
                    <p>I’m a creative-minded and solution-driven front-end software engineer who has a 
                        passion for building well-designed and intuitive programs. My confidence with JavaScript frameworks, 
                        such as React, paired with CSS, SASS, and bootstrap allow me to create well-designed and functioning solutions to problems.</p>
                    <div className="resume_linkedin_github">
                        <button id="resume" type="button"><a href="images/justin_resume.pdf" target="_blank">Resume</a></button>
                        <a href="https://www.linkedin.com/in/justin-sb-park/" target="_blank" rel="noreferrer"><img id="linkedInIMG" src="images/linkedin.png" alt="linkedIn"></img></a>
                        <a href="https://github.com/soobinkiki" target="_blank" rel="noreferrer"><img id="githubIMG" src="/images/github.png" alt="GITHUB"></img></a>
                    </div>
                </div>
                <div className="single_logos_container">
                    <p>{"< skills >"}</p>
                    <div className="single_logos">
                        <div><img src={Images.html} alt="html"/><p className="lang_text">HTML</p></div>
                        <div><img src={Images.css} alt="css"/><p className="lang_text">CSS</p></div>
                        <div><img src={Images.javascript} alt="javascript"/><p className="lang_text">JavaScript</p></div>
                        <div><img src={Images.react} alt="react"/><p className="lang_text">React.js</p></div>
                        <div><img src={Images.bootstrap} alt="bootstrap"/><p className="lang_text">Bootstrap</p></div>
                        <div><img src={Images.ejs} alt="ejs"/><p className="lang_text">EJS</p></div>
                        <div><img src={Images.sass} alt="sass"/><p className="lang_text">SASS</p></div>
                    </div>
                    <div className="single_logos">
                        <div><img src={Images.node} alt="node"/><p className="lang_text">Node.js</p></div>
                        <div><img src={Images.express} alt="express"/><p className="lang_text">Express.js</p></div>
                        <div><img src={Images.python} alt="python"/><p className="lang_text">Python</p></div>
                        <div><img src={Images.mongodb} alt="mongodb"/><p className="lang_text">MongoDB</p></div>
                        <div><img src={Images.postgresql} alt="postgresql"/><p className="lang_text">PostgreSQL</p></div>
                        <div><img src={Images.git} alt="git"/><p className="lang_text">Git</p></div>
                        <div><img src={Images.github} alt="github"/><p className="lang_text">Github</p></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}