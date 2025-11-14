import iot from "../assets/iot.svg"
import expenses from "../assets/expenses.svg"
import useFadeIn from "../hooks/fade.js";


function Projects() {
  useFadeIn();
  return (
    <div className="Projects " id="projects">
      <div className="project-title fade-in">Projects</div>
      <div className="project-line fade-in"></div>

      <div className="projectcards-container fade-in">

        {/* Air Quality Project */}
        <div className="project-card fade-in">
          <div className="project-icon"><img src={iot} alt="" /></div>
          <h3>Air Quality Monitoring System</h3>
          <p>
            IoT-based system using ESP32, MQ135, and DHT11 to monitor AQI, 
            temperature, humidity, and CO₂ levels with real-time dashboard.
          </p>

          {/* No live link → Show GitHub button */}
          <a href="https://github.com/PratikP06/AQI-monitoring-system" className="project-btn">View Code</a>
        </div>

        {/* Expense Tracker Project */}
        <div className="project-card fade-in">
          <div className="project-icon"><img src={expenses} alt="" /></div>
          <h3>Expense Tracker</h3>
          <p>
            A responsive MERN web app to add, track, and manage expenses with 
            clean UI and real-time balance updates.
          </p>

          {/* This one can have live + code */}
          <div className="project-btn-group">
            <a href="https://kharchapani-bay.vercel.app/" className="project-btn">Live Demo</a>
            <a href="https://github.com/PratikP06/kharchapani" className="project-btn secondary">GitHub</a>
          </div>
        </div>

         

      </div>
    </div>
  );
}

export default Projects;
