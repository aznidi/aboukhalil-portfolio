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
    <div
      id="parcours"
      className="min-h-screen bg-white text-black flex flex-col justify-center items-center font-montserrat px-6 mt-16 mb-16"
    >
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{ color: "#073e82" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Éducation
      </motion.h2>

      <div className="relative flex flex-col md:flex-row justify-center items-center w-full gap-12">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500 hidden md:block"></div>

        {/* Premier élément */}
        <motion.div
          ref={firstRef}
          className={`bg-white border-4 border-yellow-500 rounded-lg shadow-lg p-6 w-80 md:w-96 h-72 flex flex-col justify-center items-center relative z-10 md:-translate-y-16 ${
            firstInView ? "motion-safe:animate-fadeInUp" : ""
          }`}
          initial="hidden"
          animate={firstInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-[#073e82] rounded-full text-yellow-500 text-2xl mb-4 border-2 border-yellow-500">
              <FaSchool />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500">2022-2023</h3>
            <p className="text-gray-700 mt-2 text-center">
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
          className={`bg-white border-4 border-yellow-500 rounded-lg shadow-lg p-6 w-80 md:w-96 h-72 flex flex-col justify-center items-center relative z-10 md:translate-y-16 ${
            secondInView ? "motion-safe:animate-fadeInUp" : ""
          }`}
          initial="hidden"
          animate={secondInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-[#073e82] rounded-full text-yellow-500 text-2xl mb-4 border-2 border-yellow-500">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500">2023-2025</h3>
            <p className="text-gray-700 mt-2 text-center">
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
