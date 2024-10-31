import "./About.css";

const About = () => {

    return (
        <div className="about-container" id="about">
            <p className="about-intro">TECHNOLOGY STACK</p>

            <div className="skill-buttons">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>JavaScript</button>
                <button>TypeScript</button>
                <button>React</button>
            </div>

            <div className="skill-buttons"> 
                <button>Java</button>
                <button>Web Services</button>
                <button>C#</button>
                <button>SpringBoot</button>
                <button>Node.js</button>
                <button>Express.js</button>
            </div>

            <div className="skill-buttons">
                <button>MySQL</button>
                <button>MS SQL Server</button>     
                <button>MongoDB</button>  
            </div>

            <div className="skill-buttons">
                
                <button>Figma</button>
                <button>Adobe Illustrator</button>
                <button>Adobe Photoshop</button>
                <button>Adobe InDesign</button>
                
            </div>


            <div className="skill-buttons">
                
                <button>Git</button>
                <button>GitHub</button>
            </div>

        </div>
    )

}

export default About;