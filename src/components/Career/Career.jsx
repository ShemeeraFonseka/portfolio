// Career.jsx
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Career.css';

const Career = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Developer",
            company: "Midiz",
            date: "December 2025 - Present",
            responsibilities: [
                "Developing and maintaining scalable web applications using modern frameworks and technologies.",
                "Designing and implementing new features, fixing bugs, and optimizing system performance.",
                "Integrating third-party and internal APIs and managing databases to support business operations.",
                "Building responsive, user-friendly interfaces while working closely with UI/UX designers.",
                "Collaborating with cross-functional teams to deliver reliable, secure, and high-quality software solutions."
            ]
        },
        {
            id: 2,
            title: "Software Development Intern",
            company: "Flego Innovation",
            date: "June 2025 - Present",
            responsibilities: [
                "Assisting the development team with multiple projects and day-to-day technical tasks.",
                "Developing, testing, and maintaining web applications using modern technologies.",
                "Contributing creative ideas and technical solutions to ongoing projects.",
                "Communicating and collaborating with clients and internal teams in a professional manner.",
                "Managing assigned tasks efficiently, meeting deadlines, and reporting progress regularly."
            ]
        },
        {
            id: 3,
            title: "Intern Software Developer",
            company: "Asia Lanka Developers",
            date: "November 2024 - May 2025",
            responsibilities: [
                "Developed and maintained responsive web applications using modern front-end and back-end technologies.",
                "Customized and deployed robust Point of Sale (POS) systems tailored to specific client requirements.",
                "Designed scalable and reusable UI/UX components to enhance consistency across projects.",
                "Collaborated with clients to gather requirements and deliver effective, user-centric solutions.",
                "Managed projects end-to-end, ensuring timely delivery, code quality, and stakeholder satisfaction."
            ]
        },
        {
            id: 4,
            title: "Trainee ICT Directorate",
            company: "Sri Lanka Customs",
            date: "January 2024 - July 2024",
            responsibilities: [
                "Joined the development team as a fresh graduate, embarking on my career journey.",
                "Rapidly acquired proficiency in React to integrate ongoing projects.",
                "Translated designed templates into functional application versions.",
                "Created web services to enhance communication capabilities.",
                "Engaged in on-site troubleshooting sessions and provided customer support as needed.",
                "Assisted senior developers in implementing intricate logic and solutions."
            ]
        }
    ];

    return (
        <div className="career-section" id="career">
            <div className="career-header">
                <h2 className="career-title">Work Experience</h2>
                <div className="career-underline"></div>
            </div>

            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="timeline-connector">
                            <div className="timeline-icon">
                                <Briefcase size={24} />
                            </div>
                            {index < experiences.length - 1 && <div className="timeline-line"></div>}
                        </div>

                        <div className="timeline-content">
                            <div className="timeline-date">
                                <Calendar size={18} />
                                <span>{exp.date}</span>
                            </div>
                            
                            <div className="timeline-card">
                                <h3 className="job-title">{exp.title}</h3>
                                <h4 className="company-name">{exp.company}</h4>
                                
                                <ul className="responsibilities-list">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Career;