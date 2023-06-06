import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home"
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ProgressBar from "./components/Progress";
import AOS from "aos";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css" ;
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <main id="main bg-dark">
      <Navbar />
      
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
