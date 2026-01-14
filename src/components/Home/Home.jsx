import "./Home.css";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import group from "./images/yy.jpg";
import Typewriter from 'typewriter-effect';
import { FaFileAlt } from "react-icons/fa";

const Home = () => {

    return (
        <div className="page-container" id="home">

            <div className="intro-container">

                <p className="intro">Shemeera Fonseka</p>
                <p className="sub-intro">
                    Software Developer
                </p>
                <br />
                <p className="hintro-content">
                    I’m a Full Stack Developer skilled in building and managing front-end and back-end systems, with a passion for creating seamless, high-performing web applications. I focus on writing clean, scalable code and enjoy solving complex problems with innovative solutions while staying updated with the latest technologies.
                </p>



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
                    <a href={`${process.env.PUBLIC_URL}/Shemeera Fonseka-CV.pdf`} target="_blank" rel="noopener noreferrer">
                        <FaFileAlt className="icon" />
                    </a>
                </div>

            </div>

            <div className="image-container">
                <img src={group} alt="" className="image" />
                <br />

            </div>

            

        </div>
    )

}

export default Home;