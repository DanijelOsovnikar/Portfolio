import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useRef } from "react";
import "./App.scss";

function App() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero onClick={executeScroll} />
        <Languages />
        <Projects onClick={executeScroll} />
        <Footer>
          <Contact refProp={myRef} />
        </Footer>
      </main>
    </div>
  );
}

export default App;
