import "./Work.css";
import freshcart from "./freshcart.png";
import todo from "./todo.png";
import capture from "./Capture.PNG";
import pay from "./pay.PNG";
import personal from "./personal.png";
import tours from "./tours.png";
import vip from "./vip.png";
import tsf from "./tsf.png";
import { FaBehance, FaEye } from "react-icons/fa";

const projects = [
  {
    name: "Tropical Shellfish",
    desc: "Full-stack web application for a Sri Lankan seafood export company to digitalise business operations.",
    type: "Full Stack",
    badge: "Featured",
    icon: "eye",
    url: "https://tsf-frontend.vercel.app/",
    img: tsf,
  },
  {
    name: "Tour Ceylon 360",
    desc: "Vehicle rental service for tourists, businesses, and local travellers across Sri Lanka.",
    type: "Full Stack",
    badge: "Live",
    icon: "eye",
    url: "https://ceylontours360-fe.vercel.app/",
    img: tours,
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio website showcasing projects, experience, and skills.",
    type: "Frontend",
    badge: null,
    icon: "eye",
    url: "https://shemeerafonseka.github.io/portfolio/",
    img: personal,
  },
  {
    name: "VIP Tours",
    desc: "Tour booking website with a full admin panel for managing reservations and customers.",
    type: "Full Stack",
    badge: "Live",
    icon: "eye",
    url: "https://vipfrontend.vercel.app/",
    img: vip,
  },
  {
    name: "SYOS Store & Billing",
    desc: "E-commerce web application with store management and integrated billing system.",
    type: "E-Commerce",
    badge: null,
    icon: "beh",
    url: "https://www.behance.net/gallery/235051009/SYOS-Store-and-Billing-System",
    img: freshcart,
  },
  {
    name: "Day Planner",
    desc: "To-do list and day planning application for managing daily tasks and schedules.",
    type: "Frontend",
    badge: null,
    icon: "eye",
    url: "https://shemeerafonseka.github.io/todolist/",
    img: todo,
  },
  {
    name: "NIBM Grading Hub",
    desc: "Desktop application for managing and computing student grades for institutes.",
    type: "Desktop App",
    badge: null,
    icon: "beh",
    url: "https://www.behance.net/gallery/169250755/Grading-Software-for-an-Institute-or-School-Using-C",
    img: capture,
  },
  {
    name: "Payroll & Leave System",
    desc: "Desktop application for managing employee payroll and leave management workflows.",
    type: "Desktop App",
    badge: null,
    icon: "beh",
    url: "https://www.behance.net/gallery/168997821/Payroll-and-Leave-Management-System",
    img: pay,
  },
];

const ProjectCard = ({ p }) => {
  return (
    <div className="proj-card">
      <img className="proj-img" src={p.img} alt={p.name} />
      <div className="proj-overlay">
        <div className="proj-type">{p.type}</div>
        <h3 className="proj-name">{p.name}</h3>
        <div className="proj-divider"></div>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-footer">
          <a
            className="proj-link"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.icon === "beh" ? <FaBehance size={13} /> : <FaEye size={13} />}
            {p.icon === "beh" ? "View on Behance" : "View Project"}
          </a>
          <div className="proj-arrow">&#8599;</div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-blob1"></div>
      <div className="work-blob2"></div>

      <div className="section-tag">Portfolio</div>
      <h2 className="section-heading">
        Featured <span>Projects</span>
      </h2>
      <p className="section-sub">
        A selection of work I've designed, built, and shipped.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Work;
