import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-hero-gradient-dark text-white flex flex-col justify-center items-center font-montserrat px-6 relative">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-primary mb-6 mt-16">ABOUKHALIL MOHAMMED ALI</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        Développeur Full Stack • Passionné par le backend <br />
        Création de solutions numériques innovantes et participation à des projets variés.
      </p>

      {/* Coordonnées */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:medaliaboukhalil@gmail.com"
          className="flex items-center gap-3 text-primary-light hover:text-primary transition-all duration-300"
        >
          <FaEnvelope className="text-2xl" />
          medaliaboukhalil@gmail.com
        </a>
        {/* Téléphone */}
        <a
          href="tel:+2120710290759"
          className="flex items-center gap-3 text-primary-light hover:text-primary transition-all duration-300"
        >
          <FaPhone className="text-2xl" />
          +212 07 10 29 07 59
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/aboukhalil05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-primary-light hover:text-primary transition-all duration-300"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-primary-light hover:text-primary transition-all duration-300"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>
      </div>

      {/* Copyright */}
      <footer className="mt-12 text-gray-500 text-sm">
        © 2024 ABOUKHALIL MOHAMMED ALI. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Footer;
