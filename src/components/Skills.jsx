import React from "react";
import Slider from "react-slick"; // Slider élégant
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Défilement automatique
    autoplaySpeed: 2500, // Vitesse du défilement
    pauseOnHover: false, // Continue même au survol
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const skills = [
    { name: "HTML", image: "html.png" },
    { name: "CSS", image: "css.png" },
    { name: "JavaScript", image: "js.png" },
    { name: "PHP", image: "php.png" },
    { name: "Python", image: "python.png" },
    { name: "React", image: "react.png" },
    { name: "Laravel", image: "laravel.png" },
    { name: "MySQL", image: "mysql.png" },
  ];

  return (
    <div
      id="skills"
      ref={ref}
      className="min-h-screen bg-hero-gradient-dark text-white flex flex-col justify-center items-center font-montserrat px-6 relative"
    >
      {/* Titre principal */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        Mes Compétences
      </motion.h2>

      {/* Section Technique */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-primary-light text-center mb-6">
          Compétences Techniques
        </h3>
        <Slider {...sliderSettings} className="mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-md border border-primary-light rounded-lg p-4 mx-3 shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <span className="text-lg font-bold">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Section Bureautique */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-primary-light text-center mb-6">
          Compétences Bureautiques
        </h3>
        <Slider {...sliderSettings}>
          {[
            { name: "Word", image: "word.png" },
            { name: "Excel", image: "excel.png" },
            { name: "PowerPoint", image: "powerpoint.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-md border border-primary-light rounded-lg p-4 mx-3 shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <span className="text-lg font-bold">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Skills;
