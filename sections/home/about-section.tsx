import React from "react";
import { Variants } from "framer-motion";
import AboutCard from "./about-card";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20"
    >
      <div className="text-center w-full md:max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Passionate developer with expertise in modern web technologies turning
          ideas into interactive digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", desc: "React, Next.js, TypeScript" },
            { title: "Backend", desc: "Node.js, NestJs, ExpressJs," },
            { title: "Design", desc: "UI/UX, Animations, Responsive" },
          ].map((skill) => (
            <AboutCard
              key={skill.title}
              title={skill.title}
              description={skill.desc}
              variants={itemVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
