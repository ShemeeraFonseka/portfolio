import React, { useState } from "react";
import "./Testimonials.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Sample testimonial data
const testimonialData = [
  {
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et porta justo, nec tristique erat. Sed ac faucibus est. Cras convallis posuere nulla, quis suscipit ipsum gravida et.",
    image: "./nimesh.jpg", // URL to the image
  },
  {
    name: "Jane Smith",
    text:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis leo vel ipsum venenatis accumsan.",
    image: "https://via.placeholder.com/150", // URL to the image
  },
  {
    name: "Emily Johnson",
    text:
      "Vestibulum tempus tortor sit amet est consectetur, non varius risus malesuada. Fusce consectetur sem nec mi commodo, nec volutpat dui vestibulum.",
    image: "https://via.placeholder.com/150", // URL to the image
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
