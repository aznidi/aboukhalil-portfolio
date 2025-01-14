import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parcours from "./components/Parcours";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Foter from "./components/Foter";
import Loader from "./components/Loader"; // Importation du Loader

import './index.css';
import 'animate.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai pour l'écran de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 secondes

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  if (loading) {
    return <Loader />; // Affiche le Loader tant que la page n'est pas prête
  }

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
