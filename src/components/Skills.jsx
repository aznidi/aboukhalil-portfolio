import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiJira } from "react-icons/si";
import { DiScrum } from "react-icons/di"; // Icône Scrum
import { AiOutlineFileWord, AiOutlineFileExcel, AiOutlineFilePpt } from "react-icons/ai";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-6xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-400 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-6xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-6xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
  ];

  const officeSkills = [
    { name: "Word", icon: <AiOutlineFileWord className="text-blue-600 text-6xl" /> },
    { name: "Excel", icon: <AiOutlineFileExcel className="text-green-600 text-6xl" /> },
    { name: "PowerPoint", icon: <AiOutlineFilePpt className="text-orange-600 text-6xl" /> },
  ];

  const collaborativeSkills = [
    { name: "Scrum", icon: <DiScrum className="text-red-600 text-6xl" /> }, // Icône Scrum mise à jour
    { name: "Jira", icon: <SiJira className="text-blue-500 text-6xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-black text-6xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-6xl" /> },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const SkillBox = ({ skill }) => (
    <div className="flex flex-col items-center justify-center bg-white border-4 border-yellow-500 rounded-lg shadow-lg p-4 mx-3 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        {skill.icon}
      </div>
      <span className="text-black font-bold text-center">{skill.name}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#073e82]">
        Mes Compétences
      </h2>

      {/* Compétences Techniques */}
      <div className="w-full max-w-5xl mb-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-[#073e82]">
          Compétences Techniques
        </h3>
        <Slider {...sliderSettings}>
          {technicalSkills.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </Slider>
      </div>

      {/* Compétences Collaboratives */}
      <div className="w-full max-w-5xl mb-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-[#073e82]">
          Compétences Collaboratives
        </h3>
        <Slider {...sliderSettings}>
          {collaborativeSkills.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </Slider>
      </div>

      {/* Compétences Bureautiques */}
      <div className="w-full max-w-5xl">
        <h3 className="text-2xl font-semibold text-center mb-6 text-[#073e82]">
          Compétences Bureautiques
        </h3>
        <Slider {...sliderSettings}>
          {officeSkills.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
