// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-10 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-10">
  {SkillsInfo.map((category) => (
    <Tilt
      key={category.title}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={800}
      gyroscope={false}
    >
      <div
        className="bg-gray-900/60 backdrop-blur-md px-6 sm:px-8 py-6 sm:py-8 h-full
        rounded-2xl border border-white/10
        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 text-center">
          {category.title}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-center gap-2 border-2 border-gray-700 rounded-3xl py-2 px-2"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-xs sm:text-sm text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  ))}
</div>
  </section>
);

export default Skills;
