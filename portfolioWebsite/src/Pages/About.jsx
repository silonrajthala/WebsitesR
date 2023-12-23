import React from "react";
import "../App.css";
import "../Components/Styles/About.css";
function About() {
  return (
      <div className="about-container">
        <div className="about-content">
          <div className="image-about"></div>
          <div className="text-about">
            <h1>ABOUT ME</h1>
            <h2>
              A dedicated Front-end Developer <br />
              based in Bhaktapur, Nepal 📍{" "}
            </h2>
            <p>
              Passionate and driven computer engineering student with a solid academic foundation and a genuine love for technology. Committed to making a positive impact through innovative solutions while fostering personal growth and continuous learning. Known for being dedicated, reliable, and meticulous, with deep understanding for computer architecture and operating systems. Actively seeking an internship opportunity to gain hands-on experience and expand my knowledge in the dynamic field of computer engineering.
            </p>
          </div>
        </div>
      </div>
  );
}
export default About;
