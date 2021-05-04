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
                    <p>{"<languages>"}</p>
                    <div className="single_logos">
                        <img src={html} alt="html"/>
                        <img src={css} alt="css"/>
                        <img src={javascript} alt="javascript"/>
                        <img src={react} alt="react"/>
                        <img src={bootstrap} alt="bootstrap"/>
                        <img src={ejs} alt="ejs"/>
                    </div>
                    <div className="single_logos">
                        <img src={node} alt="node"/>
                        <img src={express} alt="express"/>
                        <img src={python} alt="python"/>
                        <img src={mongodb} alt="mongodb"/>
                        <img src={postgresql} alt="postgresql"/>
                        <img src={git} alt="git"/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}