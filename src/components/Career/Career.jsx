import React from "react";
import "./Career.css";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Midiz",
    date: "December 2025 – Present",
    responsibilities: [
      "Developing and maintaining scalable web applications using modern frameworks and technologies.",
      "Designing and implementing new features, fixing bugs, and optimising system performance.",
      "Integrating third-party and internal APIs and managing databases to support business operations.",
      "Building responsive, user-friendly interfaces while working closely with UI/UX designers.",
      "Delivering reliable, secure, and high-quality software solutions with cross-functional teams.",
    ],
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Flego Innovation",
    date: "June 2025 – Present",
    responsibilities: [
      "Assisting the development team with multiple projects and day-to-day technical tasks.",
      "Developing, testing, and maintaining web applications using modern technologies.",
      "Contributing creative ideas and technical solutions to ongoing projects.",
      "Communicating and collaborating with clients and internal teams professionally.",
      "Managing tasks efficiently, meeting deadlines, and reporting progress regularly.",
    ],
  },
  {
    id: 3,
    title: "Intern Software Developer",
    company: "Asia Lanka Developers",
    date: "November 2024 – May 2025",
    responsibilities: [
      "Built responsive web applications using modern front-end and back-end technologies.",
      "Customised and deployed Point of Sale (POS) systems tailored to client requirements.",
      "Designed scalable, reusable UI/UX components to enhance consistency across projects.",
      "Collaborated with clients to gather requirements and deliver user-centric solutions.",
      "Managed projects end-to-end ensuring timely delivery, code quality, and stakeholder satisfaction.",
    ],
  },
  {
    id: 4,
    title: "Trainee ICT Directorate",
    company: "Sri Lanka Customs",
    date: "January 2024 – July 2024",
    responsibilities: [
      "Joined the development team as a fresh graduate, embarking on my career journey.",
      "Rapidly acquired proficiency in React to contribute to ongoing projects.",
      "Translated designed templates into functional application screens.",
      "Created web services to enhance internal communication capabilities.",
      "Assisted senior developers in implementing complex logic and solutions.",
    ],
  },
];

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Career = () => (
  <section className="career-section" id="career">
    <div className="career-blob1" />
    <div className="career-blob2" />

    <div className="section-tag">Journey</div>
    <h2 className="section-heading">
      Work <span>Experience</span>
    </h2>
    <p className="section-sub">
      Companies and roles that shaped me as a developer.
    </p>

    <div className="timeline">
      {experiences.map((exp) => (
        <div className="tl-item" key={exp.id}>
          <div className="tl-node">
            <div className="tl-dot">
              <BriefcaseIcon />
            </div>
          </div>
          <div className="tl-body">
            <div className="tl-date">
              <CalendarIcon />
              {exp.date}
            </div>
            <div className="tl-card">
              <div className="tl-card-glow" />
              <h3 className="job-title">{exp.title}</h3>
              <div className="tl-divider" />
              <p className="company-name">{exp.company}</p>
              <ul className="resp-list">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Career;
