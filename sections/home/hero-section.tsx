import React from "react";
// import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-400/5 to-slate-600/5 dark:from-slate-600/10 dark:to-slate-800/10"></div> */}

      {/* Animated lines converging to center */}
      <div className="absolute inset-0">
        {/* Top horizontal line */}
        {/* <motion.div
          className="absolute z-20 top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
        /> */}

        {/* Bottom horizontal line */}
        {/* <motion.div
          className="absolute bottom-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, repeat: Infinity }}
        /> */}
        {/* <div className="absolute bottom-1/2 left-0 w-full h-0.5 bg-slate-700 origin-left z-10" /> */}

        {/* Left vertical line */}
        {/* <motion.div
          className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent origin-top z-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.9, repeat: Infinity }}
        /> */}
        {/* <motion.div
          className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent origin-top z-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.9, repeat: Infinity }}
        /> */}
        {/* <div className="absolute left-1/2 top-0 w-0.5 h-full origin-top bg-slate-700 z-10" /> */}
        {/* Right vertical line */}
        {/* <motion.div
          className="absolute right-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.1, repeat: Infinity }}
        /> */}

        {/* Diagonal line from top-left to center */}
        {/* <motion.div
          className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent origin-top z-20"
          style={{
            height: "50vh",
            transformOrigin: "top left",
            transform: "rotate(45deg)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.3, repeat: Infinity }}
        /> */}

        {/* Electric light effect moving continuously */}
        {/* <motion.div
          className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,1),0_0_30px_rgba(59,130,246,0.5)]"
          animate={{
            x: [0, "100vw", "100vw", 0, 0],
            y: [0, 0, "100vh", "100vh", 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        /> */}
      </div>

      <div className="text-center  max-w-4xl mx-auto px-4 z-20">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
          Hi, I’m Rabah — Full-Stack Web Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          I design and build dynamic web applications that merge performance,
          functionality, and creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(156,163,175,0.8)] transition-all duration-300"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            href="#contact"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
