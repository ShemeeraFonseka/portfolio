import "./Home.css";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaBehance, FaFileAlt } from "react-icons/fa";
import { MdOutlineDesktopWindows } from "react-icons/md";
import group from "./images/yy.png";

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <div className="hero-tag">Available for work</div>

        <h1 className="hero-name">
          Shemeera <span>Fonseka</span>
        </h1>

        <p className="hero-role">Full Stack Developer</p>

        <div className="hero-divider" />

        <p className="hero-bio">
          Building performant, end-to-end web applications with clean, scalable
          code. Passionate about creating seamless user experiences and solving
          complex problems with thoughtful engineering.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            <MdOutlineDesktopWindows size={15} />
            View Projects
          </a>
          <a href="#touch" className="btn-secondary">
            Let's talk →
          </a>
        </div>

        <div className="hero-socials">
          <span className="social-label">Find me</span>
          <a
            href="https://github.com/ShemeeraFonseka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <GrGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shemeera-fonseka-146776275/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/shemeerafonseka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Behance"
          >
            <FaBehance />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/Shemeera Fonseka-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Resume"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-wrap">
          <div className="photo-border-ring" />
          <div className="photo-border-ring-2" />
          <div className="photo-frame">
            <img src={group} alt="Shemeera Fonseka" className="photo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
