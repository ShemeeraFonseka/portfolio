import "./Aboutme.css";

const Aboutme = () => {
    return (
        <div className="about-container" id="aboutme">
            <p className="about-intro">ABOUT ME</p>
<br />
            <div className="aboutmecontent">
                {/* Left side - intro */}
                <div className="left-content">
                    <p className="intro-content">
                        I’m a <b>Full Stack Developer</b> with expertise in designing, building, and managing both front-end and back-end systems. I’m passionate about creating seamless, high-performing web applications that not only meet business needs but also deliver an exceptional user experience.
                        <br /><br />
                        With a strong foundation in modern technologies and a problem-solving mindset, I focus on writing clean, efficient, and scalable code. I enjoy turning complex challenges into innovative solutions and optimizing performance to ensure reliability and speed.
                        <br /><br />
                        Beyond technical skills, I’m committed to continuous learning—staying updated with the latest tools, frameworks, and industry practices. This allows me to adapt quickly in a fast-changing tech landscape and consistently deliver results that drive impact.
                    </p>
                </div>

                {/* Right side - cards */}
                <div className="right-content">
                    <div className="card">
                        <h3>BEng (Hons) Software Engineering</h3>
                        <p> Staffordshire University, UK</p>
                        <p>2024 - 2025</p>
                    </div>
                    <div className="card">
                        <h3>Higher National Diploma in Software Engineering</h3>
                        <p> National Institute of Business Management</p>
                        <p>2022 - 2024</p>
                    </div>

                    <div className="card">
                        <h3>Diploma in Computer System Design</h3>
                        <p> National Institute of Business Management</p>
                        <p>2021 - 2022</p>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Aboutme;
