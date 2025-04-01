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
<<<<<<< HEAD
    <div className=" overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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

=======
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
>>>>>>> e3f68fe (update on portfolio from 2024-2025)
      </div>
    </div>
  );
};

export default App;
<<<<<<< HEAD
=======

>>>>>>> e3f68fe (update on portfolio from 2024-2025)
