import React from "react";
import { motion } from "framer-motion";
import { BiLoaderCircle } from "react-icons/bi"; // Importation de l'icône

const Loader = () => {
  // Variants pour l'animation des lettres
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Délai d'apparition pour chaque lettre
        duration: 0.4,
      },
    }),
  };

  const letters = [
    { char: "<", color: "#073e82" },
    { char: "M", color: "#073e82" },
    { char: "ed", color: "#fbbf24" },
    { char: "A", color: "#073e82" },
    { char: "li", color: "#fbbf24" },
    { char: "/>", color: "#073e82" },
  ];

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
      {/* Icône animée */}
      <motion.div
        className="mb-6 text-8xl text-[#073e82]"
        animate={{
          rotate: 360, // Animation de rotation
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      >
        <BiLoaderCircle />
      </motion.div>

      {/* Texte animé */}
      <motion.div
        className="text-5xl font-bold flex items-center"
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            style={{ color: letter.color }}
            custom={i}
            variants={letterVariants}
          >
            {letter.char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
