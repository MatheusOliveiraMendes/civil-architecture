import Slider from "../components/Slider";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
  <div>
   <div className="bg-neutral-900">
      <Slider />
   </div>
   <div>
       <About />
      <Services />
      <Projects />
      <Contact />
   </div>
   </div>
  );
}

export default Home;