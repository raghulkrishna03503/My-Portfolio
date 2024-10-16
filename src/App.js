import NavBar from "./NavBar";
import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Education from "./Education";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  );
}

export default App;
