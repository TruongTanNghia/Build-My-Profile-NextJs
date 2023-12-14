import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, language }) => {
  // Define a function to map languages to colors
  const getSkillColor = (language) => {
    switch (language.toLowerCase()) {
      case "html":
        return "bg-red-500";
      case "css":
        return "bg-blue-500";
      case "javascript":
        return "bg-yellow-500";
      case "reactjs":
        return "bg-blue-700";
      case "nextjs":
        return "bg-blue-900";
      case "vuejs":
        return "bg-green-500";
      case "web design":
        return "bg-purple-500";
      case "figma":
        return "bg-pink-500";
      case "firebase":
        return "bg-orange-500";
      case "tailwind css":
        return "bg-teal-500";
      // Add more cases for other languages as needed
      default:
        return "bg-gray-500"; // Default color for unknown languages
    }
  };

  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold ${getSkillColor(
        language
      )} text-light py-3 px-6 shadow-dark cursor-pointer absolute`}
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {/* Use the language prop to specify the programming language for each skill */}
        <Skill name="HTML" x="-20vw" y="2vw" language="HTML" />
        <Skill name="CSS" x="-5vw" y="-10vw" language="CSS" />
        <Skill name="Javascript" x="20vw" y="6vw" language="JavaScript" />
        <Skill name="ReactJS" x="0vw" y="12vw" language="ReactJS" />
        <Skill name="NextJS" x="-20vw" y="-15vw" language="NextJS" />
        <Skill name="VueJS" x="15vw" y="-12vw" language="VueJS" />
        <Skill name="Web Design" x="32vw" y="-5vw" language="Design" />
        <Skill name="Figma" x="0vw" y="-20vw" language="Figma" />
        <Skill name="Firebase" x="-25vw" y="15vw" language="Firebase" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" language="Tailwind CSS" />
      </div>
    </>
  );
};

export default Skills;
