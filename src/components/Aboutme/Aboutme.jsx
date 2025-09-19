import "./Aboutme.css";

const Aboutme = () => {
    return (
        <div className="about-container" id="aboutme">
            <p className="about-intro">EDUCATION</p>
            <br />
            <div className="aboutmecontent">
                {/* Left side - intro */}
                

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
