import git from "../assets/git.svg"
import java from "../assets/java.svg"
import web from "../assets/code.svg"
import react from "../assets/react.svg"

import useFadeIn from "../hooks/fade.js";


function Skills() {
  useFadeIn();
  return (
    <div className="Skills" id = "skills">
      <div className="skill-title fade-in">Skill Set</div>

      <div className="skill-line fade-in"></div>

      <div className="skillcards-container fade-in">
        <div className="skill-card fade-in">
          <div className="skill-icon"><img src={web} alt="" /></div>
          <h3>Web Development</h3>
          <p>
            HTML, CSS, JavaScript, responsive design, and modern UI layouts.
          </p>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon"><img src={java} alt="" /></div>
          <h3>Java Programming</h3>
          <p>OOP concepts, problem solving, and core Java fundamentals.</p>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon"><img src={git} alt="" /></div>
          <h3>Git Version Control</h3>
          <p>Git, GitHub, branching, commits, and project collaboration.</p>
        </div>

        <div className="skill-card fade-in">
          <div className="skill-icon"><img src={react} alt="" /></div>
          <h3>React.js</h3>
          <p>Components, props, hooks, and building interactive interfaces.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
