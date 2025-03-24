import { motion } from "framer-motion";
import Slider from "../components/Slider";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Slider />
      <About />
      <Services />
      <Projects />
      <Contact />

    </motion.div>
  );
}

export default Home;