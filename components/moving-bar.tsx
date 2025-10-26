"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const techStack = [
  {
    title: "Reactjs",
    src: "/images/logos/reactjs.png",
    className: "h-18 w-36",
  },
  {
    title: "Next.js",
    src: "/images/logos/next.png",
    className: "h-18 w-36 invert",
  },
  // {
  //   title: "AWS",
  //   src: "/images/logos/aws.webp",
  //   className: "h-18 w-36",
  // },
  {
    title: "Figma",
    src: "/images/logos/figma.png",
    className: "h-18 w-36",
  },
  {
    title: "Framer Motion",
    src: "/images/logos/framer.webp",
    className: "h-18 w-36 invert",
  },
  {
    title: "Tailwind",
    src: "/images/logos/tailwind.png",
    className: "h-18 w-48 invert",
  },
  {
    title: "Node",
    src: "/images/logos/node.png",
    className: "h-18 w-48",
  },
  {
    title: "Express",
    src: "/images/logos/express.png",
    className: "h-18 w-36 invert",
  },
  {
    title: "Nestjs",
    src: "/images/logos/nestjs.png",
    className: "h-18 w-36",
  },
];

export default function MovingBar() {
  const baseVelocity = -100; // pixels per second
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // continuously translate using useAnimationFrame
  useAnimationFrame((t, delta) => {
    const moveBy = (baseVelocity * delta) / 1000; // delta is ms → convert to seconds
    const newX = x.get() + moveBy;

    const container = containerRef.current;
    if (!container) return;

    const width = container.scrollWidth / 2; // half because we duplicated
    // Wrap around seamlessly when one set fully scrolls away
    if (newX <= -width) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  const duplicated = [...techStack, ...techStack]; // duplicate list to loop seamlessly

  return (
    <div className="relative overflow-hidden  py-6 my-6">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10" />

      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-16 px-8 whitespace-nowrap"
      >
        {duplicated.map((item, i) => (
          <Image
            key={`${item.src}-${i}`}
            src={item.src}
            alt={item.title}
            width={120}
            height={48}
            className={cn(
              "object-contain opacity-80 hover:opacity-100 transition",
              item.className
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}
