import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaTools, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App font-montserrat">
      <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 backdrop-blur-lg shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold flex items-center text-primary"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>&lt;</span>
            <span className="text-primary-light">M</span>
            <span>ed</span>
            <span className="text-primary-light">A</span>
            <span>li</span>
            <span>&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-lg text-primary">
            {[{ href: "#accueil", icon: <FaHome />, label: "Accueil" },
              { href: "#parcours", icon: <FaUser />, label: "Parcours" },
              { href: "#skills", icon: <FaTools />, label: "Compétences" },
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((link, index) => (
              <li
                key={index}
                className="group relative transition-all duration-300"
              >
                <motion.a
                  href={link.href}
                  className="flex items-center gap-2 font-medium group-hover:text-primary-light transition-all duration-300"
                >
                  {link.icon}
                  {link.label}
                </motion.a>
                {/* Trait animé */}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Burger Icon */}
          <div
            className="md:hidden cursor-pointer text-2xl text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="md:hidden bg-transparent bg-opacity-50 backdrop-blur-lg text-primary flex flex-col items-center gap-6 py-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[{ href: "#accueil", icon: <FaHome />, label: "Accueil" },
              { href: "#parcours", icon: <FaUser />, label: "Parcours" },
              { href: "#skills", icon: <FaTools />, label: "Compétences" },
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 font-medium hover:text-primary-light transition-all duration-300"
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
