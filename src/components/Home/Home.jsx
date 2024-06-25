import "./Home.css";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import group from "./images/Group 1.png"

const Home = () => {

    return (
        <div className="page-container" id="home">
            <div className="image-container">
<img src={group} alt="" className="image"/>
            </div>

            <div className="intro-container">
                <p className="intro">SHEMEERA FONSEKA</p>
                <p className="sub-intro">Full Stack Developer</p><br></br><br></br>
                <p className="intro-content">Skilled Full Stack Developer proficient in building and managing both front-end and back-end components, driving the success and functionality of complete web applications and systems. With a strong focus on user experience and performance optimization, I leverage my technical expertise to deliver innovative solutions that meet business objectives effectively. My commitment to continuous learning allows me to stay ahead in a rapidly evolving tech landscape, ensuring I can adapt and implement the latest advancements for optimal results.</p>
                   <br></br>
                    <div className="icons-container">
                    <a href="https://github.com/ShemeeraFonseka" target="_blank" rel="noopener noreferrer">
                        <GrGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/shemeera-fonseka-146776275/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://www.behance.net/shemeerafonseka" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="icon" />
                    </a>
                </div>
            </div>

        </div>
    )

}

export default Home;