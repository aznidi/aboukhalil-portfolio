import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const changingTextRef = useRef(null);

  useEffect(() => {
    const texts = ["Aboukhalil Mohammed Ali", "Développeur Fullstack"];
    let currentIndex = 0;

    const changeText = () => {
      if (changingTextRef.current) {
        gsap.to(changingTextRef.current, {
          duration: 1.5,
          text: "",
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(changingTextRef.current, {
              duration: 2,
              text: texts[currentIndex],
              ease: "power3.inOut",
              onComplete: () => {
                currentIndex = (currentIndex + 1) % texts.length;
                setTimeout(changeText, 2000);
              },
            });
          },
        });
      }
    };

    changeText();
  }, []);

  return (
    <div
      id="accueil"
      className="min-h-screen bg-white text-[#073e82] flex flex-col justify-center items-center font-montserrat px-6 relative"
    >
      {/* Icônes fixes des réseaux sociaux pour Desktop */}
      <div className="hidden md:flex fixed bottom-8 left-6 flex-col gap-4 z-50">
        {[
          {
            href: "https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329",
            icon: <FaLinkedin />,
          },
          { href: "mailto:medaliaboukhalil@gmail.com", icon: <FaEnvelope /> },
          { href: "https://github.com/aboukhalil05", icon: <FaGithub /> },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#073e82] text-yellow-500 hover:bg-yellow-500 hover:text-[#073e82] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-xl">{item.icon}</span>
          </a>
        ))}
      </div>

      {/* Section principale */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Contenu texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-lg"
        >
          <p className="text-[#073e82] text-2xl font-semibold animate-pulse">
            Bonjour à tous 👋
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Je suis{" "}
            <span ref={changingTextRef} className="text-yellow-500"></span>
          </h1>
          <p className="mt-4 text-gray-600 text-xl">
            Passionné par le développement web et la création de solutions
            innovantes.
          </p>
          <div className="flex flex-col items-center md:items-start gap-4 mt-6">
            {/* Bouton Télécharger le CV */}
            <a
              href="/Aboukhalil_Mohammmed_Ali_CV.pdf"
              download
              className="px-6 py-3 bg-yellow-500 text-[#073e82] rounded-full shadow-lg hover:shadow-[0_0_10px_#073e82] transition-all duration-300 text-lg font-semibold"
            >
              Télécharger mon CV
            </a>

            {/* Icônes - Sous le bouton uniquement sur Mobile */}
            <div className="flex md:hidden gap-4 justify-center mt-4">
              {[
                {
                  href: "https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329",
                  icon: <FaLinkedin />,
                },
                { href: "mailto:medaliaboukhalil@gmail.com", icon: <FaEnvelope /> },
                { href: "https://github.com/aboukhalil05", icon: <FaGithub /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#073e82] text-yellow-500 hover:bg-yellow-500 hover:text-[#073e82] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image agrandie */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-yellow-500">
            <img
              src="/profil.png" // Lien de l'image
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
