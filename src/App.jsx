import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Project from "./sections/Project"

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Hero />
        <About />
        <Project/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App