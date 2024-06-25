import React, { useState } from "react";
import "./Testimonials.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import nimesh from './nimesh.jpg'
import gihan from './gihan2.jpg'

// Sample testimonial data
const testimonialData = [
  {
    name: "Nimesh Fonseka",
    text:
      "I am thrilled to endorse Shemeera Fonseka as an exceptional Full Stack Developer. Her dedication and technical expertise are evident in every project she undertakes, consistently delivering innovative and high-quality solutions. Proficient in both front-end and back-end development, Shemeera is a versatile professional who stays ahead of industry trends through continuous learning. Her collaborative approach and leadership inspire those around her, significantly boosting team performance. Shemeera is a tremendous asset to any organization, and I highly recommend her for any development role.",
    image: nimesh, // URL to the image
  },
  {
    name: "Miyesi Welagedara",
    text:
      "I highly recommend Shemeera Fonseka, an exceptional Full Stack Developer. Her technical expertise and dedication ensure innovative, high-quality solutions in both front-end and back-end development. Shemeera's proactive learning and collaborative leadership inspire her team and drive outstanding performance. An invaluable asset to any organization, Shemeera is highly recommended for any development role.",
    image: "https://via.placeholder.com/150", // URL to the image
  },
  {
    name: "Gihan Fernando",
    text:
      "Shemeera Fonseka is an outstanding Full Stack Developer, known for her dedication, technical skills, and leadership. She consistently delivers high-quality, innovative solutions and excels in both front-end and back-end development. Shemeera is a proactive learner, staying ahead of industry trends, and inspires her team with her collaborative approach. Highly recommended for any organization, she is an invaluable asset who elevates the team's performance.",
    image: gihan, // URL to the image
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial" id="testimonial">
      <p className="testimonial-intro">TESTIMONIALS</p><br />
      <div className="wrapper">
        <GrFormPrevious className="pre" onClick={prevTestimonial} />
        <div className="testimonial-container" id="testimonial-container">
          <div className="testimonial-item">
            <img
              src={testimonialData[currentTestimonial].image}
              alt={testimonialData[currentTestimonial].name}
              className="testimonial-image"
            />
            <h3>{testimonialData[currentTestimonial].name}</h3>
            <p>{testimonialData[currentTestimonial].text}</p>
          </div>
        </div>
        <MdNavigateNext className="next" onClick={nextTestimonial} />
      </div>
    </div>
  );
};

export default Testimonials;
