import myphoto from '../../../src/images/my_photo.jpeg'
import html from '../../images/html.png'
import css from '../../images/css3.png'
import javascript from '../../images/javascript.png'
import ejs from '../../images/ejs.png'
import react from '../../images/react.png'
import node from '../../images/node-js.png'
import express from '../../images/express.png'
import python from '../../images/python.png'
import mongodb from '../../images/mongodb.png'
import postgresql from '../../images/postgresql.png'
import bootstrap from '../../images/bootstrap.png'
import git from '../../images/git.png'

export default function About () {
    return (
        <div id="about">
            <h1 id="aboutme_text">About Me</h1>
            <img id="my_photo" src={myphoto} alt="my_photo"/>
            <div className="about_container">
                <div className="about_introduce">
                    <h1>Hello, I'm Justin Park</h1>
                    <p>I’m a creative-minded and solution-driven front-end software engineer who has a 
                        passion for building well-designed and intuitive programs. My confidence with JavaScript frameworks, 
                        such as React, paired with CSS and bootstrap allow me to create well-designed and functioning solutions to problems.</p>
                    <div className="resume_linkedin_github">
                        <button id="resume" type="button"><a href="images/justin_resume.pdf" target="_blank">Resume</a></button>
                        <a href="https://www.linkedin.com/in/justin-sb-park/" target="_blank" rel="noreferrer"><img id="linkedInIMG" src="images/linkedin.png" alt="linkedIn"></img></a>
                        <a href="https://github.com/soobinkiki" target="_blank" rel="noreferrer"><img id="githubIMG" src="/images/github.png" alt="GITHUB"></img></a>
                    </div>
                </div>
                <div className="single_logos_container">
                    <p>{"<languages/skills>"}</p>
                    <div className="single_logos">
                        <div><img src={html} alt="html"/><p className="lang_text">HTML</p></div>
                        <div><img src={css} alt="css"/><p className="lang_text">CSS</p></div>
                        <div><img src={javascript} alt="javascript"/><p className="lang_text">JavaScript</p></div>
                        <div><img src={react} alt="react"/><p className="lang_text">React.js</p></div>
                        <div><img src={bootstrap} alt="bootstrap"/><p className="lang_text">Bootstrap</p></div>
                        <div><img src={ejs} alt="ejs"/><p className="lang_text">EJS</p></div>
                    </div>
                    <div className="single_logos">
                        <div><img src={node} alt="node"/><p className="lang_text">Node.js</p></div>
                        <div><img src={express} alt="express"/><p className="lang_text">Express.js</p></div>
                        <div><img src={python} alt="python"/><p className="lang_text">Python</p></div>
                        <div><img src={mongodb} alt="mongodb"/><p className="lang_text">MongoDB</p></div>
                        <div><img src={postgresql} alt="postgresql"/><p className="lang_text">PostgreSQL</p></div>
                        <div><img src={git} alt="git"/><p className="lang_text">Git</p></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}