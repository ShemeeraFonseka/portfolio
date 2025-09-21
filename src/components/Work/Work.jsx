import "./Work.css";
import freshcart from './1.png';
import todo from './3.png';
import capture from './Capture.PNG';
import pay from './pay.PNG';
import homr from './homr.png';
import { GrGithub } from "react-icons/gr";
import { FaBehance } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Work = () => {
    return (
        <div className="work-container" id="work">
            <p className="work-intro">FEATURED PROJECTS</p>
            <div className="projects-container">
                <div className="container-box">
                    <img src={freshcart} alt="Project 1" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">SYOS Store and Billing System</p>
                        <p className="project-des">Ecommerce Web Application</p>
                       <div>
                        <GrGithub className="view-button" size={82} onClick={() => window.open('https://github.com/ShemeeraFonseka/SYOS', '_blank')}/>
                        <FaBehance className="view-button" size={82} onClick={() => window.open('https://www.behance.net/gallery/235051009/SYOS-Store-and-Billing-System', '_blank')}/>
                    </div>
                    </div>
                </div>
                <div className="container-box">
                    <img src={todo} alt="Project 2" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">Day Planner</p>
                        <p className="project-des">To-Do List Application</p>
                        <div>
                        <GrGithub className="view-button" size={82} onClick={() => window.open('https://github.com/ShemeeraFonseka/todolist', '_blank')}/>
                        <FaEye className="view-button" size={82} onClick={() => window.open('https://shemeerafonseka.github.io/todolist/', '_blank')}/>
                    </div>
                    </div>
                </div>

                
            </div>


            <div className="projects-container">
                <div className="container-box">
                    <img src={capture} alt="Project 1" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">NIBM Grading Hub</p>
                        <p className="project-des">Desktop Application</p>
                        <div>
                        <GrGithub className="view-button" size={82} onClick={() => window.open('https://github.com/ShemeeraFonseka/NIBMGradingHub', '_blank')}/>
                        <FaBehance className="view-button" size={82} onClick={() => window.open('https://www.behance.net/gallery/169250755/Grading-Software-for-an-Institute-or-School-Using-C', '_blank')}/>
                    </div>
                    </div>
                </div>
                <div className="container-box">
                    <img src={pay} alt="Project 2" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">Payroll and Leave Management System Project</p>
                        <p className="project-des">Desktop Application</p>
                        <div>
                        <GrGithub className="view-button" size={82} onClick={() => window.open('https://github.com/ShemeeraFonseka/PayrollandLeaveManagementSystem', '_blank')}/>
                        <FaBehance className="view-button" size={82} onClick={() => window.open('https://www.behance.net/gallery/168997821/Payroll-and-Leave-Management-System', '_blank')}/>
                    </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Work;
