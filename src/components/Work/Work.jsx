import "./Work.css";

const Work = () => {
    return (
        <div className="work-container" id="work">
            <p className="work-intro">PROJECTS</p>
            <div className="projects-container">
                <div className="container-box">
                    <img src="./1.PNG" alt="Project 1" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">Fresh Cart Project</p>
                        <button className="view-button" onClick={() => window.open('https://www.behance.net/gallery/201434695/Fresh-Cart-Project', '_blank')}>
                            View Project
                        </button>
                    </div>
                </div>
                <div className="container-box">
                    <img src="./3.PNG" alt="Project 2" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">To Do List App Project</p>
                        <button className="view-button" onClick={() => window.open('https://www.behance.net/gallery/201516581/To-Do-List-App?', '_blank')}>
                        View Project
                        </button>
                    </div>
                </div>

                
            </div>


            <div className="projects-container">
                <div className="container-box">
                    <img src="./Capture.PNG" alt="Project 1" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">Grading Hub Project</p>
                        <button className="view-button" onClick={() => window.open('https://www.behance.net/gallery/169250755/Grading-Software-for-an-Institute-or-School-Using-C', '_blank')}>
                            View Project
                        </button>
                    </div>
                </div>
                <div className="container-box">
                    <img src="./pay.PNG" alt="Project 2" />
                    <div className="overlay">
                        <div className="background-overlay"></div>
                        <p className="project-name">Payroll and Leave Management System Project</p>
                        <button className="view-button" onClick={() => window.open('https://www.behance.net/gallery/168997821/Payroll-and-Leave-Management-System', '_blank')}>
                        View Project
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Work;
