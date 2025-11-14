import useFadeIn from "../hooks/fade.js";

function About() {
  useFadeIn();
  return (
    
    <div className="About" id="about">
      <div className="about-title fade-in">About Me</div>
      <div className="about-line fade-in"></div>

      <div className="about-content fade-in">
        <p>
          I'm Pratik, a Computer Engineering student with a growing passion for
          building clean, modern, and responsive web applications. I enjoy
          turning ideas into interactive UI, writing readable code, and
          exploring how good design and smooth functionality come together.
        </p>

        <p>
          I'm currently learning the MERN stack and improving my frontend
          development skills with JavaScript and React. My focus right now is on
          understanding real-world development workflows—working with APIs,
          structuring components, managing state, and writing scalable code.
        </p>

        <div className="about-highlights fade-in">
          <div className="highlight-box"> React Developer</div>
          <div className="highlight-box"> JavaScript & Modern UI</div>
          <div className="highlight-box"> MERN Stack Learner</div>
          <div className="highlight-box"> Always Improving</div>
        </div>
      </div>
    </div>
  );
}

export default About;
