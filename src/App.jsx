import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import {
  Experience,
  Skills,
  Contact,
} from "./components/Background.jsx";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
