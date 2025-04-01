import About from "./components/About";
import Contact from "./components/Contact";
import Copy from "./components/Copy";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      {/* Radial Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10" 
           style={{ background: "radial-gradient(125% 125% at 50% 10%, black 50%, purple 90%)" }}>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Copy />
      </div>
    </div>
  );
};

export default App;
