"use client";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function ProjectCard({
  title,
  description,
  imageUrl,
  slug,
  variants,
}: {
  title: string;
  description: string;
  index: number;
  imageUrl: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const lampBackground = useMotionTemplate`
    radial-gradient(circle 500px at ${springX}px ${springY}px, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.1), transparent 80%)
  `;
  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform overflow-hidden group cursor-pointer border border-gray-300 dark:border-gray-600"
      variants={variants}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/projects/${slug}`} className="h-full flex flex-col flex-1 ">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: lampBackground,
          }}
        />

        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className={`w-full h-48 object-cover rounded-lg mb-4 relative overflow-hidden`}
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 relative z-10">
          {title}
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 relative z-10 mt-auto line-clamp-3"
          title={description}
        >
          {description}
        </p>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
