import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Activities />
      </main>
      <Contact />
    </div>
  );
}

export default App;
