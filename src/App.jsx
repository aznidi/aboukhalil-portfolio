import React from "react";
import Navbar from "./components/Navbar"; // Importation du Navbar
import Hero from "./components/Hero";    // Importation du composant Hero
import Parcours from "./components/Parcours"; // Importation du composant Parcours
import Skills from "./components/Skills";  

import './index.css';


import 'animate.css';

import Contact from "./components/Contact";
import Foter from "./components/Foter";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Parcours />
      <Contact />
      <Foter />
    </div>
  );
}

export default App;
