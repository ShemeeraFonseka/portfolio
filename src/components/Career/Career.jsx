
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Career.css";

const Career = () => {

    return (
        <div className="career-container" id="career">
            <p className="career-intro">WORK EXPERIENCE</p>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#26196cff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #26196cff' }}
                    date="2024 November - 2025 May"
                    iconStyle={{ background: '#fff', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px' }}> Intern Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '20px' }}> Asia Lanka Developers</h4><br />
                    <ul>
                        <li style={{ fontSize: '18px' }}> Developed and maintained responsive web applications using modern front
                            end and back-end technologies.</li>
                        <li style={{ fontSize: '18px' }}>Customized and deployed robust Point of Sale (POS) systems tailored to
                            specific client requirements.</li>
                        <li style={{ fontSize: '18px' }}>Designed scalable and reusable UI/UX components to enhance consistency
                            across projects.</li>
                        <li style={{ fontSize: '18px' }}> Collaborated with clients to gather requirements and deliver effective, user
                            centric solutions.</li>
                        <li style={{ fontSize: '18px' }}> Managed projects end-to-end, ensuring timely delivery, code quality, and
                            stakeholder satisfaction.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#26196cff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #26196cff' }}
                    date="2024 January - 2024 July"
                    dateClassName="custom-date"
                    iconStyle={{ background: '#fff', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title" style={{ fontSize: '30px' }}>Trainee ICT Directorate</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '20px' }}>Sri Lanka Customs</h4><br />
                    <ul>
                        <li style={{ fontSize: '18px' }}>Joined the development team as a fresh graduate, embarking on my career journey.</li>
                        <li style={{ fontSize: '18px' }}>Rapidly acquired proficiency in React to integrate ongoing projects.</li>
                        <li style={{ fontSize: '18px' }}>Translated designed templates into functional application versions.</li>
                        <li style={{ fontSize: '18px' }}>Created web services to enhance communication capabilities.</li>
                        <li style={{ fontSize: '18px' }}> Engaged in on-site troubleshooting sessions and provided customer support as needed.</li>
                        <li style={{ fontSize: '18px' }}>Assisted senior developers in implementing intricate logic and solutions.</li>
                    </ul>
                </VerticalTimelineElement>

                




            </VerticalTimeline>


        </div>
    )

}

export default Career;