export default function Project () {
    return (
        <div className="project_container" id="project">
            <h1>Projects</h1>
            <div className="gif_container">
                <div className="gif">
                    <img src="images/related.gif" alt="gif"/>
                    <h2>RelateD</h2>
                    <div className="site_github_container">
                        <a href="https://github.com/soobinkiki/relatedclient" target="_blank" rel="noreferrer"><span className="frontback" id="front-back">Frontend:</span><img id="githubIMG_3" src="/images/github.png" alt="GITHUB"></img></a>
                        <a href="https://github.com/soobinkiki/relatedserver" target="_blank" rel="noreferrer"><span className="frontback">Backend:</span><img id="githubIMG_3" src="/images/github.png" alt="GITHUB"></img></a>
                        <a className="livesite" href="https://silly-swartz-2ee151.netlify.app" target="_blank" rel="noreferrer">/  Live Site</a>
                    </div>
                    <p>Developed the web app to connect the community of people who have disabilities and special needs with one another. 
                        Served as a lead front-end developer in a team with 3 developers and created a full-stack web application using MERN stack 
                        and wrote 80% codes on front-side functionalities.</p>
                    <p>(HTML, CSS, MongoDB, Express.js, React.js, Node.js)
                    </p>
                </div>
                <div className="gif">
                    <img src="images/world_soccer_league.gif" alt="gif"/>
                    <h2>World Soccer League</h2>
                    <div className="site_github_container">
                        <a href="https://github.com/soobinkiki/World_Soccer_League" target="_blank" rel="noreferrer"><img id="githubIMG_2" src="/images/github.png" alt="GITHUB"></img></a>
                        <a className="livesite" href="https://world-soccer-league.herokuapp.com/" target="_blank" rel="noreferrer">/  Live Site</a>
                    </div>
                    <p>Created the web app to get the data of each of the countries' existing soccer leagues and participating clubs.</p>
                    <p>(HTML, CSS, Node.js, Express.js, EJS, PostgreSQL) 
                    </p>
                </div>
                <div className="gif">
                    <img src="images/numbers_memory_game.gif" alt="gif"/>
                    <h2>Numbers Memory Game</h2>
                    <div className="site_github_container">
                        <a href="https://github.com/soobinkiki/Numbers-Memory-Game" target="_blank" rel="noreferrer"><img id="githubIMG_2" src="/images/github.png" alt="GITHUB"></img></a>
                        <a className="livesite" href="https://soobinkiki.github.io/" target="_blank" rel="noreferrer">/  Live Site</a>
                    </div>
                    <p>Created the web app for users to test their memory. Two users take turns to type number(s) and challenge how many numbers they can memorize.</p>
                    <p>(HTML, CSS, Javascript)</p>
                </div>
            </div>
        </div>
    )
}