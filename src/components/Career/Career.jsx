
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Career.css";

const Career = () => {

    return (
        <div className="career-container" id="career">
            <p className="career-intro">CAREER</p>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#EB0824', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #EB0824' }}
                    date="2024 January - 2024 July"
                    iconStyle={{ background: '#fff', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title" style={{fontSize:'20px'}}>Trainee ICT Directorate</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{fontSize:'16px'}}>Sri Lanka Customs</h4>
                    <ul>
                        <li style={{fontSize:'12px'}}>Joined the development team as a fresh graduate, embarking on my career journey.</li>
                        <li style={{fontSize:'12px'}}>Rapidly acquired proficiency in React to integrate ongoing projects.</li>
                        <li style={{fontSize:'12px'}}>Translated designed templates into functional application versions.</li>
                        <li style={{fontSize:'12px'}}>Created web services to enhance communication capabilities.</li>
                        <li style={{fontSize:'12px'}}> Engaged in on-site troubleshooting sessions and provided customer support as needed.</li>
                        <li style={{fontSize:'12px'}}>Assisted senior developers in implementing intricate logic and solutions.</li>
                    </ul>
                </VerticalTimelineElement>




            </VerticalTimeline>


        </div>
    )

}

export default Career;