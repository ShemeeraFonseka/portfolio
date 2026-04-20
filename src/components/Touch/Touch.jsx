import React, { useState } from "react";
import emailjs from "emailjs-com";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Touch.css";

const contactItems = [
  {
    icon: SiGmail,
    label: "Email",
    value: "shemeerafonseka@gmail.com",
    href: "mailto:shemeerafonseka@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+9474 198 5282",
    href: "tel:+94741985282",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shemeera-fonseka",
    href: "https://www.linkedin.com/in/shemeera-fonseka",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: null,
  },
];

const Touch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_vunoib8",
        "template_v9unwf3",
        { name, email, message },
        "soFQR3l3kCMKLYla3",
      )
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section className="touch-section" id="touch">
      <div className="touch-blob1"></div>
      <div className="touch-blob2"></div>

      <div className="section-tag">Contact</div>
      <h2 className="section-heading">
        Get In <span>Touch</span>
      </h2>
      <p className="section-sub">
        Have a project in mind or just want to say hello? My inbox is always
        open.
      </p>

      <div className="contact-grid">
        {/* ── Form ── */}
        <div className="form-card">
          <div className="form-card-glow"></div>
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label className="field-label">Name</label>
              <input
                className="input-field"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field-group">
              <label className="field-label">Email</label>
              <input
                className="input-field"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field-group">
              <label className="field-label">Message</label>
              <textarea
                className="text-field"
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`submit-button ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending…"
                : status === "success"
                  ? "✓ Sent!"
                  : status === "error"
                    ? "Failed — try again"
                    : "Send Message →"}
            </button>
          </form>
        </div>

        {/* ── Info ── */}
        <div className="contact-info">
          <p className="info-heading">Contact details</p>
          <div className="info-divider"></div>
          <div className="contact-items">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon-wrap">
                    <Icon size={16} />
                  </div>
                  <div className="contact-text-wrap">
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a
                        className="contact-value contact-link"
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="availability-badge">
            <div className="avail-dot"></div>
            Available for new opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
