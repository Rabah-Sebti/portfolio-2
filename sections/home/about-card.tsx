"use client";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  motion,
  Variants,
} from "framer-motion";
import React, { useRef, useState } from "react";

function AboutCard({
  title,
  description,
  variants,
}: {
  title: string;
  description: string;
  variants: Variants;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const lampBackground = useMotionTemplate`
    radial-gradient(circle 200px at ${springX}px ${springY}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.1), transparent 80%)
  `;

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-300 dark:border-gray-600"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered ? lampBackground : "transparent",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered ? lampBackground : "transparent",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 relative z-10">
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;
