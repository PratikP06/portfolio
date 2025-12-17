import useFadeIn from "../hooks/fade.js";

function Hero() {
    useFadeIn();
  return (
    <>

      <div className="hero" id = "heroo">
        <h1 className="fade-in">
          Hello, I'm <span>Pratik</span>
        </h1>
        <h2 className="fade-in">A Full Stack Web Developer</h2>

        <p className="tagline fade-in">
          Fond of Solving real world problems , creating web application and
          bringing them to life using code.
        </p>

        <a className="cta-btn fade-in"
          href="/Resume1.pdf"
          download="Resume1.pdf">Download Resume</a>
      </div>
      
    </>
  );
}

export default Hero;
