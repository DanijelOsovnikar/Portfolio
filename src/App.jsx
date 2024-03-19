import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Languages />
        <Projects />
        <Footer>
          <Contact />
        </Footer>
      </main>
    </div>
  );
}

export default App;
