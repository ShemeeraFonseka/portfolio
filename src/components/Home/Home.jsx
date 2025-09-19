import "./Home.css";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import group from "./images/ww.png";
import Typewriter from 'typewriter-effect';

const Home = () => {

    return (
        <div className="page-container" id="home">


            <div className="intro-container">
                <img src={group} alt="" className="image" />
                <br />
                <p className="hello">Hello I'm</p>
                <p className="intro">SHEMEERA FONSEKA</p>
                <p className="sub-intro">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Full Stack Developer", "Web Developer"]
                        }} />
                </p>
                <br></br>

                <div className="button-container">
                    <a  href="#work" > <button className="homebutton">View My Projects</button></a>
                           


                    <a href={`${process.env.PUBLIC_URL}/Shemeera Fonseka-CV.pdf`} download="Shemeera_Fonseka_CV.pdf">
                        <button className="homebutton">Download Resume</button>
                    </a>
                </div>

            </div>

        </div>
    )

}

export default Home;