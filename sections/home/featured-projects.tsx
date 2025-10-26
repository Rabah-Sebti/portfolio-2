import MovingBar from "@/components/moving-bar";
import { Product } from "@/constants/products";
import React from "react";
import ProjectCard from "./project-card";
import { Variants } from "framer-motion";
import Link from "next/link";

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

interface FeaturedProjectsProps {
  data: Product[];
}

function FeaturedProjects({ data }: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-slate-800  py-20"
    >
      <div className="text-center max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
          Featured Projects
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
          A selection of projects I’ve built — from concept to deployment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imageUrl={project.thumbnail}
              slug={project.slug}
              index={i}
              variants={itemVariants}
            />
          ))}
        </div>
        <MovingBar />
        <Link
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          href="/projects"
        >
          View all Projects
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProjects;
