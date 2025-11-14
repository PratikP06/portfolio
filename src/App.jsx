import Navbar from "./comp/navbar";
import Hero from "./comp/body";
import Skills from "./comp/Skill";
import Projects from "./comp/projects";
import About from "./comp/about";
import Contact from "./comp/connect";
import Footer from "./comp/footer";
import useFadeIn from "./hooks/fade";



function App() {
  useFadeIn();
  return (

    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <div className="right-glow"></div>
    </>
  );
}

export default App;
