import "./Cv.css";

const Cv = () => {

    return (
        <div className="cv-container" id="cv">
           <a href={`${process.env.PUBLIC_URL}/Shemeera Fonseka-CV.pdf`} download="Shemeera_Fonseka_CV.pdf">
        <button className="download-button">
          Download My CV
        </button>
      </a>
            

        </div>
    )

}

export default Cv;