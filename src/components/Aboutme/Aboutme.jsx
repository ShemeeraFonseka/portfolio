import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="edu-section" id="aboutme">
      <div className="section-tag">Background</div>

      <h2 className="section-heading">
        Education &amp; <span>Qualifications</span>
      </h2>
      <p className="section-sub">
        Academic foundations that shaped my approach to engineering and
        problem-solving.
      </p>

      <div className="edu-grid">
        <div className="edu-card">
          <div className="edu-card-glow" />
          <div className="edu-year">
            <div className="edu-year-dot" />
            2024 – 2025
          </div>
          <div className="edu-icon">🎓</div>
          <div className="edu-degree">BEng (Hons) Software Engineering</div>
          <div className="edu-divider" />
          <div className="edu-school">Staffordshire University, UK</div>
        </div>

        <div className="edu-card">
          <div className="edu-card-glow" />
          <div className="edu-year">
            <div className="edu-year-dot" />
            2022 – 2024
          </div>
          <div className="edu-icon">📚</div>
          <div className="edu-degree">
            Higher National Diploma in Software Engineering
          </div>
          <div className="edu-divider" />
          <div className="edu-school">
            National Institute of Business Management
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-card-glow" />
          <div className="edu-year">
            <div className="edu-year-dot" />
            2021 – 2022
          </div>
          <div className="edu-icon">💻</div>
          <div className="edu-degree">Diploma in Computer System Design</div>
          <div className="edu-divider" />
          <div className="edu-school">
            National Institute of Business Management
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
