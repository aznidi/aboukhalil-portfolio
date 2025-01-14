import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaTools, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa"; // Importation de l'icône Student

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App font-montserrat">
      <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 backdrop-blur-lg shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold flex items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#073e82]">&lt;</span>
            <span className="text-[#073e82]">M</span>
            <span className="text-yellow-500">ed</span>
            <span className="text-[#073e82]">A</span>
            <span className="text-yellow-500">li</span>
            <span className="text-[#073e82]">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            {[
              { href: "#accueil", icon: <FaHome />, label: "Accueil" },
              { href: "#skills", icon: <FaTools />, label: "Compétences" },
              { href: "#parcours", icon: <FaUserGraduate />, label: "Education" }, // Nouvelle icône
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((link, index) => (
              <li
                key={index}
                className="group relative transition-all duration-300"
              >
                <motion.a
                  href={link.href}
                  className="flex items-center gap-2 font-medium text-[#073e82] hover:text-yellow-500 transition-all duration-300"
                >
                  {link.icon}
                  {link.label}
                </motion.a>
                {/* Trait animé */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* Burger Icon */}
          <div
            className="md:hidden cursor-pointer text-2xl text-[#073e82]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="md:hidden bg-transparent bg-opacity-50 backdrop-blur-lg text-[#073e82] flex flex-col items-center gap-6 py-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { href: "#accueil", icon: <FaHome />, label: "Accueil" },
              { href: "#skills", icon: <FaTools />, label: "Compétences" },
              { href: "#parcours", icon: <FaUserGraduate />, label: "Education" }, // Nouvelle icône
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 font-medium text-[#073e82] hover:text-yellow-500 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </div>
  );
}

export default App;
