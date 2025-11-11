"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import Image from "next/image";

import EmblaCarousel from "./embla-carousel";

interface ProjectImagesProps {
  thumbnail: string;
  title: string;

  images: string[];
}

const OPTIONS: EmblaOptionsType = { loop: true };

function ProjectImages({ thumbnail, images, title }: ProjectImagesProps) {
  const [activeImage, setActiveImage] = useState(thumbnail);

  return (
    <div className="mx-auto">
      {" "}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        key={activeImage}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
          // placeholder="blur"
          // blurDataURL=""
        />
        {/* <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" /> */}
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap gap-4">
        {/* {images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))} */}
        <div className="w-full">
          <EmblaCarousel
            slides={images}
            options={OPTIONS}
            title={title}
            setActiveImage={setActiveImage}
          />
        </div>
        {/* <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                onClick={() => setActiveImage(image)}
                className="cursor-pointer"
              >
                <div className="relative  w-full h-[300px]">
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </div>
    </div>
  );
}

export default ProjectImages;
