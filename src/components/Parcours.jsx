import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaLaptopCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Parcours = () => {
  const [firstRef, firstInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [secondRef, secondInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div id="parcours" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center font-montserrat px-6">
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Parcours Scolaire
      </motion.h2>

      <div className="relative flex flex-col md:flex-row justify-center items-center w-full gap-12">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light hidden md:block"></div>

        {/* Premier élément */}
        <motion.div
          ref={firstRef}
          className={`bg-gray-800 border-4 border-primary-light rounded-lg shadow-lg p-6 w-80 md:w-96 relative z-10 md:-translate-y-16 ${
            firstInView ? "motion-safe:animate-fadeInUp" : ""
          }`}
          initial="hidden"
          animate={firstInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-primary-light rounded-full text-gray-900 text-2xl mb-4">
              <FaSchool />
            </div>
            <h3 className="text-xl font-semibold text-primary-light">2022-2023</h3>
            <p className="text-gray-300 mt-2 text-center">
              Baccalauréat Physique-Chimie
            </p>
            <span className="text-gray-500 mt-1 text-sm">
              Académie Maurice Bucaill
            </span>
          </div>
        </motion.div>

        {/* Deuxième élément */}
        <motion.div
          ref={secondRef}
          className={`bg-gray-800 border-4 border-primary-light rounded-lg shadow-lg p-6 w-80 md:w-96 relative z-10 md:translate-y-16 ${
            secondInView ? "motion-safe:animate-fadeInUp" : ""
          }`}
          initial="hidden"
          animate={secondInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-primary-light rounded-full text-gray-900 text-2xl mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-primary-light">2023-2025</h3>
            <p className="text-gray-300 mt-2 text-center">
              Technicien spécialisé en développement digital
            </p>
            <span className="text-gray-500 mt-1 text-sm">ISGI Casablanca</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Parcours;
