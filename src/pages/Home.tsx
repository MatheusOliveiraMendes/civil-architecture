import Slider from "../components/Slider";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <main className="flex flex-col">
      <Slider />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
