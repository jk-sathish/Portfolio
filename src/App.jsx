import About from "./about/About";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Skills from "./skills/Skills";
function App() {
 

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
};

export default App;
